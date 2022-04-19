import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";
import Wrapper from "./Wrapper";

const ShadowButton = () => {
  const [shadow, setShadow] = useState(true);

  const shadowHandler = () => {
    setShadow(!shadow);
  };

  return (
    <Wrapper>
      <ButtonContainer tagText={shadow ? "disableShadow" : "enableShadow"}>
        <UIButton
          buttonStyles={
            "text-white bg-lighter-blue py-2 px-4 " +
            (shadow && "shadow-[0px_2px_3px_rgba(0,49,202,0.2)]")
          }
          onClick={shadowHandler}
        />
      </ButtonContainer>
    </Wrapper>
  );
};

export default ShadowButton;
