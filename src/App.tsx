import Asteroid from "./components/Asteroid";
import Background from "./components/Background";
import { AsteroidScale } from "./types/asteroid";

function App() {
  return (
    <>
      <Background />
      <Asteroid scale={AsteroidScale.small} />
      {/* <Asteroid scale={AsteroidScale.medium} />
      <Asteroid scale={AsteroidScale.large} />
      <Asteroid scale={AsteroidScale.xLarge} /> */}
    </>
  );
}

export default App;
