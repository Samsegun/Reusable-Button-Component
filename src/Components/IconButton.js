import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";
import Wrapper from "./Wrapper";

const IconButton = () => {
  return (
    <Wrapper styles="flex gap-20">
      {/* start icon */}
      <ButtonContainer tagText='startIcon="local_grocery_store"'>
        <UIButton
          buttonStyles="text-white bg-darker-blue px-4 py-2
         shadow-[0px_2px_3px_rgba(0,49,202,0.2)]"
        />
      </ButtonContainer>

      {/* end icon */}
      <ButtonContainer tagText='endIcon="local_grocery_store"'>
        <UIButton
          buttonStyles="text-white bg-darker-blue px-4 py-2
         shadow-[0px_2px_3px_rgba(0,49,202,0.2)]"
        />
      </ButtonContainer>
    </Wrapper>
  );
};

export default IconButton;
