export const sections = [
  {
    title: "What is Open Source?",
    icon: "❓",
    width: "w-full lg:w-[31%]",
    content:
      "Open Source software is publicly accessible code that anyone can use, modify, and distribute. This facilitates collaboration and innovation across communities."
  },
  {
    title: "Why Contribute?",
    icon: "🌟",
    width: "w-full lg:w-[32%]",
    content:
      "Contributing improves software, boosts your skills, and connects you with open source communities worldwide."
  },
  {
    title: "Basics of FOSS & Licensing",
    icon: "📚",
    width: "w-full lg:w-[31%]",
    content:
      "Free and Open Source Software (FOSS) allows users freedom to run, study, change, and share software. Licenses like MIT, GPL, and Apache govern usage and distribution terms."
  },
  {
    title: "Git & GitHub Essentials",
    icon: "🐙",
    width: "w-full lg:w-[60%]",
    content:
      "Git is a version control system that tracks your code changes. GitHub provides graphical and web tools to collaborate on projects.",
    list: [
      "git clone [url] - copy a repo locally",
      "git add . - stage files",
      'git commit -m "message" - commit with a message',
      "git push - upload changes to GitHub"
    ],
    extra: "GUI tools like GitHub Desktop and VS Code can simplify Git commands.",
  },
  {
    title: "Common Tools",
    icon: "🛠",
    width: "w-full lg:w-[37%]",
    listWithBold: [
      { bold: "VS Code:", text: "Popular editor with Git integration and extensions." },
      { bold: "Git CLI:", text: "Command-line interface for Git version control." },
      { bold: "GitHub Desktop:", text: "User-friendly app for GitHub workflows." },
      { bold: "Docker:", text: "Container platform, useful for creating repeatable dev environments." }
    ]
  },
  {
    title: "Creating Your First PR Walkthrough",
    icon: "🎬",
    width: "w-full lg:w-[37%]",
    list : [
        "Fork a repository",
        "make your changes",
        "submit a pull request to contribute",
        "Maintainers review and merge PRs."
    ]
  },
];
