export const InfoComp = () => {
  return (
    <div className="flex justify-center mt-0">
      <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 text-center">
        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
          <span className="text-sm font-medium text-slate-600 flex justify-center">
            Click on <p className="text-regalBlue">&nbsp;Budget&nbsp;</p> for
            budget apparel
          </span>
        </div>
        <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
          <span className="text-sm text-slate-600 font-medium flex justify-center">
            Click on <p className="text-regalBlue">&nbsp; Branded &nbsp;</p> for
            branded apparel
          </span>
        </div>
      </div>
    </div>
  );
};
