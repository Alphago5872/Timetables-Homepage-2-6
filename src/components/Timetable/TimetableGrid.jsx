import "../../sass/components/_timetable.scss";
import TimeBox from "./TimeBox";
import weekdayBox from "./WeekdayBox";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const timeLayout = [
  "09:00 - 10:30",
  "10:30 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:30",
  "14:30 - 16:00",
];

const TimetableGrid = (props) => {
  return (
    <Box className="ttbigbox">
      <div className="timetable">
        {/* {props.timetableContent.content &&
        props.timetableContent.content.map((weekday, index) => {
          console.log(weekday, index);
        })}{" "} */}
        <div className="timetable__time timetable__time--empty">
          <h3></h3>
        </div>
        {timeLayout.map((time, index) => {
          return (
            <div
              className={`timetable__time ${
                index === 0 ? "timetable__time--first" : ""
              } ${
                index === timeLayout.length - 1 ? "timetable__time--last" : ""
              }`}
            >
              <h3>{time}</h3>
            </div>
          );
        })}

        <TimeBox subject="Monday" color="#F0D750" no_hover />
        <TimeBox subject="No School" hori="5" no_hover />

        <TimeBox subject="Tuesday" color="#FF7F7F" no_hover />
        <TimeBox
          subject="Aviation 101"
          teacher="Earth, Noey, Nan"
          room="Room 1-4"
        />
        <TimeBox
          subject="Cinematics"
          teacher="Namfon, Ya, Na, Aom"
          room="Room 11-12"
        />
        <TimeBox subject="Easy Korean" teacher="Nan, Ramon" room="Room 1-4" />
        <TimeBox
          subject={"Be There,\n Be Square"}
          teacher="Namfon, Ya, Sareena, Amy"
          room="Room 1-4"
        />

        <TimeBox subject="Wednesday" color="#6EDF64" no_hover />
        <TimeBox
          subject="Strong survive"
          teacher="Namfon, Ya, Oho, Amy"
          room=""
        />
        <TimeBox subject="Shop in Japan" teacher="Best Ramon" room="" />
        <TimeBox
          subject="Thai Game"
          teacher="Nan, Ramon, Got, Punch"
          room="Room 1-4"
        />
        <TimeBox
          subject="Board Game"
          teacher="June, Sun, Bib"
          room="Room 8-10"
        />

        <TimeBox subject="Thursday" color="#FF8A00" no_hover />
        <TimeBox
          subject="CS50x"
          teacher="Ith"
          room="Room 1-4 (Fl 11)"
          hori="2"
        />
        <TimeBox subject="Easy Korean" teacher="Nan, Ramon" room="Room 1-4" />
        <TimeBox
          subject="Friend Bracelet"
          teacher="Namfon, Mink"
          room="Room 8-10"
        />

        <TimeBox subject="Friday" color="#00988F" no_hover />
        <TimeBox subject="No School" hori="5" no_hover />

        <TimeBox subject="Lunch" lunch no_hover />
      </div>
    </Box>
  );
};

export default TimetableGrid;
