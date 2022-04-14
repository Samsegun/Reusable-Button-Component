// import UIButton from "./UIButton";

const ButtonContainer = props => {
  let buttonText = props.parentText
    ? props.parentText
    : `<Button ${props.tagText ? props.tagText : ""} />`;

  return (
    <div className="mt-12">
      <p className="text-xs text-tag-text">
        <code className="font-ubuntu">{buttonText}</code>
      </p>
      {props.children}
    </div>
  );
};

export default ButtonContainer;
