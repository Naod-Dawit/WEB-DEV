"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import '/home/naex/Desktop/REACT PROJECTS/my-next-app/src/components/style.css'

export default function Home() {
  const [data, setdata] = useState([]);

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=0c9b75aade9402a556d92013189651ff`;

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(url);
        const jsonData = res.data.results;
        setdata(jsonData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchdata()
  }, [url]);

  console.log(data);
  

  return (
  <>
  <div className="menu">

  {data.map(movie=>(
    <div key={movie.id} className="card">
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
        <h3 className="overview">{movie.overview}</h3>

    </div>
  ))}

  </div>
 
 


  </>)
}
