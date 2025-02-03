import Image from "next/image";

const TechStack = ({ techs }) => {
  return (
    <div className="flex flex-wrap justify-center pb-4 gap-8">
      {techs.map((tech, index) => (
        <div
          key={index}
          className="card flex flex-col items-center neumorphic-square justify-center p-2 w-24 h-24 bg-color2 shadow-neumorphic hover:shadow-neumorphicHover transform hover:translate-y-[-4px] transition-all"
        >
          <Image
            src={tech.icon}
            alt={tech.name}
            className="tech-icons"
            width={64}
            height={64}
          />
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
