import React from "react";
import { useEffect, useState } from "react";
import styles from "./Crypto.module.scss";
import Cryptocurrency from "./Сryptocurrency/Сryptocurrency";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Crypto = () => {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://api.cryptorank.io/v1/currencies?api_key=f82840021aa82ad93ecdefb00892677bdfef851bed6a62967bf1c6cb6377"
        );
        setPosts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  const chunkArray = (arr, cnt) =>
    arr.reduce(
      (prev, cur, i, a) =>
        !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev,
      []
    );
  return (
    <div className={styles.main}>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {chunkArray(posts, 10).map((item) => (
          <SwiperSlide key={item.id}>
            {item.map((i) => (
              <Cryptocurrency key={i.id} {...i} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {chunkArray(posts, 8).map((item) => (
        <Cryptocurrency key={item.id} {...item} />
      ))}
      {console.log(chunkArray(posts, 8))} */}
    </div>
  );
};

export default Crypto;
