import { useEffect, useState } from 'react';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  console.error('GitHub token not found');
}
const headers = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: 'application/vnd.github+json',
};

const ORG = 'OpenLake';

const fetchAllPaginated = async (url, perPage = 100) => {
  let page = 1;
  let results = [];
  while (true) {
    const res = await fetch(`${url}?per_page=${perPage}&page=${page}`, { headers });
    if (!res.ok) {
      console.warn(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
      break;
    }
    const data = await res.json();
    results = results.concat(data);
    if (data.length < perPage) break;
    page++;
  }
  return results;
};

const useStats = () => {
  const [stats, setStats] = useState({
    openPRs: 0,
    mergedPRs: 0,
    issuesOpened: 0,
    issuesClosed: 0,
    linesAdded: 0,
    contributors: 0,
    isLoading: true,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const repos = await fetchAllPaginated(`https://api.github.com/orgs/${ORG}/repos`);
        let openPRs = 0,
          mergedPRs = 0,
          issuesOpened = 0,
          issuesClosed = 0,
          linesAdded = 0;
        const contributorsSet = new Set();

        for (const repo of repos) {
          try {
            const repoName = repo.name;

            const [openPRsData, closedPRsData, issuesData] = await Promise.all([
              fetchAllPaginated(`https://api.github.com/repos/${ORG}/${repoName}/pulls?state=open`),
              fetchAllPaginated(`https://api.github.com/repos/${ORG}/${repoName}/pulls?state=closed`),
              fetchAllPaginated(`https://api.github.com/repos/${ORG}/${repoName}/issues?state=all`),
            ]);

            openPRs += openPRsData.length;
            mergedPRs += closedPRsData.filter(pr => pr.merged_at).length;

            issuesOpened += issuesData.filter(issue => !issue.pull_request).length;
            issuesClosed += issuesData.filter(issue => !issue.pull_request && issue.state === 'closed').length;

            const contributorsRes = await fetch(
              `https://api.github.com/repos/${ORG}/${repoName}/stats/contributors`,
              { headers }
            );

            if (contributorsRes.status === 202) {
              console.warn(`Contributor stats not ready yet for ${repoName}`);
              continue;
            }

            if (!contributorsRes.ok) {
              console.warn(`Failed to fetch contributor stats for ${repoName}: ${contributorsRes.status} ${contributorsRes.statusText}`);
              continue;
            }

            const contributorsData = await contributorsRes.json();

            if (Array.isArray(contributorsData)) {
              for (const contributor of contributorsData) {
                if (contributor.author?.login) {
                  contributorsSet.add(contributor.author.login);
                }
                linesAdded += contributor.weeks.reduce((sum, week) => sum + week.a, 0);
              }
            }

            await new Promise(res => setTimeout(res, 300)); // Rate limit buffer
          } catch (repoError) {
            console.error(`Error processing ${repo.name}:`, repoError.message);
            continue;
          }
        }

        setStats({
          openPRs,
          mergedPRs,
          issuesOpened,
          issuesClosed,
          linesAdded,
          contributors: contributorsSet.size,
          isLoading: false,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error.message);
        setStats(prev => ({ ...prev, isLoading: false }));
      }
    };

    fetchStats();
  }, []);

  return stats;
};

export default useStats;
