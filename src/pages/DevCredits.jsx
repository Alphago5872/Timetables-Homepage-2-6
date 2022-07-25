import Group_pic from "../image/Members/temp-group-pic.jpeg";
import Quotes from "../components/Dev-credits/Quotes/Quotes";
import DevProfile from "../components/Dev-credits/DevProfile";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";

import { Link } from "react-router-dom";

const Devs = [
  {
    devName: "Dhanuphon Boriboonsub",
    position: "Supervisor",
  },
  {
    devName: "Thonnisorn Choochaisangrat",
    position: "Supervisor",
  },
  {
    devName: "Prawich Thawansakdivudhi",
    position: "Year 11",
  },
  {
    devName: "Nutnornont Chamadol",
    position: "Year 12",
  },
  {
    devName: "Koramist Samorapoom",
    position: "Year 10",
  },
  {
    devName: "Kittikhom Kriamorn",
    position: "Year 10",
  },
];

const Jobs = [
  {
    job1: "Project Evaluator",
    job2: "Operations Director",
    job3: "Quality Controller",
  },
  {
    job1: "Project Supervisor",
    job2: "Operations Director",
    job3: "Quality Controller",
  },
  {
    job1: "Project Director",
    job2: "Lead Backend Engineer",
    job3: "Operations Director",
  },
  {
    job1: "Project Manager",
    job2: "Lead Designer",
    job3: "Frontend Developer",
  },
  {
    job1: "Project Manager",
    job2: "Lead Frontend Developer",
    job3: "UI Designer",
  },
  {
    job1: "Frontend Developer",
    job2: "UI / UX Designer",
    job3: " ",
  },
  {
    job1: "Mobile Designer (2 Pages)",
    job2: " ",
    job3: " ",
  },
];

const DevCredits = () => {
  return (
    <div>
      <WebCard>
        <h1
          style={{
            marginLeft: "3vh",
            marginTop: "40px",
            fontSize: "36px",
            textDecoration: "underline",
          }}
        >
          About us
        </h1>
        <Quotes />
        <div className="developers">
          <div className="developers__wrapper">
            <DevProfile
              devName={Devs[0].devName}
              job1={Jobs[0].job1}
              job2={Jobs[0].job2}
              job3={Jobs[0].job3}
              position={Devs[0].position}
            />
            <DevProfile
              devName={Devs[1].devName}
              job1={Jobs[1].job1}
              job2={Jobs[1].job2}
              job3={Jobs[1].job3}
              position={Devs[1].position}
            />
            <DevProfile
              devName={Devs[2].devName}
              job1={Jobs[2].job1}
              job2={Jobs[2].job2}
              job3={Jobs[2].job3}
              position={Devs[2].position}
            />
            <DevProfile
              devName={Devs[3].devName}
              job1={Jobs[3].job1}
              job2={Jobs[3].job2}
              job3={Jobs[3].job3}
              position={Devs[3].position}
            />
            <DevProfile
              devName={Devs[4].devName}
              job1={Jobs[4].job1}
              job2={Jobs[4].job2}
              job3={Jobs[4].job3}
              position={Devs[4].position}
            />
            <DevProfile
              devName={Devs[5].devName}
              job1={Jobs[5].job1}
              job2={Jobs[5].job2}
              job3={Jobs[5].job3}
              position={Devs[5].position}
            />
          </div>
        </div>
      </WebCard>
    </div>
  );
};

export default DevCredits;
