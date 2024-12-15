import Cards from "./Cards";
import LearnTutorials from "./LearnTutorials";

const StartLearning = () => {
  return (
    <div>
      <div className="text-center py-20 bg-primaryBg mb-12">
        <h2 className="font-bold text-3xl md:text-4xl mb-2">
          Let’s Learn Together!
        </h2>
        <p className="text-gray-500 text-center">
          Dive into interactive lessons and comprehensive tutorials designed to
          enrich your <br className="hidden lg:block" /> vocabulary and make
          learning enjoyable!
        </p>
      </div>
      <div className="w-11/12 mx-auto mb-28">
        <Cards />
        <LearnTutorials />
      </div>
    </div>
  );
};

export default StartLearning;
