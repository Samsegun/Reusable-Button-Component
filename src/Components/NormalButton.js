import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";

const NormalButton = () => {
  return (
    <ButtonContainer>
      <div>
        <UIButton
          buttonStyles="text-normal-text
     bg-normal  px-4 py-2 shadow-[0px_2px_3px_rgba(51,51,51,0.2)]"
        />
      </div>
    </ButtonContainer>
  );
};

export default NormalButton;
