import logo from "../images/finalLogo.jpg";
import insta from "../images/newInsta.png";
import telegram from "../images/telegram.png";
import { Link } from "react-router-dom";
import pintrest from "../images/pintrest.png";

export const TopBar = () => {
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link to={"/home"}>
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>
        <div className="hidden lg:block text-center">
          <Link to={"/home"}>
            <div className="font-LogoFont font-bold text-5xl pt-3">
              Men's Fashion
            </div>
          </Link>
        </div>
        <div className="flex flex-row-reverse">
          <div>
            <a href="#">
              <img
                src={telegram}
                alt="Telegram"
                className="h-14 items-center text-center pt-2 pr-2 w-auto"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={insta} alt="Instagram" className="h-16 w-auto" />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                src={pintrest}
                alt="Pintrest"
                className="h-14 items-center text-center pt-2 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
