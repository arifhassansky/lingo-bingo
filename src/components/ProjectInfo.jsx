const Projects = [
  {
    image: "https://i.ibb.co.com/8X2tx8k/gadget-heaven.jpg",
    title: "Gadget Heaven",
    desc: "GadgetHaven is a gadget store with a cart, wishlist, filtering, sorting, and smooth local storage-based functionality.",
  },
  {
    image: "https://i.ibb.co.com/nfHWQxH/Pet-Adoption.png",
    title: "Peddy Pet Adoption",
    desc: "Peddy Pet Adoption is a responsive app for browsing, adopting pets, and saving favorites.",
  },
  {
    image: "https://i.ibb.co.com/kHGY5xn/Donate-to-Bangladesh.jpg",
    title: "Donate Bangladesh",
    desc: "Donate Banglasesh is a donating platform where people donate for flood affected people in the Bangladesh.",
  },
  {
    image: "https://i.ibb.co.com/b2PDRhD/construction.jpg",
    title: "Rinterio Design",
    desc: "Rinterio Design is a constructive platform where people can hire their constructor for building their house.",
  },
];

const ProjectsInfo = () => {
  return (
    <div className="w-11/12 mx-auto my-24">
      <h1 className="text-4xl font-extrabold tracking-wide mb-12 text-center">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Projects.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <img className="h-36 w-full rounded-lg mb-4" src={skill.image} />
            <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsInfo;
