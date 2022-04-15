import TagText from "./TagText";

const ButtonContainer = props => {
  let buttonText = props.parentText
    ? props.parentText
    : `<Button ${props.tagText ? props.tagText : ""} />`;

  return (
    <div>
      <TagText buttonText={buttonText} tagStyles={props.tagStyles} />
      {props.children}
    </div>
  );
};

export default ButtonContainer;
