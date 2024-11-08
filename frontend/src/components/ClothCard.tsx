import { Conditional } from "./Conditional";

interface ClothCardProps {
  post_number: string;
  img_url: string;
  shirt_budget?: string;
  shirt_branded?: string;
  pant_budget?: string;
  pant_branded?: string;
  watch_budget?: string;
  watch_branded?: string;
  tshirt_budget?: string;
  tshirt_branded?: string;
  shoes_budget?: string;
  shoes_branded?: string;
  jacket_budget?: string;
  jacket_branded?: string;
}

const PostNumber = ({ post_number }: { post_number: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 border border-neutral-950 overflow-hidden rounded-full bg-gray-300">
      <span className="text-xl text-neutral-950 pb-1">{post_number}</span>
    </div>
  );
};

export const ClothCard = (cardProps: ClothCardProps) => {
  const isShirt = cardProps.shirt_branded !== undefined;
  const isTrouser = cardProps.pant_branded !== undefined;
  const isWatch = cardProps.watch_branded !== undefined;
  const isJacket = cardProps.jacket_branded !== undefined;
  const isShoes = cardProps.shoes_branded !== undefined;
  const isTShirt = cardProps.tshirt_branded !== undefined;

  return (
    <div>
      <div className="h-120 w-60 rounded shadow-lg mt-5">
        <div className="flex flex-row justify-center items-center">
          <PostNumber post_number={cardProps.post_number} />
        </div>
        <div className="h-60 w-60 pt-2">
          <img className="object-contain" src={cardProps.img_url} />
        </div>
        <div className="py-2">
          {isShirt && (
            <Conditional
              name="Shirt"
              branded_url={cardProps.shirt_branded}
              budget_url={cardProps.shirt_budget}
            />
          )}
          {isTShirt && (
            <Conditional
              name="T-Shirt"
              branded_url={cardProps.tshirt_branded}
              budget_url={cardProps.tshirt_budget}
            />
          )}
          {isTrouser && (
            <Conditional
              name="Trouser"
              branded_url={cardProps.pant_branded}
              budget_url={cardProps.pant_budget}
            />
          )}
          {isJacket && (
            <Conditional
              name="Jacket"
              branded_url={cardProps.jacket_branded}
              budget_url={cardProps.jacket_budget}
            />
          )}
          {isWatch && (
            <Conditional
              name="Watch"
              branded_url={cardProps.watch_branded}
              budget_url={cardProps.watch_budget}
            />
          )}
          {isShoes && (
            <Conditional
              name="Shoe"
              branded_url={cardProps.shoes_branded}
              budget_url={cardProps.shoes_budget}
            />
          )}
        </div>
      </div>
    </div>
  );
};
