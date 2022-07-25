import react from "react";
import { Link, Navigate } from "react-router-dom";


export default function GlanceBox(props) {
  return (
      <div style={props.curClass ? {background: "#0E6BA8"} : {background: "#FF8600"}} className="glance-item">
        <h3>{props.curClass ? "Current Class:" : "Next Class:"} <br /> {props.className} </h3>
        <Link to={`/timetable/`}>
          <button className="glance-item__btn">View In Timetable</button>
        </Link>
      </div>
  );
}
