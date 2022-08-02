import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <hr />
      <ItemListContainer texto="Lista de productos"></ItemListContainer>
      <hr />
    </div>
  );
}

export default App;
