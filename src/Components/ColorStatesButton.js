import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";
import Wrapper from "./Wrapper";

const ColorStatesButton = () => {
  return (
    <Wrapper styles="flex gap-[7rem] items-center">
      {/* default */}
      <ButtonContainer
        parentText="&:hover, &:focus"
        tagStyles="text-light-gray"
      >
        <UIButton
          buttonStyles="bg-hover
        text-normal-text py-2 px-4 shadow-[0px_2px_3px_rgba(51,51,51,0.2)]"
        />
      </ButtonContainer>

      {/* primary */}
      <ButtonContainer parentText=" " tagStyles="mb-8">
        <UIButton
          buttonStyles="bg-hover-blue
        text-white py-2 px-4 shadow-[0px_2px_3px_rgba(41,98,255,0.2)]"
        />
      </ButtonContainer>

      {/* secondary */}
      <ButtonContainer parentText=" " tagStyles="mb-8">
        <UIButton
          variant="Secondary"
          buttonStyles="bg-hover-gray
        text-white py-2 px-4 shadow-[0px_2px_3px_rgba(69,90,100,0.2)]"
        />
      </ButtonContainer>

      {/* danger */}
      <ButtonContainer parentText=" " tagStyles="mb-8">
        <UIButton
          variant="Danger"
          buttonStyles="bg-hover-danger
        text-white py-2 px-4 shadow-[0px_2px_3px_rgba(211,47,47,0.2)]"
        />
      </ButtonContainer>
    </Wrapper>
  );
};

export default ColorStatesButton;
