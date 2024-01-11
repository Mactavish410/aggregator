"use client";
import styles from "./Home.module.scss";
import Header from "../../layout/Header/Header";
import Nav from "@/components/layout/Nav/Nav";
import Crypto from "@/components/layout/Crypto/Crypto";
import Wether from "@/components/layout/Wether/Wether";
import { useState } from "react";

const Home = () => {
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.content}>
        {/* <Crypto /> */}
        <Wether />
      </div>
    </div>
  );
};

export default Home;
