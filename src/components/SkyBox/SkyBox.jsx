import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

import space_right from "../../assets/images/space_right.png";
import space_left from "../../assets/images/space_left.png";
import space_top from "../../assets/images/space_top.png";
import space_bot from "../../assets/images/space_bot.png";
import space_front from "../../assets/images/space_front.png";
import space_back from "../../assets/images/space_back.png";

function SkyBox() {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new CubeTextureLoader();
    const texture = loader.load([
      space_right,
      space_left,
      space_top,
      space_bot,
      space_front,
      space_back,
    ]);
    scene.background = texture;
  }, [scene]);
  return null;
}

export default SkyBox;

