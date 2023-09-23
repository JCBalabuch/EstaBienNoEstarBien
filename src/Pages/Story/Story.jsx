import { STORY } from "../../../Data/Data";
import Flex from "../../components/Flex/Flex";
import "./Story.css";

const Story = () => {
console.log(STORY.sinopsis)

  return (
    <div>
      <Flex gap="xl">
        <img src={STORY.img1} alt="Cartel 1 Está bien no estar bien" className="storyImg"/>
        <h4>{STORY.sinopsis}</h4>
      </Flex>
      <Flex>
        <h4>{STORY.sinopsis2}</h4>
        <img src={STORY.img2} alt="Cartel 2 Está bien no estar bien" className="storyImg"/>
      </Flex>
      <Flex>
        <img src={STORY.img3} alt="Cartel 3 Está bien no estar bien" className="storyImg"/>
        <h4>{STORY.sinopsis3}</h4>
      </Flex>
    </div>
  );
};

export default Story;
