import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";

const ColorButton = () => {
  return (
    <ButtonContainer tagText='color="default"'>
      <div>
        <UIButton
          buttonStyles="bg-normal
        text-normal-text py-2 px-4 shadow-[0px_2px_3px_rgba(51,51,51,0.2)]"
        />
      </div>
    </ButtonContainer>
  );
};

export default ColorButton;
