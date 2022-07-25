import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const TimetablePreviewCard = (props) => {
  const nav = useNavigate();

  return (
    <Link to={!props.preview ? `/timetable/${props.year.replace(/ /g, '')}` : "/"}>
      <div
        className="timetable-preview__item"
        style={props.preview ? { backgroundColor: "#808080" } : {}}
      >
        <h3>Year {props.year}</h3>
      </div>
    </Link>
  );
};

export default TimetablePreviewCard;
