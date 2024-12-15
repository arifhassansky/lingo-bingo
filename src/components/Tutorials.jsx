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
  {
    id: 5,
    src: "https://www.youtube.com/embed/Zv55AD9yZKc?si=wDSOzfaqGir-rmpO",
  },
  {
    id: 6,
    src: "https://www.youtube.com/embed/-I7iUUp-cX8?si=SoAyOWthQeJUm_kx",
  },
  {
    id: 7,
    src: "https://www.youtube.com/embed/kpC2FdTmjwc?si=sixhjSXXRGIeoULd",
  },
  {
    id: 8,
    src: "https://www.youtube.com/embed/2Fi0-uApPms?si=pC6xYgiyuR726rKL",
  },
];

const Tutorials = () => {
  return (
    <div className="mb-12">
      <div className="text-center bg-primaryBg py-12">
        <h2 className="font-semibold text-2xl mb-2">
          Master the Language: Comprehensive Tutorials
        </h2>
        <p className="text-gray-500">
          Dive into curated video lessons to boost your skills and
          understanding. Start your <br className="hidden lg:block" />{" "}
          vocabulary journey today!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto mt-12">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            className="w-full aspect-w-16 aspect-h-9 border p-4 rounded-xl flex justify-center"
          >
            <iframe
              src={tutorial.src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg border border-gray-300"
            ></iframe>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/learning"
          className="btn bg-secondary rounded-md mt-6 text-white py-2 px-6 md:px-12 lg:px-16 hover:bg-primary transition"
        >
          Learn Vocabulary
        </Link>
      </div>
    </div>
  );
};

export default Tutorials;
