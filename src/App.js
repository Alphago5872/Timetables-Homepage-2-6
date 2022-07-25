import React from "react";
import { Routes, Route } from "react-router-dom";
import Timetable from "./pages/Timetable";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import DevCredits from "./pages/DevCredits";
import "./sass/main.css";
import UserConfigure from "./pages/UserConfigure";

/* Dependencies needed:
npm install
npm install react-router-dom@6
npm install -g sass
npm install boxicons --save
npm install react-responsive --save
*/

/*
IMPORTANT!!! :

npm start
npm run sass BEFORE making sass changes
*/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/home" element={<Home />} />
        <Route path="/timetable/:id" element={<Timetable />} />
        <Route path="/Developers" element={<DevCredits />} />
        <Route path="*" element={<ErrorPage errorCode="404" />} />
        <Route path="/settings" element={<UserConfigure />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </>
  );
}

export default App;
