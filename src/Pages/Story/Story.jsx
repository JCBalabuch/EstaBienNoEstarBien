import { STORY } from "../../../Data/Data";
import "./Story.css";

const Story = () => {

  return (
    <section className="sectionStory">
      <div className="storyDiv">
        <img src={STORY.img1} alt="Cartel 1 Está bien no estar bien" className="storyImg"/>
        <h4>{STORY.sinopsis}</h4>
      </div>
      <div className="storyDiv turn">
        <h4>{STORY.sinopsis2}</h4>
        <img src={STORY.img2} alt="Cartel 2 Está bien no estar bien" className="storyImg"/>
      </div>
      <div className="storyDiv">
        <img src={STORY.img3} alt="Cartel 3 Está bien no estar bien" className="storyImg"/>
        <h4>{STORY.sinopsis3}</h4>
      </div>
    </section>
  );
};

export default Story;
