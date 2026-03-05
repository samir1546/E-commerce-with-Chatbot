import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeCart } from "../../Redux/slice/productSlice.js";
import { Plus, Minus, X, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, totalAmount, totalQty } = useSelector(
        (state) => state.cart
    );

    return (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl">
            <div className="mx-auto max-w-7xl h-full flex flex-col mt-15">

                {/* HEADER */}
                <div className="flex justify-between items-center px-8 py-6 gradient-top-bottom-border">
                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            Shopping Cart
                        </h2>
                        <p className="text-gray-400">
                            {totalQty} item(s) in your cart
                        </p>
                    </div>

                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full hover:bg-white/10 text-white hover:text-yellow-400 transition"
                    >
                        <X size={30} />
                    </button>
                </div>

                {/* BODY */}
                <div className="flex-1 grid grid-cols-12 gap-8 px-8 py-8 overflow-hidden">

                    {/* LEFT – ITEMS */}
                    <div className="col-span-8 overflow-y-auto pr-4 space-y-6">
                        {items.length === 0 && (
                            <div className="text-center text-gray-400 text-xl mt-20">
                                Your cart is empty 🛒
                            </div>
                        )}

                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gradient-top-bottom-border gap-6 bg-white/5 backdrop-blur-xl p-6"
                            >
                                <img    
                                    src={item.image}
                                    className="w-32 h-32 object-cover rounded-xl"
                                />

                                {/* INFO */}
                                <div className="flex-1 ">
                                    <h3 className="text-xl text-white font-semibold mb-1">
                                        {item.name}
                                    </h3>

                                    <p className="text-yellow-400 text-lg font-bold mb-3">
                                        ₹{item.price}
                                    </p>

                                    {/* QTY */}
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => dispatch(decreaseQty(item.id))}
                                            className="w-9 h-9 rounded-full bg-white/70 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition"
                                        >
                                            <Minus size={16} />
                                        </button>

                                        <span className="text-white text-lg font-bold w-6 text-center">
                                            {item.qty}
                                        </span>

                                        <button
                                            onClick={() => dispatch(increaseQty(item.id))}
                                            className="w-9 h-9 rounded-full bg-white/70 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition"
                                        >
                                            <Plus size={16} />
                                        </button>
                                        <button
                                            onClick={() => dispatch(removeCart(item.id))}
                                            className="p-2 w-9 h-9 rounded-full bg-red-500/50 hover:bg-red-500 hover:text-white transition items-center justify-center flex "
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>

                                {/* ITEM TOTAL */}
                                <div className="text-right">
                                    <p className="text-gray-400 text-sm">Subtotal</p>
                                    <p className="text-white text-xl font-bold">
                                        ₹{(item.price * item.qty).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT – SUMMARY */}
                    <div className="col-span-4">
                        <div className="sticky top-6 bg-white/5 backdrop-blur-xl rounded-[5px] p-6 border border-yellow-400/30 shadow-2xl">

                            <h3 className="text-2xl font-bold text-white mb-6">
                                Order Summary
                            </h3>

                            <div className="space-y-4 text-white">
                                <div className="flex justify-between">
                                    <span>Items</span>
                                    <span>{totalQty}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Delivery</span>
                                    <span className="text-green-400">Free</span>
                                </div>

                                <div className="gradient-top-border pt-4 flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span className="text-yellow-400">
                                        ₹{totalAmount.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <button
                            onClick={()=>{navigate("/payment")}}
                            className="mt-8 w-full py-3 rounded-[5px] bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold text-xl hover:scale-105 transition">
                                Proceed to Checkout
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
