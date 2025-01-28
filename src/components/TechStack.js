import Image from "next/image";

import ReactIcon from "../../public/icons/react.svg";
import NextIcon from "../../public/icons/nextdotjs.svg";
import TailwindIcon from "../../public/icons/tailwindcss.svg";
import JavaScriptIcon from "../../public/icons/javascript.svg";
import PythonIcon from "../../public/icons/python.svg";
import DjangoIcon from "../../public/icons/django.svg";
import BootstrapIcon from "../../public/icons/bootstrap.svg";

const TechStack = () => {
  const techs = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextIcon },
    { name: "TailwindCSS", icon: TailwindIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Django", icon: DjangoIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
  ];

  return (
    <div className="tech-stack-container z-10 text-center">
      <h2 className="text-5xl my-6 py-3">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {techs.map((tech, index) => (
          <div key={index} className="card flex flex-col items-center neumorphic-circle justify-center w-24 h-24 bg-color2 shadow-neumorphic hover:shadow-neumorphicHover transform hover:translate-y-[-4px] transition-all">
            <Image
              src={tech.icon}
              alt={tech.name}
              className="tech-icons w-16 h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
