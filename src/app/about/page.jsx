import TechStack from "@/components/TechStack";
import aboutTechStack from "../data/aboutTechStack";
import NoiseBackground from "@/components/NoiseBackground";

export const metadata = {
  title: "About",
  description: "Learn more about Viola Bergere - Full Stack Web Developer specializing in React, Next.js and Django. Discover my journey, skills, and passion for creating impactful web applications.",
};

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center mt-36">
        <div className="card relative mx-auto">
          <NoiseBackground />
          <div className="content">
            <section className="flex flex-col md:flex-row items-center gap-8">
              {/* Text Section */}
              <div className="flex-1">
                <h1 className="text-center text-5xl p-4">About Me</h1>
                <p className="pb-3">
                  Hi, I'm Viola, a passionate Full Stack Web Developer specializing in building user-focused, scalable applications. Proficient in technologies like React, Next.js, Django and Tailwind CSS, I enjoy tackling complex challenges and delivering seamless solutions that combine functionality with outstanding user experience.
                </p>

                <p className="py-3">
                  As an active member of a HackTeam, I collaborate with like-minded individuals to organize hackathons, brainstorming creative themes, defining judging criteria, and ensuring a meaningful experience for participants. Additionally, as a mentor and ambassador, I guide hackathon teams through project planning, technology selection, and effective collaboration, fostering innovation under tight deadlines. My portfolio highlights these efforts, featuring award-winning hackathon projects and other impactful initiatives.
                </p>

                <p className="py-3">
                  Beyond my technical skills, my background in customer service has strengthened my interpersonal and problem-solving abilities, allowing me to connect with users and understand their needs effectively. My studies in interior design further enhance my creative edge, with a strong focus on color theory and visual harmony that I bring to the digital world.
                </p>

                <p className="py-3">
                  I’m driven by a love for continuous learning and innovation, and I’m dedicated to creating web applications that make a difference. Whether organizing hackathons, mentoring teams, or independently building projects, I’m always eager to push boundaries and deliver meaningful results.
                </p>
              </div>
            </section>
            <div className="mx-auto text-center py-4">
              <a
                href="/contact"
                className="btnCard rounded-lg shadow-lg font-semibold mt-3 p-3"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        {/* Tech Stack Section */}
        <div className="tech-stack-container py-4 z-10 text-center">
          <h2 className="text-5xl my-6 py-3">Tech Stack</h2>
          <TechStack techs={aboutTechStack} />
        </div>
      </div>
    </>
  );
};

export default page;
