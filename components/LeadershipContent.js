export default function LeadershipContent() {
  const leadership = [
    {
      title: "President",
      org: "Tallahassee Toastmasters Club – 2nd oldest in Florida State",
      date: "July 2024 – Present",
      desc: "Introduced parliamentary reforms that increased membership by 40% in 3 months.",
      image: "/leadership_media/toastmaster_president.jpg"
    },
    {
      title: "Area Director",
      org: "Toastmasters International – District 84, Area 80",
      date: "July 2024 – Present",
      desc: "Lobbied to protect club rights, including one at a correctional facility.",
      image: "/leadership_media/area_director.jpg"
    },
    {
      title: "Coach",
      org: "Talk of Tallahassee Toastmasters Club",
      date: "October 2024 – Present",
      desc: "Appointed by District to coach and boost membership.",
      image: "/leadership_media/toast_club_coach.jpg"
    },
    {
      title: "Organizing Associate",
      org: "RPI Student Leadership – Professional Leadership Seminars",
      date: "2022",
      desc: "Led leadership panels under Prof. Judith Obiero."
    },
    {
      title: "Councilman",
      org: "RPI Mechanical Engineering Student Advisory Council",
      date: "2019",
      desc: "Advised during faculty meetings and hiring."
    },
    {
      title: "Master of Ceremonies",
      org: "SIUE International Night",
      date: "2018"
    },
    {
      title: "President",
      org: "Alpha Chi Chapter of Pi Tau Sigma (ΠΤΣ) – Honor Society",
      date: "–",
      desc: "Enhanced SIUe’s involvement in high school STEM initiatives."
    },
    {
      title: "Representative",
      org: "SIUe University Center Advisory Board",
      date: "–",
      desc: "Oversaw budget allocation for university common grounds."
    },
    {
      title: "Representative",
      org: "SIUe Graduate School Executive Committee",
      date: "–",
      desc: "Voting member on hiring, program creation/removal."
    },
    {
      title: "Senator",
      org: "SIUe Student Government",
      date: "–",
      desc: "Promoted campus art/music and supported minority events."
    },
    {
      title: "Representative",
      org: "RPI Union Executive Board",
      date: "–",
      desc: "Supported diversity initiatives and international student clubs."
    },
    {
      title: "Senator",
      org: "RPI Student Senate",
      date: "(Resigned due to pandemic)"
    },
    {
      title: "Councilman",
      org: "RPI Graduate Student Council",
      date: "(Resigned due to pandemic)"
    }
  ];

  return (
    <div className="bg-white text-gray-900 p-6 rounded shadow max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Leadership</h2>

      <div className="grid gap-8">
        {leadership.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } items-start sm:items-center gap-6`}
          >
            {/* Image bubble */}
            {item.image && (
              <img
                src={item.image}
                alt={`${item.title} at ${item.org}`}
                className="w-48 h-48 rounded-full object-cover border shadow"
              />
            )}

            {/* Text block */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <p className="font-semibold">{item.title} | {item.org}</p>
                  {item.desc && (
                    <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
                  )}
                </div>
                <span className="text-sm text-gray-500 sm:text-right whitespace-nowrap mt-2 sm:mt-0">
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
