import { useState, useEffect } from "react";

const Banner = () => {
  const images = [
    {
      id: 1,
      image1: "https://i.ibb.co.com/9sQ9xdY/hindi3.jpg",
      image2: "https://i.ibb.co.com/FXT76bh/indian.png",
      name: "Learn Hindi Language",
      title: "Explore Our Website",
      quote:
        "Hindi is an Indo-Aryan language primarily spoken in India, written in the Devanagari script. It is one of India's official languages and is widely used in literature, media, and daily communication.",
    },
    {
      id: 2,
      image1: "https://i.ibb.co.com/4mZ1sdZ/arabic-4.jpg",
      image2: "https://i.ibb.co.com/S7rNnnb/arabic-flag.png",
      name: "Learn Arabic Language",
      title: "Explore Our Website",
      quote:
        "Arabic is a Semitic language spoken across the Arab world and is the liturgical language of Islam. It is known for its rich literary heritage and is written in a unique script from right to left.",
    },
    {
      id: 3,
      image1: "https://i.ibb.co.com/VQJPwSJ/frach.jpg",
      image2: "https://i.ibb.co.com/2K08tLt/franch-flag.png",
      name: "Learn French Language",
      title: "Explore Our Website",
      quote:
        "French is a Romance language spoken worldwide, especially in France, parts of Africa, Canada, and Europe. Known for its elegance, it is a global language of diplomacy, culture, and art.",
    },
    {
      id: 4,
      image1: "https://i.ibb.co.com/vYR7pr4/pakistan.jpg",
      image2: "https://i.ibb.co.com/RHH3phJ/pakistan.png",
      name: "Learn Urdu Language",
      title: "Explore Our Website",
      quote:
        "Urdu is an Indo-Aryan language spoken mainly in Pakistan and parts of India, written in the Perso-Arabic script. Known for its poetic elegance, it is celebrated for its rich literary tradition and cultural significance.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <section className="relative h-[70vh] overflow-hidden flex justify-center items-center">
      {images.map((item, itemIndex) => {
        const { id, image1, image2, name, title, quote } = item;

        return (
          itemIndex === index && (
            <div
              key={id}
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 transition-opacity duration-700 ease-in-out"
            >
              <img
                src={image1}
                alt={name}
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="space-y-4 px-6">
                <h3 className="text-3xl md:text-5xl font-bold flex items-center gap-4">
                  {name}
                  <img
                    className="w-16 h-16 rounded-full"
                    src={image2}
                    alt={`${name} flag`}
                  />
                </h3>
                <h4 className="text-xl md:text-2xl font-light">{title}</h4>
                <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  {quote}
                </p>
              </div>
            </div>
          )
        );
      })}
    </section>
  );
};

export default Banner;
