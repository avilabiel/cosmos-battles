import { useState, useEffect } from "react";
import asteroidImg from "../../assets/asteroid.png";
import { AsteroidScale } from "../../types/asteroid";
import "./Asteroid.css";

const Asteroid = ({
  x = 0,
  y = 0,
  scale = AsteroidScale.medium,
  debug = true,
}: {
  x?: number;
  y?: number;
  scale?: AsteroidScale;
  debug?: boolean;
}) => {
  const [positions, setPositions] = useState<{ x: number; y: number }>({
    x,
    y,
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
    <div className="asteroid" style={{ top: positions.y, left: positions.x }}>
      {debug && (
        <h1 style={{ color: "#fff" }}>
          Positions: x: {positions.x}, y: {positions.y}
        </h1>
      )}
      <img src={asteroidImg} width={scale} />
    </div>
  );
};

export default Asteroid;
