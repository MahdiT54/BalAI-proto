import herostyles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={herostyles.hero}>
      <div className={herostyles.hero__frame}>
        <h1 className={herostyles["hero__frame--h1"]}>Cash Flow Made Easy for Creators</h1>
      </div>
    </div>
  );
}
