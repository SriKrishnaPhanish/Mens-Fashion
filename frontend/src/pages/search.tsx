import { fashionData } from "../data/fashionData";
import { Button } from "../components/Button";
import { TopBar } from "../components/TopBar";
import { MainButton } from "../components/MainButton";

export const Search = () => {
  let fashionCount = fashionData.length;
  let fashionArray = [];
  for (let i = 0; i < 50; i++) {
    fashionArray.push(<Button to={"/search/" + (i + 1)} fashionNum={i + 1} />);
  }

  return (
    <div className="">
      <TopBar />
      <MainButton label={"To Home"} buttonCheck={"home"} to={"/home"} />
      <div className="text-center max-w-screen-lg mx-auto">
        <h2 className="text-lg font-semibold pb-4">
          Click on the Specific Post number
        </h2>
        {fashionArray}
      </div>
    </div>
  );
};
