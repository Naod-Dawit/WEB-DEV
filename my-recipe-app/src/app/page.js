"use client";


import { useEffect, useState } from "react";
import '/home/naex/Desktop/REACT PROJECTS/my-recipe-app/src/styles/index.css'
import { useRouter } from "next/navigation";
import Head from "next/head";
export default function Home() {
  const [data, setdata] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes`);
        const jsonData = await response.json();
        setdata(jsonData.recipes);
      } catch (err) {
        console.error(err);
      }
    };
    fetchdata();
  }, []);
  console.log(data);

  const handleclick = (id) => {
    router.push(`/recipe/${id}`);
  };

  return (
    <>
     <Head>
                <link rel="icon" href="/home/naex/Desktop/REACT PROJECTS/my-recipe-app/public/foodiesfeed.com_burger-with-melted-cheese.jpg" />
            </Head>
    

      <div>
        <h1>Welcome to Naod cooking website</h1>
      </div>

      <div className="seachtab">
        <input placeholder="Enter the food here" id="inputtab" />
        <button>Search</button>
      </div>
      <br />

      <div className="items">
        {Array.isArray(data) &&
          data.map((item) => (
            <div
              className="itemcard"
              key={item.id}
              onClick={() => handleclick(item.id)}
            >
              <h1>{item.name}</h1>
              <img src={item.image}></img>
              <h3>{item.mealType}</h3>
            </div>
          ))}
      </div>
    </>
  );
}
