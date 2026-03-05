const API_KEY = "AIzaSyCJ5uQT1--8Ss_6n-pSc6BG4axPSk9kc5o";



async function run(prompt) {
    const response = await fetch(
        "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=" + API_KEY,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }]
                    }
                ]
            }),
        }
    );

    const data = await response.json();

    if (!data.candidates) {
        console.error("Gemini raw response:", data);
        throw new Error("No candidates returned from Gemini");
    }

    return data.candidates[0].content.parts[0].text;
}

export default run;