import Carousel from "./components/Carousel";
import { Counter } from "./components/Counter";
import Hero from "./components/Hero";
import Stat from "./components/Stat";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <Hero />
      <Counter />
      <Carousel />
    </Layout>
  );
};

export default App;
