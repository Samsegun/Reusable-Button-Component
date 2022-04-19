import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";
import Wrapper from "./Wrapper";

const OutlineButton = () => {
  return (
    <Wrapper styles="flex gap-[4.3rem]">
      <ButtonContainer tagText='variant="outline"'>
        <UIButton
          buttonStyles="border border-lighter-blue 
        text-lighter-blue py-2 px-5  hover:bg-[#2962ff1a] transition-all duration-200"
        />
      </ButtonContainer>

      {/* hover and focus */}
      <ButtonContainer
        parentText="&:hover, &:focus"
        tagStyles="text-light-gray"
      >
        <UIButton
          buttonStyles="border border-lighter-blue 
        bg-[#2962ff1a] text-lighter-blue py-2 px-5"
        />
      </ButtonContainer>
    </Wrapper>
  );
};

export default OutlineButton;
