import { useState, useEffect } from "react";
import asteroidImg from "../../assets/asteroid.png";
import { AsteroidScale } from "../../types/asteroid";
import "./Asteroid.css";

const Asteroid = ({
  scale = AsteroidScale.medium,
  debug = true,
}: {
  scale?: AsteroidScale;
  debug?: boolean;
}) => {
  const [positions, setPositions] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const upd = setInterval(() => {
      setPositions(({ x, y }) => {
        return { x: x + 2, y: y + 2 };
      });
    }, 1000);

    return () => {
      clearInterval(upd);
    };
  }, [positions]);

  return (
    <div className="asteroid" style={{ top: positions.x, left: positions.y }}>
      {debug && (
        <h1 style={{ color: "#fff" }}>
          Positions: {positions.x}, {positions.y}
        </h1>
      )}
      <img src={asteroidImg} width={scale} />
    </div>
  );
};

export default Asteroid;
