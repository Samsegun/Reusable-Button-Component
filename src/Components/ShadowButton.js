import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";
import Wrapper from "./Wrapper";

const ShadowButton = () => {
  return (
    <Wrapper>
      <ButtonContainer tagText="disableShadow">
        <UIButton buttonStyles="text-white bg-lighter-blue py-2 px-4 " />
      </ButtonContainer>
    </Wrapper>
  );
};

export default ShadowButton;
