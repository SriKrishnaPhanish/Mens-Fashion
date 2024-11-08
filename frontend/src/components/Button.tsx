import { Link } from "react-router-dom";

export const Button = ({
  fashionNum,
  to,
}: {
  fashionNum: number;
  to: string;
}) => {
  return (
    <>
      <Link to={to}>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold h-10 w-10 rounded flex inline-flex items-center justify-center mx-0.5 my-0.5">
          <span>{fashionNum}</span>
        </button>
      </Link>
    </>
  );
};
