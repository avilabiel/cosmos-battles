import { useState, useEffect } from "react";

const usePhysicsMovement = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [acceleration] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: position.x + velocity.x,
        y: position.y + velocity.y,
      });
      setVelocity({
        x: velocity.x + acceleration.x,
        y: velocity.y + acceleration.y,
      });
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [position, velocity, acceleration]);

  return { position, velocity, acceleration };
};

export default usePhysicsMovement;
