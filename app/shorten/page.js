"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    // Basic validation to prevent empty submissions
    if (!url || !shortUrl) {
      alert("Please fill in both fields");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl, // Matches the backend query we fixed
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // Generates the clickable link for the UI
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        
        // Reset form
        setUrl("");
        setShortUrl("");
        
        console.log("Success:", result);
        alert(result.message);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong!");
      });
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4 shadow-md">
      <h1 className="font-bold text-2xl text-purple-800">Generate your short URLs</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={url}
          className="px-4 py-2 focus:outline-purple-600 rounded-md border border-purple-200"
          placeholder="Enter your URL (e.g., https://google.com)"
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          type="text"
          value={shortUrl}
          className="px-4 py-2 focus:outline-purple-600 rounded-md border border-purple-200"
          placeholder="Enter your preferred short text (e.g., mylink)"
          onChange={(e) => setShortUrl(e.target.value)}
        />
        
        <button
          onClick={generate}
          className="bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg shadow-lg p-3 py-2 my-3 font-bold text-white"
        >
          Generate
        </button>
      </div>

      {generated && (
        <div className="mt-4 p-4 bg-white rounded-md border-l-4 border-purple-500">
          <span className="font-bold text-lg block mb-1">Your Link:</span>
          <code className="text-purple-600 break-all">
            <Link target="_blank" href={generated} className="underline">
              {generated}
            </Link>
          </code>
        </div>
      )}
    </div>
  );
};

export default Shorten;