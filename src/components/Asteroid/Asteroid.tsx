import asteroidImg from "../../assets/asteroid.png";
import { AsteroidScale } from "../../types/asteroid";

const Asteroid = ({
  scale = AsteroidScale.medium,
}: {
  scale?: AsteroidScale;
}) => {
  return (
    <>
      <img src={asteroidImg} width={scale} />
    </>
  );
};

export default Asteroid;
