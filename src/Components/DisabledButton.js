import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";

const DisabledButton = () => {
  return (
    <ButtonContainer tagText="disabled">
      <div>
        <UIButton
          variant="Disabled"
          buttonStyles="text-lighter-blue bg-normal text-[#9E9E9E] py-2 px-4"
        />
      </div>
    </ButtonContainer>
  );
};

export default DisabledButton;
