const MainButton = props => {
  let buttonText = `<Button ${props.tagText} />`;

  return (
    <div className="mt-12">
      <p className="text-xs font-ubuntu text-tag-text">
        <code>{buttonText}</code>
      </p>
      <div>
        <button
          className={
            props.buttonStyles +
            " mt-3 font-noto-sans rounded-md text-sm text-center "
          }
        >
          {props.variant ? props.variant : "Default"}
        </button>
      </div>
    </div>
  );
};

export default MainButton;
