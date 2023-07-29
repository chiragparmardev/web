import "./App.css";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skill from "./Components/Skill";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Skill />
      <Contact />
    </>
  );
}

export default App;
