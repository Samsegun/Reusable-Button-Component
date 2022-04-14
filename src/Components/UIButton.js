const UIButton = props => {
  return (
    <button
      className={
        props.buttonStyles +
        " mt-3 font-noto-sans rounded-md text-sm text-center"
      }
    >
      {props.variant ? props.variant : "Default"}
    </button>
  );
};

export default UIButton;
