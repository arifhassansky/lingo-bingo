import { Link } from "react-router-dom";

const tutorials = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/ZJ-Zk191BKk?si=JhRAV6orZKwU3nN_",
    title: "Tutorial 1",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/HUoj5s5AnZg?si=0s_Hx6F_KgHgLGSG",
    title: "Tutorial 2",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/U3MfXjiL0rM?si=8lRihIEmIY5p_HJw",
    title: "Tutorial 3",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/pzgIWBY5LL4?si=AHXjzAxwSb9u48CK",
    title: "Tutorial 4",
  },
];

const LearnTutorials = () => {
  return (
    <div>
      <div className="text-center py-2 mb-12 b">
        <h2 className="font-bold text-3xl md:text-4xl mb-2">Tutorials</h2>
        <p className="text-gray-500 text-center">
          Explore a variety of tutorials designed to expand your vocabulary and
          help <br className="hidden lg:block" /> you master new words with
          ease!
        </p>
      </div>

      {/* Tutorials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            className="w-full aspect-w-16 aspect-h-9 flex justify-center"
          >
            <iframe
              src={tutorial.src}
              title={tutorial.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg border border-gray-300"
            ></iframe>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/tutorials"
          className="btn bg-secondary rounded-md mt-6 text-white py-2 px-16 hover:bg-primary transition"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default LearnTutorials;
