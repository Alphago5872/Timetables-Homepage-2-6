import Glance from "../components/Homepage-components/Glance/Glance";
import NewtonNews from "../components/Homepage-components/Newton_News/NewtonNews";
import TeachersTimetable from "../components/Homepage-components/Teachers'_Timetable/TeachersTimetable";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import TimetablePreview from "../components/Homepage-components/TimetablePreview/TimetablePreview";
import Clock from "../components/Homepage-components/Clock/Clock";

const Home = (props) => {
  return (
    <WebCard>
      <div className="home">
        <h1 className="home__time">
          <Clock format={"hh-mm"} />
        </h1>
        <Glance />
        {/* <NewtonNews />
        <TeachersTimetable /> */}
        <TimetablePreview />
      </div>
    </WebCard>
  );
};

export default Home;
