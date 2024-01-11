"use client";
import styles from "./Home.module.scss";
import Header from "../../layout/Header/Header";
import Nav from "@/components/layout/Nav/Nav";
import Crypto from "@/components/layout/Crypto/Crypto";
import { useState } from "react";

const Home = () => {
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.content}>
        <Crypto />
      </div>
    </div>
  );
};

export default Home;
