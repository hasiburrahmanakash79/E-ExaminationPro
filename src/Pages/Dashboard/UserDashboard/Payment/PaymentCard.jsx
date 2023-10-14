import React from "react";

const PaymentCard = () => {
  return (
    <div className=" mx-auto">
      <div className="w-[330px] rounded-2xl bg-[#253646] text-white shadow-md p-5">
        <div>
          <header className="flex justify-between">
            <div>
              <h1 className="text-sm">Master Card</h1>
            </div>
            <img
              src="https://i.ibb.co/CMrMLHv/cardChip.png"
              className="w-10"
              alt=""
            />
          </header>
          <div className="flex justify-between items-end">
            <div>
              <p className="mt-4">5412 7587 5564 5226</p>
              <p className="text-[8px] mt-7">Ex.date</p>
              <p className="text-xs">06/27</p>
              <p>E-examPro</p>
            </div>
            <img
              src="https://i.ibb.co/V3Qr9mq/cardLogo.png"
              className="w-14"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
