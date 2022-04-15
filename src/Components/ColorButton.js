import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";
import Wrapper from "./Wrapper";

const ColorButton = () => {
  return (
    <Wrapper styles="flex gap-[3.2rem]">
      {/* default */}
      <ButtonContainer tagText='color="default"'>
        <UIButton
          buttonStyles="bg-normal
        text-normal-text py-2 px-4 shadow-[0px_2px_3px_rgba(51,51,51,0.2)]"
        />
      </ButtonContainer>

      {/* primary */}
      <ButtonContainer tagText='color="primary"'>
        <UIButton
          buttonStyles="bg-lighter-blue
        text-white py-2 px-4 shadow-[0px_2px_3px_rgba(41,98,255,0.2)]"
        />
      </ButtonContainer>

      {/* secondary */}
      <ButtonContainer tagText='color="secondary"'>
        <UIButton
          variant="Secondary"
          buttonStyles="bg-[#455A64]
        text-white py-2 px-4 shadow-[0px_2px_3px_rgba(69,90,100,0.2)]"
        />
      </ButtonContainer>

      {/* danger */}
      <ButtonContainer tagText='color="danger"'>
        <UIButton
          variant="Danger"
          buttonStyles="bg-[#D32F2F]
        text-white py-2 px-4 shadow-[0px_2px_3px_rgba(211,47,47,0.2)]"
        />
      </ButtonContainer>
    </Wrapper>
  );
};

export default ColorButton;
