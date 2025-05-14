export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4">Dr. Erim Yanik</h1>
      <p className="text-lg mb-6 text-center">
        AI/ML Research Scientist • Public Speaker • Musician • Photographer
      </p>
      <div className="space-x-4">
        <a href="/ai_portfolio" className="text-blue-600 underline">AI portfolio</a>
        <a href="/public_speaking" className="text-blue-600 underline">Public Speaking</a>
        <a href="/leadership" className="text-blue-600 underline">Leadership</a>
        <a href="/creative" className="text-blue-600 underline">Creative</a>
        <a href="/about" className="text-blue-600 underline">About</a>
         <a href="/resume" className="text-blue-600 underline">Resume</a>
      </div>
    </main>
  );
}
