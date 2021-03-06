import { useReducer } from "react";
import ButtonContainer from "./ButtonContainer";
import UIButton from "./UIButton";
import Wrapper from "./Wrapper";

// this usereducer manages click events for buttons with cart icons on the left and
// right. When user clicks any of the buttons, an action is dispatched to the reducer
// and updates the state to the opposite of the old state i.e true becomes false and
// vice-versa. The current position of the icon depends on whether its current state is true
// or false.
const initialState = { startIcon: true, endIcon: true };

const reducer = (state, action) => {
  switch (action) {
    case "start":
      return {
        ...state,
        startIcon: !state.startIcon,
      };
    case "end":
      return { ...state, endIcon: !state.endIcon };
    default:
      return;
  }
};

const IconButton = () => {
  const [curState, dispatchFn] = useReducer(reducer, initialState);

  return (
    <Wrapper styles="flex gap-20">
      {/* start icon */}
      <ButtonContainer
        tagText={`${
          curState.startIcon ? "start" : "end"
        }Icon="local_grocery_store"`}
      >
        <UIButton
          buttonStyles="text-white bg-darker-blue px-4 py-2
         shadow-[0px_2px_3px_rgba(0,49,202,0.2)] flex items-center gap-[10px]
         "
          cart={true}
          cartStyle={curState.startIcon ? "order-none" : "order-1"}
          onClick={() => dispatchFn("start")}
        />
      </ButtonContainer>

      {/* end icon */}
      <ButtonContainer
        tagText={`${
          curState.endIcon ? "end" : "start"
        }Icon="local_grocery_store"`}
      >
        <UIButton
          buttonStyles="text-white bg-darker-blue px-4 py-2
         shadow-[0px_2px_3px_rgba(0,49,202,0.2)] flex items-center gap-[10px]"
          cart={true}
          cartStyle={curState.endIcon ? "order-1" : "order-none"}
          onClick={() => dispatchFn("end")}
        />
      </ButtonContainer>
    </Wrapper>
  );
};

export default IconButton;
