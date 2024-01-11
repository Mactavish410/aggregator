import Home from "../components/screens/home/Home";
import "../assets/styles/index.scss";
import styled from "./page.module.scss";

export default function Main() {
  return (
    <div className={styled.main}>
      <Home />
    </div>
  );
}
