import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";

const TextButton = () => {
  return (
    <ButtonContainer tagText='variant="text"'>
      <div>
        <UIButton buttonStyles="text-lighter-blue" />
      </div>
    </ButtonContainer>
  );
};

export default TextButton;
