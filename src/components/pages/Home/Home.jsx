import "./Home.css";
import CounterProvider from "../../contexts/Counter-context";
import Counter from "../../fechrs/Counter";
import InputCounter from "../../fechrs/InputCounter/InputCounter";
function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <CounterProvider>
        <Counter />
        <InputCounter/>
      </CounterProvider>
    </div>
  );
};

export default Home;
