import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

import Footer from "./components/Footer";

import Intro from "./components/intro";
import ContainerScroll from "./components/HeroScrollDemo";

import Timeline from "./components/TimelineDemo";
import SparklesCore from "./components/SparklesPreview";
const App = () => {
  return (
    <>
      <SparklesCore />
      {/* <Intro />
 This is a comment
        <ContainerScroll />
        
        <Timeline /> */}
      <Footer />

      <ButtonGradient />
    </>
  );
};

export default App;
