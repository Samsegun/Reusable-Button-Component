import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";

const SizeButton = () => {
  return (
    <ButtonContainer tagText='size="sm"'>
      <div>
        <UIButton
          buttonStyles="bg-darker-blue 
        text-white py-[6px] px-3 shadow-[0px_2px_3px_rgba(0,49,202,0.2)]"
        />
      </div>
    </ButtonContainer>
  );
};

export default SizeButton;
