import { useState, useEffect } from "react";

export const useProjects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.github.com/users/openlake/repos", {
          headers: {
            Authorization: import.meta.env.PERSONAL_ACCESS_TOKEN || "",
          },
        });

        const data = await response.json();

        setRepos(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { repos, loading, error };
};