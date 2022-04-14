import ColorButton from "./Components/ColorButton";
import ColorStatesButton from "./Components/ColorStatesButton";
import DisabledButton from "./Components/DisabledButton";
import FooterText from "./Components/FooterText";
import IconButton from "./Components/IconButton";
import NormalButton from "./Components/NormalButton";
import OutlineButton from "./Components/OutlineButton";
import ShadowButton from "./Components/ShadowButton";
import SizeButton from "./Components/SizeButton";
import TextButton from "./Components/TextButton";

function App() {
  return (
    <div className=" max-w-[1440px] mx-auto min-h-[1024px]">
      <div className="ml-20 pt-[53px]">
        {/*  page header */}
        <h1 className="text-2xl font-medium font-poppins text-heading">
          Buttons
        </h1>

        {/* button components */}
        <div className="mb-12">
          <NormalButton />
          <OutlineButton />
          <TextButton />
          <ShadowButton />
          <DisabledButton />
          <IconButton />
          <SizeButton />
          <ColorButton />
          <ColorStatesButton />
        </div>

        {/* footer component */}
        <FooterText />
      </div>
    </div>
  );
}

export default App;
