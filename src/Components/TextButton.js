import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";
import Wrapper from "./Wrapper";

const TextButton = () => {
  return (
    <Wrapper styles="flex gap-[5.4rem]">
      <ButtonContainer tagText='variant="text"'>
        <UIButton buttonStyles="text-lighter-blue hover:bg-[#2962ff1a] hover:px-5 py-2 transition-all duration-200" />
      </ButtonContainer>

      {/* hover and focus */}
      <ButtonContainer
        parentText="&:hover, &:focus"
        tagStyles="text-light-gray"
      >
        <UIButton buttonStyles="text-lighter-blue bg-[#2962ff1a] px-5 py-2" />
      </ButtonContainer>
    </Wrapper>
  );
};

export default TextButton;
