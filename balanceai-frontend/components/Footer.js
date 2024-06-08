import footerstyles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__logo">
          <img src="/Logo.svg" alt="BalanceAI Logo" />
          <h6>BalanceAI</h6>
        </div>
        <ul className="footer__list">
          <li className="footer__link">Home</li>
          <li className="footer__link">About</li>
          <li className="footer__link">Contact</li>
          <li className="footer__link">Technology</li>
        </ul>
        <div className="footer__button--container">
          <button className="footer__button">Login</button>
          <button className="footer__button">Sign Up</button>
        </div>
      </div>
    </footer>
  );
}