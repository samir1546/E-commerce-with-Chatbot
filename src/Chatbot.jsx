import React, { useEffect, useRef, useState, useContext } from "react";
import { MessageCircle, X } from "lucide-react";
import { DataContext } from "./context/UserContextProvider";

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [closing, setClosing] = useState(false);


    const { askAI, thinking } = useContext(DataContext);

    const [messages, setMessages] = useState([
        {
            from: "welcome",
            text: "✨Welcome to LUXESTORE\nYour personal LUXE Concierge is here to help you",
        },
    ]);

    const scrollref = useRef(null);

    useEffect(() => {
        if (scrollref.current) {
            scrollref.current.scrollTop = scrollref.current.scrollHeight;
        }
    }, [messages, thinking]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userText = input;

        // USER MESSAGE
        setMessages(prev => [
            ...prev,
            { from: "user", text: userText },
            { from: "ai", text: "…" } // 🔥 fake fast reply
        ]);

        setInput("");

        try {
            const aiReply = await askAI(userText);

            // replace last "…" message
            setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                    from: "ai",
                    text: aiReply
                };
                return updated;
            });

        } catch (err) {
            setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                    from: "ai",
                    text: "⚠️ Something went wrong. Try again."
                };
                return updated;
            });
        }
    };


    return (
        <>
            {/* FLOATING BUTTON */}
            <div className="fixed bottom-6 right-6 z-[9999]">
                <button
                    onClick={() => setOpen(!open)}
                    className="relative h-20 w-20 rounded-full 
        bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500
        flex items-center justify-center
        shadow-[0_0_30px_rgba(255,215,0,0.6)]
        hover:scale-110 transition-all duration-300
        animate-pulse"
                >
                    {/* glowing ring */}
                    <span className="absolute inset-0 rounded-full 
        animate-ping bg-yellow-400 opacity-30"></span>

                    <MessageCircle className="text-black z-10" size={28} />
                </button>
            </div>


            {/* CHAT BOX */}
            {open && (
                <div
                    className={`fixed bottom-28 right-6 w-[400px] h-[500px] 
    bg-black/70 backdrop-blur-xl border border-yellow-400/40 
    rounded-[5px] p-2 shadow-2xl z-[9999] flex flex-col overflow-hidden
    transition-all duration-300 ease-in-out
    ${closing ? "opacity-0 translate-y-10 scale-95" : "opacity-100 translate-y-0 scale-100"}
    `}
                >


                    {/* HEADER */}
                    <div className="relative group overflow-hidden flex items-center justify-between px-4 py-3 bg-yellow-400 text-black font-bold">

                        {/* hover layer (left → right) */}
                        <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-600 z-0"></span>

                        <span className="relative z-10 group-hover:text-black transition-colors">
                            LUXE <span>Concierge</span>
                        </span>

                        <X
                            className={`relative z-10 cursor-pointer transition-transform duration-300 
    ${closing ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
                            onClick={() => {
                                setClosing(true);

                                setTimeout(() => {
                                    setOpen(false);
                                    setClosing(false);
                                }, 300); // animation time
                            }}
                        />

                    </div>


                    {/* MESSAGES */}
                    <div
                        ref={scrollref}
                        className="flex-1 p-3 space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-black/20 whitespace-pre-line"
                    >
                        {messages.map((msg, i) => {

                            if (msg.from === "welcome") {
                                return (
                                    <div
                                        key={i}
                                        className="w-full flex justify-center items-center py-2"
                                    >
                                        <div className="text-center text-[17px] leading-relaxed text-gray-300 tracking-wider">
                                            {msg.text}
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <div
                                    key={i}
                                    className={`max-w-[75%] px-3 py-2 rounded-[2px] text-sm leading-relaxed ${msg.from === "user"
                                        ? "ml-auto bg-yellow-400 text-black text-[16px]"
                                        : "mr-auto bg-black/50 text-white text-[14px]"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            );
                        })}

                        {/* 🔹 AI thinking */}
                        {/* {thinking && (
                            <div className="mr-auto text-sm text-yellow-400 animate-pulse">
                                LUXE Concierge is thinking...
                            </div>
                        )} */}
                    </div>

                    {/* INPUT */}
                    <div className="p-3 border-t border-yellow-400/30 flex gap-5">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Type your message..."
                            className="flex-1 px-3 py-2 rounded-[2px] text-white outline-none border-b border-yellow-400/40 bg-transparent"
                        />
                        <button
                            onClick={sendMessage}
                            className="relative group px-4 py-2 rounded-[2px] border border-yellow-400 overflow-hidden font-semibold text-black bg-yellow-400"
                        >
                            {/* hover bg (bottom → top) */}
                            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-600 z-0"></span>

                            <span className="relative z-10 group-hover:text-black transition-colors">
                                Send
                            </span>
                        </button>

                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
