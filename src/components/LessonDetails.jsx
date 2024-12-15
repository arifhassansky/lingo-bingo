import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const LessonDetails = () => {
  const [lessonData, setLessonData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const nagivate = useNavigate();
  const data = useLoaderData();
  const { lessonNo } = useParams();

  const handleBackLesson = () => {
    nagivate("/learning");
  };

  useEffect(() => {
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  const pronounceWord = (word) => {
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(
      (voice) =>
        voice.gender === "female" || voice.name.toLowerCase().includes("female")
    );

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.voice = femaleVoice || voices[0];
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const filteredData = data.filter((items) => items.Lesson_no == lessonNo);
    setLessonData(filteredData);
  }, [data, lessonNo]);

  return (
    <div className="mb-12">
      <div className="text-center py-12 bg-primaryBg mb-12">
        <h2 className="font-bold text-4xl mb-2">
          Let’s Learn Lesson:- {lessonNo}
        </h2>
        <p className="text-gray-500">
          Explore lessons to enhance your vocabulary journey!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-11/12 mx-auto">
        {lessonData.map((item) => (
          <div
            onClick={() => pronounceWord(item.pronunciation)}
            key={item.Id}
            className={`border p-6 rounded-xl shadow-xl ${
              item.difficulty === "easy"
                ? "bg-green-100 border border-green-400 text-green-700"
                : "bg-yellow-50 border border-yellow-500 text-yellow-700"
            }`}
          >
            <div className="space-y-3">
              <h3 className="text-xl font-bold mb-2">{item.word}</h3>
              <p className="text-sm mb-1">
                <span className="font-semibold">Meaning: </span> {item.meaning}
              </p>
              <p className="text-sm mb-1">
                <span className="font-semibold">Pronunciation: </span>{" "}
                {item.pronunciation}
              </p>
              <p className="text-sm mb-2">
                <span className="font-semibold">Part of Speech: </span>{" "}
                {item.part_of_speech}
              </p>
            </div>
            <button
              onClick={() => setSelectedItem(item)}
              className="mt-4 w-full px-4 py-2 bg-secondary text-white text-sm font-medium rounded hover:bg-primary transition"
            >
              When to Say
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box space-y-3">
            <h3 className="font-bold text-lg"> Word: {selectedItem.word}</h3>
            <p className="mb-1">
              <span className="font-semibold">Meaning: </span>{" "}
              {selectedItem.meaning}
            </p>
            <p className="mb-1">
              <span className="font-semibold">When to Say: </span>{" "}
              {selectedItem.when_to_say}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Example: </span>{" "}
              {selectedItem.example}
            </p>

            <div className="modal-action justify-center">
              <button
                onClick={() => setSelectedItem(null)}
                className="btn px-52 bg-secondary text-white hover:bg-primary mt-6"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
      <div className="text-center">
        <button
          onClick={handleBackLesson}
          className="btn px-16  bg-primary text-white hover:bg-secondary mt-8"
        >
          Back to Lesson
        </button>
      </div>
    </div>
  );
};

export default LessonDetails;
