import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Count = () => {
  const [mouseHover, setMouseHover] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => {
        setMouseHover(true);
      }}
      onExit={() => {
        setMouseHover(false);
      }}
    >
      <div
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
        className="mb-28 w-11/12 mx-auto mt-36"
      >
        <div className="text-center mb-12">
          <h2 className="font-black text-3xl md:text-4xl ">Our Success </h2>
          <p className="mt-4 text-gray-400">
            Our succes story is so incredible. You can be a part{" "}
            <br className="hidden lg:block" /> of our success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border bg-primaryBg rounded-xl p-8">
          <div className="stat place-items-center">
            <div className="stat-title">Users</div>
            <div className="stat-value">
              {mouseHover && <CountUp duration={3} end={24600} />}
            </div>
            <div className="stat-desc">From January 2022 to February 2024</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Lesson Count</div>
            <div className="stat-value text-secondary">
              {mouseHover && <CountUp duration={3} end={810} />}
            </div>
            <div className="stat-desc text-secondary">↗︎ 40 (6%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">vocabulary count</div>
            <div className="stat-value">
              {mouseHover && <CountUp duration={3} end={33600} />}
            </div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Tutorial</div>
            <div className="stat-value">
              {mouseHover && <CountUp duration={3} end={1600} />}
            </div>
            <div className="stat-desc">↘︎ 70 (19%)</div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Count;
