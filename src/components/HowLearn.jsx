import learnVocabulary from "../assets/how-to-learn.jpg";

const HowLearn = () => {
  return (
    <div className="my-20 w-11/12 mx-auto">
      <h2 className="font-black text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-12 text-center ">
        Our missions & How to Learn Vocabulary
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 shadow-lg border p-5 md:p-8 rounded-2xl">
        <div>
          <ul className="list-disc space-y-4 text-gray-700">
            <h3 className="font-bold text-lg my-4">Our Missions </h3>
            <li>Make language learning fun and engaging.</li>
            <li>Help users build vocabulary easily.</li>
            <li>Provide interactive and structured lessons.</li>
            <li>Improve pronunciation with audio support.</li>
            <li>Simplify language learning challenges.</li>
            <li>Boost confidence in communication skills.</li>
          </ul>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="800"
          className="p-4 border shadow-md rounded-2xl backdrop-blur-2xl lg:w-1/3 mx-auto lg:mr-4"
        >
          <img className="rounded-2xl" src={learnVocabulary} />
        </div>
        <div>
          <ul className="list-disc space-y-4 text-gray-700">
            <h3 className="font-bold text-lg my-4">Tips to follow:- </h3>
            <li>Learn 20 new words daily instead of overwhelming yourself.</li>
            <li>Choose words that are relevant to your interests.</li>
            <li>Practice writing your own sentences using the new words.</li>
            <li>Listen to audio pronunciations and mimic them aloud.</li>
            <li>
              Understand parts of speech to know how words function in
              sentences.
            </li>
            <li>
              Learn synonyms, antonyms, and related words to build associations.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowLearn;
