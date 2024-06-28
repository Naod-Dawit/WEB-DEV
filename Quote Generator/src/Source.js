import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css"

export default function Getdata() {
  const [data, setData] = useState([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://zenquotes.io/api/quotes");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      generateRandomQuote();
    }
  }, [data]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setQuote(data[randomIndex].q);
    setAuthor(data[randomIndex].a);
  };

  return (
    <div>
      <div className="quotebody">
        <h1>{quote}</h1>
        <p>- {author}</p>
      </div>
      <button onClick={generateRandomQuote}>Generate Data</button>
    </div>
  );
}
