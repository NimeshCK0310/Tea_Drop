import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Ethical from "./Pages/Ethical";
import TopBar from "./Components/TopBar";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/hero"
          element={
            <>
              <TopBar />
              <Header />
              <main>
                <Hero />
              </main>
            </>
          }
        />
        <Route
          path="/"
          element={
            <main>
              <Ethical />
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;