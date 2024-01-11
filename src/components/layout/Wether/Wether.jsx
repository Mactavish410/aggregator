import React, { useState, useEffect } from "react";
import styles from "./Wether.module.scss";
import axios from "axios";

const Wether = () => {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Оренбург&appid=9cfb9d6a2b28e4a7fa4dff8dbb735338"
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
        console.log("Error");
      }
    }
    fetchData();
  }, []);
  console.log(posts);

  if (posts.length === 0) return null;
  return (
    <div className={styles.main}>
      <h3>{posts.name}</h3>
      <h2>{Math.round(posts.main.temp - 273)}</h2>
      <ul>
        <li>
          <p>Ветер</p>
          <p>
            {Math.round(posts.wind.speed)}
            <span>м/с</span>
          </p>
        </li>
        <li>
          <p>Давление</p>
          <p>
            {Math.round(posts.main.pressure / 1.333)}
            <span>мм рт.ст</span>
          </p>
        </li>
        <li>
          <p>Влажность</p>
          <p>
            {posts.main.humidity}
            <span>%</span>
          </p>
        </li>
        <li>
          <p>Вода</p>
          <p>
            300
            <span>м/с</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Wether;

// "http://api.openweathermap.org/geo/1.0/direct?q=Оренбург&limit=9cfb9d6a2b28e4a7fa4dff8dbb735338"
// -273
