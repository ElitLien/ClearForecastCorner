import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraController = ({ position }) => {
  const { camera } = useThree();

  useEffect(() => {
    const phi = (90 - position.lat) * (Math.PI / 180);
    const theta = (position.lng + 180) * (Math.PI / 180);

    const x = -(4 * Math.sin(phi) * Math.cos(theta));
    const y = 4 * Math.cos(phi);
    const z = 4 * Math.sin(phi) * Math.sin(theta);

    camera.position.set(x, y, z);
    camera.lookAt(0, 0, 0);
  }, [position, camera]);

  return null;
};

export default CameraController;
