import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";
import Wrapper from "./Wrapper";

const DisabledButton = () => {
  return (
    <Wrapper styles="flex gap-[7.8rem]">
      <ButtonContainer tagText="disabled">
        <UIButton
          variant="Disabled"
          buttonStyles="bg-normal text-[#9E9E9E] py-2 px-4"
        />
      </ButtonContainer>

      {/* text disabled */}
      <ButtonContainer
        tagText='variant="text" disabled'
        tagStyles="text-light-gray"
      >
        <UIButton variant="Disabled" buttonStyles="text-[#9E9E9E] py-2" />
      </ButtonContainer>
    </Wrapper>
  );
};

export default DisabledButton;
