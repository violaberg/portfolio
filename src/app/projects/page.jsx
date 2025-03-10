import EmblaCarousel from "@/components/EmblaCarousel";
import SocialLink from "@/components/SocialLink"; 
import { FaGithub } from "react-icons/fa";
import NoiseBackground from "@/components/NoiseBackground";

export const metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects, including hackathon collaborations, personal works, and team contributions. Each project demonstrates my technical skills, problem-solving abilities, and passion for creating innovative solutions."
};

const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const page = () => {
  return (
    <>
      <div className="flex flex-col mt-36">
        <div className="card relative">
          <NoiseBackground />
          <div className="content">
            <h1 className="text-center text-5xl p-4">Projects</h1>
            <p>
              These projects showcase my expertise through practical examples of
              my work, featuring brief descriptions, links to code repositories,
              and live sites. Some of these are hackathon projects that
              demonstrate not only my ability to tackle intricate challenges and
              adapt to diverse technologies but also my skill in collaborating
              effectively with teams under tight deadlines.
            </p>
            <div className="pt-3">To explore all the projects I've contributed to, please visit my
              <span className="inline-flex font-semibold pl-1"> Github
                <SocialLink Icon={FaGithub} url="https://github.com/violaberg" className="items-center pl-1" size={24}/>
                </span>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </>
  );
};

export default page;
