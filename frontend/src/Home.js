import React, { useState, useEffect } from "react";

const Home = () => {
  const [count, setCount] = useState(3);

  const fetchData = async () => {
    const data = await fetch("/api/index");
    const body = await data.json();
    setCount(body.result);
  };

  useEffect(() => {
    console.log(count);
    setCount(5);
    fetchData();
  }, []);

  return <div>Hello World</div>;
};

export default Home;
