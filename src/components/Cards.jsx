import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const [cards, setCards] = useState();

  const navigate = useNavigate();

  const handleCard = (lessonNo) => {
    navigate(`/lessonDetails/${lessonNo}`);
  };

  useEffect(() => {
    fetch("cards.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-6 mb-28 ">
      {cards?.map((card) => (
        <div
          onClick={() => handleCard(card.Lesson_no)}
          key={card.Lesson_no}
          className="shadow-lg border rounded-xl p-4 hover:shadow-2xl transform hover:scale-105 transition duration-300"
        >
          <img src={card.image} />
          <h2 className="text-center font-semibold text-lg md:text-xl mt-4">
            Lesson No:- {card.Lesson_no}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Cards;
