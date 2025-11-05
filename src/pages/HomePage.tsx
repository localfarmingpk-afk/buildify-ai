import React from "react";

export default function HomePage() {
  return (
    <div>
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-2">Your All-in-One AI Assistant</h2>
        <p className="text-gray-600 mb-6">Create videos, generate images, write content, and solve problems with AI.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Video Generator</h3>
            <p className="text-sm text-gray-600">Create videos using AI templates (requires API integration).</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Image Generator</h3>
            <p className="text-sm text-gray-600">Generate images from prompts (requires API keys).</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Text Assistant</h3>
            <p className="text-sm text-gray-600">Write articles, summaries, and more.</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Translator</h3>
            <p className="text-sm text-gray-600">Translate text between languages.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
