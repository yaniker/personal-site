import Image from "next/image";

export default function MediaContent() {
  const media = [
   {
      title: "Toastmasters D84 – Club Ambassador of the Year 2024",
      url: "https://toastmastersd84.org/club-ambassadors/",
      image: "/media/toastmasters.jpg",
    },
    {
      title: "Judging TLH Classical School Public Speaking",
      url: "https://www.instagram.com/tlhclassical/reel/DDfUuoORofR/",
      image: "/media/instagram.jpg",
    },
    {
      title: "News about ASHRAE Scholarships Awarded",
      url: "https://www.riverbender.com/news/details/siue-school-of-engineering-students-receive-ashrae-scholarships-28133.cfm",
      image: "/media/riverbender1.jpg",
    },
    {
      title: "Riverbender – Finals Week Late-Night Breakfast",
      url: "https://www.riverbender.com/news/details/students-enjoy-delicious-late-night-breakfast-to-kick-off-finals-week-25460.cfm",
      image: "/media/riverbender2.jpg",
    },
    {
      title: "SIUE – ASHRAE Scholarships",
      url: "https://www.siue.edu/news/2018/04/SIUE-School-of-Engineering-Students-Receive-ASHRAE-Scholarships.shtml",
      image: "/media/siue.jpg",
    },
    {
      title: "Surgery International – AI in Surgical Training",
      url: "https://surgery.international/ai-tool-set-to-revolutionise-surgical-training/",
      image: "/media/surgeryintl.jpg",
    },
    {
      title: "AZoRobotics – AI Tool for Surgical Training",
      url: "https://www.azorobotics.com/News.aspx?newsID=15129",
      image: "/media/azorobotics.jpg",
    },
    {
      title: "FSU News – Building a Better Surgeon",
      url: "https://news.fsu.edu/news/science-technology/2024/08/02/building-a-better-surgeon-famu-fsu-college-of-engineering-researchers-develop-artificial-intelligence-tool-for-surgical-training/",
      image: "/media/fsu.jpg",
    },
    {
      title: "FAMU-FSU Engineering – AI Tool for Surgeons",
      url: "https://eng.famu.fsu.edu/news/building-better-surgeon-researchers-develop-artificial-intelligence-tool-surgical-training",
      image: "/media/famufsuen.jpg",
    },
    {
      title: "ETV.az – AI Tool for Surgical Training",
      url: "https://etv.az/daha-yaxsi-c%C9%99rrah-qurmaq-t%C9%99dqiqatcilar-c%C9%99rrahi-t%C9%99lim-ucun-suni-intellekt-al%C9%99ti-hazirlayirlar/",
      image: "/media/etv.jpg",
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      {media.map((item) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block border rounded-lg shadow hover:shadow-lg overflow-hidden"
        >
          <div className="relative h-40 w-full bg-gray-100">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
}
