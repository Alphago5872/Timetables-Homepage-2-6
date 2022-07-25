import Nont_Profile from "../../../image/Icons/User_logo.webp";
import Newton_Timetable_logo from "../../../image/Icons/Newton_Timetable_logo.png";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

const HeaderWebsite = (props) => {

  return (
    <div className="header">
      <Link to="/home" className="header__logo">
        <img src={Newton_Timetable_logo} alt="Newton Timetables BETA" />
      </Link>
      <div className="header__user">
        <h3 className="header__user--text">
          Good Morning,
          <br />
          Username Here
        </h3>
        <Link to="/settings" className="header__user--profile">
          <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt="User Profile Picture" />
        </Link>
      </div>
    </div>
  );
};

export default HeaderWebsite;
