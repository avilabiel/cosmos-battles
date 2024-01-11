import asteroidImg from "../../assets/asteroid.png";

enum AsteroidScale {
  small = 100,
  medium = 300,
  large = 400,
  xLarge = 500,
}

const Asteroid = ({
  scale = AsteroidScale.medium,
}: {
  scale?: AsteroidScale;
}) => {
  return (
    <div className="asteroid">
      <div className="asteroid__body"></div>
      <img src={asteroidImg} width={scale} />
    </div>
  );
};

export default Asteroid;
