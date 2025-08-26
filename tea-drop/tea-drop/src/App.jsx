import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Ethical from "./Pages/Ethical";
import TopBar from "./Components/TopBar";
import Header from "./Components/Header";
import Explore from "./Pages/Explore";

function App() {
  return (
    <Router>
      <Routes>
        
         <Route path="/" element={
            <main>
              <Ethical />
            </main>
          }
        />

        <Route path="/hero" element={
            <>
              <TopBar />
              <Header />
              <main>
                <Hero />
              </main>
            </>
          }
        />
       
        <Route path="/explore" element={
            <>
              <TopBar />
              <Header />
              <main>
                <Explore />
              </main>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
