import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";

const ColorStatesButton = () => {
  return (
    <ButtonContainer parentText="&:hover, &:focus" tagText='color="default"'>
      <div>
        <UIButton
          buttonStyles="bg-hover
        text-normal-text py-2 px-4 shadow-[0px_2px_3px_rgba(51,51,51,0.2)]"
        />
      </div>
    </ButtonContainer>
  );
};

export default ColorStatesButton;
