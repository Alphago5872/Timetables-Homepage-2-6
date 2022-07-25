import { Link } from "react-router-dom";

const DevProfile = (props) => {
  return (
    <div className="developers__profile">
      <img src={props.image} />
      <h1>{props.devName}</h1>
      <h3>{props.job1}</h3>
      <h3>{props.job2}</h3>
      <h3>{props.job3}</h3>
      <h2>{props.position}</h2>
    </div>
  );
};

export default DevProfile;
