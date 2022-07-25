const TeachersTimetableCard = (props) => {
  return (
    <div>
      <h1>{props.teacher}</h1>
      <h2>{props.teacherFull}</h2>
    </div>
  );
};

export default TeachersTimetableCard;
