import ProjectsInfo from "./ProjectInfo";
import Skills from "./Skills";

const AboutUs = () => {
  return (
    <div>
      <div className="text-center space-y-6 bg-primaryBg py-12">
        <h1 className="text-5xl font-extrabold tracking-wide">About Me</h1>
        <p className="text-xl leading-relaxed">
          Welcome to{" "}
          <span className="text-primary font-bold">Md. Arif Hassan</span>, where
          innovation meets creativity!
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          At <span className="text-primary font-bold">WEBSKY</span>, we
          specialize in crafting user-friendly, efficient, and modern digital
          experiences tailored to your needs. Whether you’re building e-commerce
          platforms, custom web applications, or unique websites makes it
          happen.
        </p>
      </div>
      <Skills />
      <ProjectsInfo />
    </div>
  );
};

export default AboutUs;
