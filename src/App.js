import NormalButton from "./Components/NormalButton";
import OutlineButton from "./Components/OutlineButton";
import ShadowButton from "./Components/ShadowButton";
import TextButton from "./Components/TextButton";

function App() {
  return (
    <div className=" max-w-[1440px] mx-auto min-h-[1024px]">
      <div className="ml-20 pt-[53px]">
        <h1 className="text-2xl font-medium font-poppins text-heading">
          Buttons
        </h1>

        <div>
          <NormalButton />
          <OutlineButton />
          <TextButton />
          <ShadowButton />
        </div>
      </div>
    </div>
  );
}

export default App;
