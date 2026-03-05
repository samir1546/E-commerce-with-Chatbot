import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { totalAmount } = useSelector((state) => state.cart);

  const [method, setMethod] = useState("upi"); // upi | card | wallet

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white w-[420px] rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Pay ₹{totalAmount}
        </h2>

        {/* PAYMENT OPTIONS */}
        <div className="space-y-4">

          {/* UPI */}
          <div
            onClick={() => setMethod("upi")}
            className={`p-4 rounded-xl cursor-pointer border
              ${method === "upi"
                ? "border-black bg-gray-100 font-bold"
                : "border-gray-300"
              }`}
          >
            📱 UPI
          </div>

          {/* CARD */}
          <div
            onClick={() => setMethod("card")}
            className={`p-4 rounded-xl cursor-pointer border
              ${method === "card"
                ? "border-black bg-gray-100 font-bold"
                : "border-gray-300"
              }`}
          >
            💳 Card
          </div>

          {/* WALLET */}
          <div
            onClick={() => setMethod("wallet")}
            className={`p-4 rounded-xl cursor-pointer border
              ${method === "wallet"
                ? "border-black bg-gray-100 font-bold"
                : "border-gray-300"
              }`}
          >
            👛 Wallet
          </div>

        </div>

        {/* PAY BUTTON */}
        <button
          className="w-full mt-8 py-3 bg-black text-white rounded-xl"
          onClick={() => navigate("/success")}
        >
          Pay using {method.toUpperCase()}
        </button>

      </div>
    </div>
  );
};

export default PaymentPage;
