import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-start">
      {/* Top-left profile box */}
      <div className="flex flex-col items-center w-48">
        <Image
          src="/profile.jpg"
          alt="Erim Yanik"
          width={220}
          height={220}
          className="rounded-full border border-gray-300 shadow-md mb-3"
        />
        <h1 className="text-xl font-bold text-center">Dr. Erim Yanik</h1>
        <p className="text-sm text-center text-gray-600">
          AI/ML Research Scientist
        </p>
      </div>
    </main>
  );
}
