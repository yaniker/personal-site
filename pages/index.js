import { useState } from "react";
import { FaLinkedin, FaGithub, FaGraduationCap } from "react-icons/fa";
import Image from "next/image";
import ResumeContent from "../components/ResumeContent";
import ProjectsContent from "../components/ProjectsContent";
import LeadershipContent from "../components/LeadershipContent";
import MediaContent from "../components/MediaContent";
import PublicationsContent from "../components/PublicationsContent";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    "about",
    "projects",
    "publications",
    "resume",
    "leadership",
    "public speaking",
    "media",
    "hobbies"
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <p className="text-lg mt-4">
            Hi, I’m Dr. Erim Yanik. I’m an AI researcher focused on making
            machine learning practical, reliable, and human-centered. I build
            systems that solve real-world problems — from surgical training
            tools to generative AI applications. Outside the lab, I lead, speak,
            create, and coach. Welcome to my page!
          </p>
        );
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
      case "media":
        return <MediaContent />;
      case "publications":
        return <PublicationsContent />;
      default:
        return null;
    }
  };

  return (
    <main
      className="min-h-screen text-gray-900 p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/ocean.jpg')" }}
    >
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
          <div className="text-center">
            <h1 className="text-xl font-bold">Dr. Erim Yanik</h1>
            <p className="text-sm text-gray-700">AI/ML Research Scientist</p>

            <div className="flex justify-center gap-4 mt-3 text-2xl text-blue-600">
              <a
                href="https://www.linkedin.com/in/erim-yanik/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yaniker"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://scholar.google.com/citations?user=-ekL3ZYAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Scholar"
              >
                <FaGraduationCap />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Tabs and content */}
        <div className="flex-1">
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
                  index === 0
                    ? "rounded-l"
                    : index === tabs.length - 1
                    ? "rounded-r"
                    : ""
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>

          <div className="bg-white p-4 rounded shadow">{renderContent()}</div>
        </div>
      </div>
    </main>
  );
}
