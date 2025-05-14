import { useEffect, useState } from "react";

export default function ProjectsContent() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const allowed = [
        "TrustPy",
        "ClothingRecommendationApp",
        "one-shot-skill-assessment-in-high-stakes-domains-with-limited-data-via-meta-learning",
    ];

    const displayNames = {
    "TrustPy": "TrustPy – AI Reliability Validator",
    "ClothingRecommendationApp": "Smart Clothing Recommender App",
    "one-shot-skill-assessment-in-high-stakes-domains-with-limited-data-via-meta-learning": "Meta-Learner for few-shot time-series task adaptation",        
    };

  useEffect(() => {
  fetch("https://api.github.com/users/yaniker/repos")
    .then((res) => res.json())
    .then((data) => {
      const filtered = data
        .filter((repo) =>
          allowed.map((name) => name.toLowerCase()).includes(repo.name.toLowerCase())
        )
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

      setRepos(filtered);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching GitHub repos:", err);
      setLoading(false);
    });
}, []);

  if (loading) {
    return <p className="mt-4">Loading projects...</p>;
  }

  return (
    <div className="space-y-6 mt-4">
      {repos.map((repo) => (
        <div key={repo.id}>
          <h3 className="text-xl font-semibold">
            {displayNames[repo.name] || repo.name}
          </h3>
          <p className="text-sm text-gray-700">
            {repo.description || "No description provided."}
          </p>
          <a
            href={repo.html_url}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}
