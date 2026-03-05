import { createContext, useState } from "react"
import run from "../../gemini.js"

export const DataContext = createContext()

const UserContextProvider = ({ children }) => {

    const [thinking, setThinking] = useState(false)

    // 🔹 CLEAN AI RESPONSE
    const cleanResponse = (text) => {
        return text
            .replace(/\*\*/g, "")
            .replace(/\*/g, "")
            .replace(/google/gi, "LUXESTORE")
    }

    // 🔥 CHAT BASED AI (NO SPEAK)
    const askAI = async (userText) => {
        try {
            setThinking(true)
            const response = await run(userText)
            const cleaned = cleanResponse(response)
            setThinking(false)
            return cleaned
        } catch (err) {
            setThinking(false)
            return "Sorry, something went wrong. Please try again."
        }
    }

    return (
        <DataContext.Provider value={{ askAI, thinking }}>
            {children}
        </DataContext.Provider>
    )
}

export default UserContextProvider
