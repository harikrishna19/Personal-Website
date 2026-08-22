
const vizData = [
  {
    title: "Liverpool 2024-25 Premier League Analysis",
    desc: "Comprehensive analysis including Liverpool formations, goals scored by time ranges, top goal scorers, and Mohamed Salah scoring performance across teams and match weeks.",
    image: "https://raw.githubusercontent.com/harikrishna19/Football-analysis-24-25/main/images/01-liverpool_infographic.png",
    link: "https://github.com/harikrishna19/Football-analysis-24-25/tree/main/R/01-Liverpool%20Infographic"
  },
  {
    title: "Premier League 2024-25 Season Animation",
    desc: "Dynamic animated visualization using gganimate showing team positions by match week and points accumulation throughout the 38-week season.",
    image: "https://raw.githubusercontent.com/harikrishna19/Football-analysis-24-25/main/images/02_pl_infographic.png",
    link: "https://github.com/harikrishna19/Football-analysis-24-25/tree/main/R/02-Premier%20League%20animation"
  },
  {
    title: "Tottenham Spurs 2024-25 Player Availability Analysis",
    desc: "Deep dive into Tottenham squad availability by match week, tracking player injuries, rotations, and their impact on league performance.",
    image: "https://raw.githubusercontent.com/harikrishna19/Football-analysis-24-25/main/images/Tottenham_Infographic.png",
    link: "https://github.com/harikrishna19/Football-analysis-24-25/tree/main/R/03-PlayingXI-Analysis-Spurs"
  },
  {
    title: "Posit Table Contest 2025 Submission",
    desc: "A curated visualization submitted to the 2025 Posit Table Contest showcasing creative table designs and interactive elements for sports data.",
    image: "https://raw.githubusercontent.com/harikrishna19/Football-analysis-24-25/main/images/PL_New.png",
    link: "https://github.com/harikrishna19/Posit-Table-Contest-2025"
  },
  {
    title: "Promoted Teams Performance Analysis",
    desc: "Analysis of teams promoted to the Premier League and their performance, including historical context and comparative insights across different eras.",
    image: "https://raw.githubusercontent.com/harikrishna19/Football-analysis-24-25/main/images/final_viz.png",
    link: "https://github.com/harikrishna19/Football-analysis-24-25/tree/main/R"
  },
  {
    title: "January Transfer Analysis: 2025-26 Season",
    desc: "Comprehensive transfer market analysis covering transfer values, team movements, spending patterns, and squad improvements for the 2025-26 season.",
    image: "https://raw.githubusercontent.com/harikrishna19/Football-analysis-24-25/main/R/06-Transfer-Markt-2025-26-season/final_plot.png",
    link: "https://github.com/harikrishna19/Football-analysis-24-25/tree/main/R/06-Transfer-Markt-2025-26-season"
  },
  {
    title: "Chelsea Strikers Analysis",
    desc: "Focused analysis on Chelsea striking force including individual and collective metrics, goal contributions, assists, conversion rates, and positioning analysis.",
    image: "https://raw.githubusercontent.com/harikrishna19/Football-analysis-24-25/main/images/Rplot.png",
    link: "https://github.com/harikrishna19/Football-analysis-24-25/tree/main/R/07-chelsea-striker-analysis"
  },
  {
    title: "Title Race Visualization: Premier League 2025-26",
    desc: "Intense competition tracking for the Premier League title race, featuring top contenders, points gap analysis, and historical comparisons with previous title races.",
    image: "https://raw.githubusercontent.com/harikrishna19/Football-analysis-24-25/main/R/08-title-race/final_viz_update.png",
    link: "https://github.com/harikrishna19/Football-analysis-24-25/tree/main/R/08-title-race"
  },
  {
    title: "EFL Championship 2025-26 Top 6 Teams Summary",
    desc: "Analysis of the top 6 teams in the English Football League Championship, highlighting leading teams, key statistics, trends, and promotion contenders.",
    image: "https://raw.githubusercontent.com/harikrishna19/Football-analysis-24-25/main/images/efl_final.png",
    link: "https://github.com/harikrishna19/Football-analysis-24-25/tree/main/R/09-efl-championship"
  }
];

function openModal(index) {
  const viz = vizData[index];
  document.getElementById("modalImage").src = viz.image;
  document.getElementById("modalTitle").textContent = viz.title;
  document.getElementById("modalDesc").textContent = viz.desc;
  document.getElementById("modalLink").href = viz.link;
  document.getElementById("modal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
  document.body.style.overflow = "auto";
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeModal();
});

document.getElementById("modal").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});

