import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white p-10 rounded-3xl text-center">
        <h2 className="text-3xl font-bold text-green-500">
          Payment Successful 🎉
        </h2>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-yellow-400 rounded-xl font-bold"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
