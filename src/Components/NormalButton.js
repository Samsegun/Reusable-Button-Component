import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";
import Wrapper from "./Wrapper";

const NormalButton = () => {
  return (
    <Wrapper styles="flex gap-[9.7rem]">
      <ButtonContainer>
        <UIButton
          buttonStyles="text-normal-text
     bg-normal px-4 py-2 shadow-[0px_2px_3px_rgba(51,51,51,0.2)]"
        />
      </ButtonContainer>

      {/* hover and focus */}
      <ButtonContainer
        parentText="&:hover, &:focus"
        tagStyles="text-light-gray"
      >
        <UIButton
          buttonStyles="text-normal-text
     bg-hover px-4 py-2 shadow-[0px_2px_3px_rgba(51,51,51,0.2)]"
        />
      </ButtonContainer>
    </Wrapper>
  );
};

export default NormalButton;
