import { Moon } from "lucide-react";
import logo from "../../assets/logo/reward-planners-logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo">
          <img
            src={logo}
            alt="Reward Planners"
          />
        </a>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#recognition">Rewards & Recognition</a>
          <a href="#services">Employee Services</a>
          <a href="#wellness">Health & Wellness</a>
          <a href="#gifting">Corporate Gifting</a>
          <a href="#hr">For HR</a>
        </nav>

        <div className="navbar-actions">

          <button
            className="theme-button"
            aria-label="Switch theme"
          >
            <Moon size={18} />
          </button>

          <a
            href="#demo"
            className="demo-button"
          >
            Request a Demo
          </a>

        </div>

      </div>
    </header>
  );
}

export default Navbar;