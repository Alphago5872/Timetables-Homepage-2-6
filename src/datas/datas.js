export const loginSuccess = {
  token: "user1234",
  role: "developers",
  permissionRank: 4,
};

export const loginFail = {
  modal: true,
  header: "Invalid Email / Password",
  message: "Incorrect Email / Password please try agian.",
};

export const getGlance = {
  thisClass: {
    name: "Avaiation 101",
    icon: "/icons/avation.png",
    startTime: 1030,
  },
  nextClass: {
    name: "Lunch",
    icon: "/icons/lunch.png",
    startTime: 1200,
  },
};

export const getMyTimetables = {
  primaryClass: {
    year: 11,
    room: "B",
    id: "timetable1234",
  },
  starredClass: [
    { year: 12, room: "B", id: "timet2fdjsp93j" },
    { year: 8, room: "A", id: "timet2fdjsp93j" },
    { year: 9, room: "C", id: "timet2fdjsp93j" },
    { year: 10, room: "D", id: "timet2fdjsp93j" },
  ],
};

export const getTimetable = {
  metaData: {
    year: 10,
    room: "B",
  },
  content: {
    monday: [
      { name: "Example Class Name", teachers: ["Teacher 1"] },
      { name: "Example Class Name", teachers: ["Teacher 1", "Teacher 2"] },
      { name: "Example Class Name", teachers: ["Teacher 1"] },
      { name: "Example Class Name", teachers: ["Teacher 1", "Teacher 2"] },
      { name: "Academic Clinic", teachers: ["Supervisors"] },
    ],
    tuesday: [
      { name: "Example Class Name", teachers: ["Teacher 1"] },
      { name: "Example Class Name", teachers: ["Teacher 1", "Teacher 2"] },
      { name: "Example Class Name", teachers: ["Teacher 1"] },
      { name: "Example Class Name", teachers: ["Teacher 1", "Teacher 2"] },
      { name: "Academic Clinic", teachers: ["Supervisors"] },
    ],
    wednesday: [
      { name: "Example Class Name", teachers: ["Teacher 1"] },
      { name: "Example Class Name", teachers: ["Teacher 1", "Teacher 2"] },
      { name: "Example Class Name", teachers: ["Teacher 1"] },
      { name: "Example Class Name", teachers: ["Teacher 1", "Teacher 2"] },
      { name: "Academic Clinic", teachers: ["Supervisors"] },
    ],
    thursday: [
      { name: "Example Class Name", teachers: ["Teacher 1"] },
      { name: "Example Class Name", teachers: ["Teacher 1", "Teacher 2"] },
      { name: "Example Class Name", teachers: ["Teacher 1"] },
      { name: "Example Class Name", teachers: ["Teacher 1", "Teacher 2"] },
      { name: "Academic Clinic", teachers: ["Supervisors"] },
    ],
    friday: [
      { name: "Example Class Name", teachers: ["Teacher 1"] },
      { name: "Example Class Name", teachers: ["Teacher 1", "Teacher 2"] },
      { name: "Example Class Name", teachers: ["Teacher 1"] },
      { name: "Example Class Name", teachers: ["Teacher 1", "Teacher 2"] },
      { name: "Max Planner", teachers: ["Your Supervisor"] },
    ],
  },
};
