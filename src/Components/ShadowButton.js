import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";

const ShadowButton = () => {
  return (
    <ButtonContainer tagText="disableShadow">
      <div>
        <UIButton buttonStyles="text-white bg-lighter-blue py-2 px-4" />
      </div>
    </ButtonContainer>
  );
};

export default ShadowButton;
