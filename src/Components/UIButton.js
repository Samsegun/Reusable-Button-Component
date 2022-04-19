import cart from "../assets/add_shopping_cart_white_24dp.svg";

const UIButton = props => {
  return (
    <button
      className={
        props.buttonStyles +
        " mt-3 font-noto-sans rounded-md text-sm text-center "
      }
      onClick={props.onClick}
      disabled={props.disable ? props.disable : false}
    >
      {props.cart && (
        <img
          src={cart}
          alt="cart"
          className={"w-[13.2px] h-[14px] " + props.cartStyle}
        />
      )}
      {props.variant ? props.variant : "Default"}
    </button>
  );
};
// transition-all duration-200
export default UIButton;
