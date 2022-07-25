const Modal = (props) => {
  return (
    <div>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <button>Okay</button>
      </footer>
    </div>
  );
};

export default Modal;
