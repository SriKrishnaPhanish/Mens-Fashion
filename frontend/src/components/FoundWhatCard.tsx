import { MainButton } from "./MainButton";
import Arrow from "../images/arrow.jpg";

export const FoundWhatCard = () => {
  return (
    <div className="flex pt-20">
      <div className="">
        <img className="h-72 lg:h-96" src={Arrow}></img>
      </div>
      <div className="flex flex-col justify-between h-80 lg:h-96">
        <div className="text-center">
          <div className="text-center font-bold text-red-600 font-cursiveFont text-4xl lg:text-8xl items-center ">
            Not Satisfied ??
          </div>
          <div>
            <p className="font-ExploreFont text-3xl lg:text-6xl text-Fuchsia font-extrabold">
              Explore all Styles
            </p>
          </div>
        </div>
        <div className="flex">
          <MainButton
            label={"More Fashion"}
            buttonCheck={"home"}
            to={"/home"}
          />
        </div>
      </div>
    </div>
  );
};
