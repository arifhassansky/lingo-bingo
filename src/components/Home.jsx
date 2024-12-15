import Banner from "./Banner";
import Count from "./Count";
import Faq from "./Faq";
import HowLearn from "./HowLearn";
import Newslater from "./Newslater";
import Swipper from "./swipper/Swipper";

import WelcomeSms from "./WelcomeSms";

const Home = () => {
  return (
    <div>
      <WelcomeSms />
      <Banner />
      <Swipper />
      <HowLearn />
      <Count />
      <Faq />
      <Newslater />
    </div>
  );
};

export default Home;
