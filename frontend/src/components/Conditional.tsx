interface condProps {
  name: string;
  budget_url: string;
  branded_url: string;
}

export const Conditional = (clothProps: condProps) => {
  return (
    <div className="pt-1">
      <div>
        <p className="flex flex-row justify-center items-center font-newFontFamily">
          <b>{clothProps.name}</b>
        </p>
        <div className="grid grid-cols-2">
          <p className="flex flex-row justify-center items-center font-medium text-regalBlue hover:text-sky-900 hover:underline">
            <a href={clothProps.budget_url}>Budget</a>
          </p>
          <p className="flex flex-row justify-center items-center font-medium text-regalBlue hover:text-sky-900 hover:underline">
            <a href={clothProps.branded_url}>Branded</a>
          </p>
        </div>
      </div>
    </div>
  );
};
