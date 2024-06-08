import herostyles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={herostyles.hero}>
      <div className={herostyles.hero__frame}>
        <h1 className={herostyles["hero__frame--h1"]}>
          Cash Flow Made Easy for Creators
        </h1>
        <div className={herostyles.hero__buttons}>
          <button className={herostyles["hero__buttons--learn"]}>Learn More</button>
          <button className={herostyles["hero__buttons--signup"]}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
