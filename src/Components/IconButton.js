import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";

const IconButton = () => {
  return (
    <ButtonContainer tagText='startIcon="local_grocery_store"'>
      <div>
        <UIButton
          buttonStyles="text-white bg-darker-blue px-4 py-2
         shadow-[0px_2px_3px_rgba(0,49,202,0.2)]"
        />
      </div>
    </ButtonContainer>
  );
};

export default IconButton;
