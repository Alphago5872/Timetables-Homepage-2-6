function time() {
  var date = new Date();
  return <h1>{(date.getHours() + ":" + date.getMinutes()).toLocaleString()}</h1>;
};

export default time;
