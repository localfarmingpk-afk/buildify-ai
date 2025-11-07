import React from "react";
export default function HomePage() {
  return (
    <div>
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-2">Your All-in-One AI Assistant</h2>
        <p className="text-gray-600 mb-6">Create videos, generate images, write content, and solve problems with AI.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            className="p-4 border rounded bg-purple-500 text-white"
            onClick={() => alert("Video Generator clicked")}
          >
            <h3 className="font-semibold">Video Generator</h3>
            <p className="text-sm text-gray-600">Create videos using AI templates (requires API integration).</p>
          </button>

          <button
            className="p-4 border rounded bg-green-500 text-white"
            onClick={() => alert("Image Generator clicked")}
          >
            <h3 className="font-semibold">Image Generator</h3>
            <p className="text-sm text-gray-600">Generate images from prompts (requires API keys).</p>
          </button>

          <button
            className="p-4 border rounded bg-blue-500 text-white"
            onClick={async () => {
              const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                  model: "gpt-4",
                  messages: [{ role: "user", content: "Hello AI" }]
                })
              });
              const data = await response.json();
              alert(data.choices[0].message.content);
            }}
          >
            <h3 className="font-semibold">Text Assistant</h3>
            <p className="text-sm text-gray-600">Write articles, summaries, and more.</p>
          </button>

          <button
            className="p-4 border rounded bg-yellow-400 text-black"
            onClick={() => alert("Translator clicked")}
          >
            <h3 className="font-semibold">Translator</h3>
            <p className="text-sm text-gray-600">Translate text between languages.</p>
          </button>
        </div>
      </section>
    </div>
  );
}

