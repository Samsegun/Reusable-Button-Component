const TagText = props => {
  const tagStyles = props.tagStyles
    ? props.tagStyles + " text-xs font-ubuntu"
    : " text-xs font-ubuntu text-tag-text";

  return (
    <p className={tagStyles}>
      <code className="font-ubuntu">{props.buttonText}</code>
    </p>
  );
};

export default TagText;
