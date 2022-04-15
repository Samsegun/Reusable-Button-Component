import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";
import Wrapper from "./Wrapper";

const SizeButton = () => {
  return (
    <Wrapper styles="flex gap-[5.3rem]">
      <ButtonContainer tagText='size="sm"'>
        <UIButton
          buttonStyles="bg-darker-blue 
        text-white py-[6px] px-3 shadow-[0px_2px_3px_rgba(0,49,202,0.2)]"
        />
      </ButtonContainer>

      {/* size md */}
      <ButtonContainer tagText='size="md"'>
        <UIButton
          buttonStyles="bg-darker-blue 
        text-white py-2 px-4 shadow-[0px_2px_3px_rgba(0,49,202,0.2)]"
        />
      </ButtonContainer>

      {/* size lg */}
      <ButtonContainer tagText='size="lg"'>
        <UIButton
          buttonStyles="bg-darker-blue 
        text-white py-[11px] px-[22px] shadow-[0px_2px_3px_rgba(0,49,202,0.2)]"
        />
      </ButtonContainer>
    </Wrapper>
  );
};

export default SizeButton;
