import { motion } from "framer-motion";
import {
  Award,
  HeartPulse,
  Sparkles,
  Gift,
  ArrowUpRight,
} from "lucide-react";

import "./EmployeeExperience.css";

const experiences = [
  {
    number: "01",
    icon: Award,
    title: "Rewards & Recognition",
    text: "Turn everyday contributions, milestones and achievements into moments employees remember.",
    tag: "Appreciate",
  },
  {
    number: "02",
    icon: HeartPulse,
    title: "Employee Wellbeing",
    text: "Support healthier and happier employees with experiences designed around life beyond the desk.",
    tag: "Care",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Curated Employee Services",
    text: "Give employees convenient access to thoughtfully selected support for everyday needs.",
    tag: "Support",
  },
  {
    number: "04",
    icon: Gift,
    title: "Corporate Gifting",
    text: "Make onboarding, festivals, achievements and important employee moments more meaningful.",
    tag: "Celebrate",
  },
];

function EmployeeExperience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-label">
              THE EMPLOYEE EXPERIENCE
            </p>

            <h2>
              One platform.
              <br />
              <span>Better employee experiences.</span>
            </h2>
          </div>

          <p className="experience-intro">
            Reward Planners brings appreciation, wellbeing,
            everyday support and celebration together—helping HR
            create experiences employees genuinely value.
          </p>
        </motion.div>

        <div className="experience-grid">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="experience-card"
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
              >
                <div className="experience-card-top">
                  <span className="experience-number">
                    {item.number}
                  </span>

                  <div className="experience-icon">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="experience-card-content">
                  <span className="experience-tag">
                    {item.tag}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>

                <div className="experience-card-bottom">
                  <span>Explore experience</span>
                  <ArrowUpRight size={17} />
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="experience-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>Not another benefits marketplace.</span>

          <strong>
            A more thoughtful way to support your people.
          </strong>
        </motion.div>

      </div>
    </section>
  );
}

export default EmployeeExperience;