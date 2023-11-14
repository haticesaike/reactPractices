import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import History from "./components/History";
import Companies from "./components/Companies";
import Team from "./components/Team";
import Members from "./components/Members";
import MemberDetail from "./components/MemberDetail";
import WrongPath from "./components/WrongPath";
const LazyAboutUs = React.lazy(() => import("./components/AboutUs"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/aboutUs"
          element={
            <React.Suspense>
              <LazyAboutUs />
            </React.Suspense>
          }
        />
        <Route path="/mission" element={<Mission />} />
        <Route path="/history" element={<History />}>
          <Route path="companies" element={<Companies />} />
          <Route path="team" element={<Team />} />{" "}
          {/*The path is relative to the parent route. So we dont need / before team. */}
        </Route>
        <Route path="/members" element={<Members />} />
        <Route path="/members/:memberID" element={<MemberDetail />} />
        {/* dynamic route  */}

        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
}

export default App;
