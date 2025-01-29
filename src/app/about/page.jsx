import TechStack from "@/components/TechStack";

const page = () => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center min-h-screen mt-36">
      <div className="card relative">
        <svg
          viewBox="0 0 100% 100%"
          xmlns="http://www.w3.org/2000/svg"
          className="noise"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="6"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            filter="url(#noiseFilter)"
          />
        </svg>
        <div className="content">
          <section className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Section */}
            <div className="flex-1">
              <h1 className="justify-self-center text-5xl p-4">About Me</h1>
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
          <div className="mx-auto text-center">
            <a
              href="/contact"
              className="primaryBtn rounded-lg shadow-lg font-semibold mt-3 p-3"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      {/* Tech Stack Section */}
      <TechStack />
    </div>
  );
};

export default page;
