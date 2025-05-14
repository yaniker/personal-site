import { useState } from "react";
import Image from "next/image";
import ResumeContent from "../components/ResumeContent";
import ProjectsContent from "../components/ProjectsContent";
import LeadershipContent from "../components/LeadershipContent";



export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = ["about", "projects", "leadership", "public speaking", "publications", "on media", "resume", "hobbies"];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <p className="text-lg mt-4">Erim Yanik</p>;
      case "projects":
        return <ProjectsContent />;
      case "public speaking":
        return <p className="text-lg mt-4">Public speaking content</p>;
      case "leadership":
        return <LeadershipContent />;
      case "hobbies":
        return <p className="text-lg mt-4">Photography and music</p>;
      case "resume":
        return <ResumeContent />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-red-200 to-orange-100 text-gray-900 p-6">
      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Left: Profile box */}
        <div className="flex flex-col items-center w-48">
          <Image
            src="/profile.jpg"
            alt="Erim Yanik"
            width={180}
            height={180}
            className="rounded-full border border-gray-300 shadow-md mb-3"
          />
          <h1 className="text-xl font-bold text-center">Dr. Erim Yanik</h1>
          <p className="text-sm text-center text-gray-700">AI/ML Research Scientist</p>
        </div>

        {/* Right: Tabs and content */}
        <div className="flex-1">
          {/* Tabs */}
          <nav className="flex border-b border-gray-300 mt-4">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 -mb-px text-sm font-medium border ${
                  activeTab === tab
                    ? "bg-white text-red-600 border-t border-l border-r rounded-t shadow-md"
                    : "bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200"
                } ${
                  index === 0 ? "rounded-l" : index === tabs.length - 1 ? "rounded-r" : ""
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>

          {/* Content */}
          <div className="bg-white p-4 rounded shadow">{renderContent()}</div>
        </div>
      </div>
    </main>
  );
}
