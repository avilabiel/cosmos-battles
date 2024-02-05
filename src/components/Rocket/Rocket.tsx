import { useState, useEffect } from "react";
import RocketImg from "../../assets/rocket.png";
import "./Rocket.css";

const Rocket = ({
  x = 0,
  y = 0,
  debug = true,
}: {
  x?: number;
  y?: number;
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
    <div className="Rocket" style={{ top: positions.y, left: positions.x }}>
      {debug && (
        <h1 style={{ color: "#fff" }}>
          Positions: x: {positions.x}, y: {positions.y}
        </h1>
      )}
      <img src={RocketImg} />
    </div>
  );
};

export default Rocket;
