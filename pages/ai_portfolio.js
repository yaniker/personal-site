export default function AIPortfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <h1 className="text-3xl font-bold mb-4">AI Portfolio</h1>
      <p className="text-lg mb-4">
        Here’s a showcase of the AI and ML projects I’ve worked on.
      </p>

      {/* Placeholder for actual projects */}
      <ul className="list-disc pl-6 space-y-2">
        <li>Meta-learning for surgical AI – Few-shot learning in hospitals</li>
        <li>TrustPy – Uncertainty validation for AI systems</li>
        <li>FLS Challenge Winner – OB-GYN testing automation</li>
      </ul>
    </main>
  );
}
