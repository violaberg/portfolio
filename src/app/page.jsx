import Image from "next/image";
import portfolioImage from "/public/images/portfolio-img.webp";
import NoiseBackground from "@/components/NoiseBackground";

export const metadata = {
  title: "Viola Bergere | Home",
  description: "Welcome to my portfolio website. I'm a Full Stack Developer specializing in creating innovative web applications with modern technologies. View my projects and experience in software development.",
};

const Home = () => {
  return (
    <>
          {/* Card with Text and Image */}
          <div className="card flex flex-col items-center sm:items-start mx-auto mt-32 gap-6">
            <NoiseBackground />
            {/* Text Section */}
            <div className="content flex-1">
              <h1 className="text-center text-5xl p-6">
                Viola Bergere
              </h1>
              <h2 className="text-3xl text-center">Full Stack Developer</h2>
              <p className="mt-4 text-center">
                Passionate about crafting innovative, user-friendly applications.
                Explore my work and let's bring ideas to life together!
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 mx-auto">
              <Image
                src={portfolioImage}
                alt="Viola Bergere"
                className="profile-img rounded-lg mb-3 rotate-3"
                width={240}
                style={{ height: "auto" }}
                priority={true}
              />
            </div>
          </div>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
};

export default Home;
