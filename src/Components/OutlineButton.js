import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";

const OutlineButton = () => {
  return (
    <ButtonContainer tagText='variant="outline"'>
      <div>
        <UIButton buttonStyles="border border-lighter-blue text-lighter-blue py-2 px-5" />
      </div>
    </ButtonContainer>
  );
};

export default OutlineButton;
