import Asteroid from "./components/Asteroid";
import Background from "./components/Background";
import Rocket from "./components/Rocket";
import { AsteroidScale } from "./types/asteroid";

function App() {
  return (
    <>
      <Background />
      <Asteroid scale={AsteroidScale.small} />
      <Asteroid x={300} y={0} scale={AsteroidScale.medium} />
      {/*<Asteroid scale={AsteroidScale.large} />
      <Asteroid scale={AsteroidScale.xLarge} /> */}

      <Rocket />
    </>
  );
}

export default App;
