import { SphereGeometry, MeshStandardMaterial, Mesh, Vector3 } from "three";
import { useThree } from "@react-three/fiber";

const Points = ({ color, latitude, longitude }) => {
  const { scene } = useThree();
  const radius = 2.5;
  const phi = (90 - latitude) * (Math.PI / 180);
  const theta = (longitude + 180) * (Math.PI / 180);

  const position = new Vector3();
  position.x = -(radius * Math.sin(phi) * Math.cos(theta));
  position.y = radius * Math.cos(phi);
  position.z = radius * Math.sin(phi) * Math.sin(theta);

  const geometry = new SphereGeometry(0.015, 32, 32);
  const material = new MeshStandardMaterial({ color: color });
  const mesh = new Mesh(geometry, material);

  mesh.position.set(position.x, position.y, position.z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  scene.add(mesh);
  return null;
};

export default Points;
