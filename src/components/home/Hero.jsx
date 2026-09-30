import { motion } from "framer-motion";
import { ArrowRight, Trophy, Star, Heart } from "lucide-react";
import heroImage from "../../assets/hero.png";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero-eyebrow">
            PEOPLE • APPRECIATION • A HAPPIER WORKPLACE
          </p>

          <h1>
            Work is made
            <br />
            of moments.
            <span>Make every one matter.</span>
          </h1>

          <p className="hero-text">
            From appreciation and achievements to wellbeing and everyday
            support, Reward Planners helps organizations create employee
            experiences people actually value.
          </p>

          <div className="hero-buttons">
            <a href="#experience" className="hero-primary">
              Create Better Employee Experiences
              <ArrowRight size={18} />
            </a>

            <a href="#about" className="hero-secondary">
              Discover Reward Planners
            </a>
          </div>

          <div className="hero-pillars">
            <span>Recognize</span>
            <i>•</i>
            <span>Reward</span>
            <i>•</i>
            <span>Support</span>
            <i>•</i>
            <span>Celebrate</span>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-wrapper">
            <img
              src={heroImage}
              alt="Employees enjoying a positive workplace experience"
            />
          </div>

          <motion.div
            className="recognition-card card-one"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="recognition-icon trophy">
              <Trophy size={20} />
            </div>

            <div>
              <strong>Great Work!</strong>
              <p>Your contribution made a difference.</p>
            </div>
          </motion.div>

          <motion.div
            className="recognition-card card-two"
            animate={{ y: [0, 9, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="recognition-icon star">
              <Star size={20} />
            </div>

            <div>
              <strong>Milestone Achieved</strong>
              <p>A moment worth celebrating.</p>
            </div>
          </motion.div>

          <motion.div
            className="mini-love-card"
            animate={{
              y: [0, -6, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart size={18} />
            <span>You made a difference.</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;