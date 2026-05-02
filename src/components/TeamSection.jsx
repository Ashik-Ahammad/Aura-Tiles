
import Image from "next/image";
import { Card } from "@heroui/react";

const teamData = [
  {
    name: "Arif Ahmed",
    role: "Tile Installation Expert",
    image:
      "https://bracketweb.com/floenswp/wp-content/uploads/2024/01/team-1-1.jpg",
  },
  {
    name: "Abul Hasan",
    role: "Project Supervisor",
    image:
      "https://bracketweb.com/floenswp/wp-content/uploads/2024/01/team-1-2.jpg",
  },
  {
    name: "Sabbir Hossain",
    role: "Construction Specialist",
    image:
      "https://bracketweb.com/floenswp/wp-content/uploads/2024/01/team-1-3.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F7F5F2]">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-6 items-center mb-12">
          <div>
            <p className="text-sm text-[#C68B5F] font-semibold uppercase">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B1E17] mt-2">
              Meet Our Best Team Members
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-4">
              Our team ensures high-quality tile solutions with professional
              installation and modern design expertise.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[#2B1E17]">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
