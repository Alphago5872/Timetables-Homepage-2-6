import TimetablePreviewCard from "./TimetablePreviewCard";
import { Link, NavLink, Route } from "react-router-dom";

function Box({ children, ...props }) {
  return <div className="timetable-preview" {...props}>{children}</div>;
}

const TimetablePreview = () => {
  return (
    <div>
      <h1 style={{ marginTop: "25px" }}>Timetables</h1>
      <Box>
        <TimetablePreviewCard year="8 - 9" id="y89" />
        <TimetablePreviewCard year="10 - 11" id="y1011" />
        <TimetablePreviewCard year="12 - 13" id="y1213" />
      </Box>
    </div>
  );
}; 

export default TimetablePreview;
