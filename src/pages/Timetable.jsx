import Clock from "../components/Homepage-components/Clock/Clock";
import TimetableGrid from "../components/Timetable/TimetableGrid";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import { getTimetable } from "../datas/datas";

const year = "10-11";

const Timetable = () => {
  return (
    <WebCard>
      <div className="timetable1">
        <div class="item item--1 timetable1__year">
          <i class="bx bx-info-circle"></i>
          <span>{`Year ${year}`}</span>
        </div>

        <div className="item item--1 timetable1__time">
          <i class="bx bx-time-five"></i>
          <Clock hour12={false} format={"hh-mm-ss"} />
        </div>
      </div>
      <div className="timetable__wrapper">
        <TimetableGrid timetableContent={getTimetable} />
      </div>
    </WebCard>
  );
};

export default Timetable;
