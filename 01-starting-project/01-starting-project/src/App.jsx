import Switcher from "../Components/Switcher/Switcher.jsx"
import CardHolder from "../Components/CardHolder/CardHolder.jsx"
import Header from "../Components/Header/Header.jsx"

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CardHolder /> 
        <Switcher />
      </main>
    </div>
  );
}

export default App;
