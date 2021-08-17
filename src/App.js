import { Movies } from "./components/Movies";
import { NavBar } from "./components/NavBar";
import { MoviesProvider } from "./context/MoviesContext";


function App() {
  return (
    <MoviesProvider>
      <NavBar/>
      <Movies/>
    </MoviesProvider>
  );
}

export default App;
