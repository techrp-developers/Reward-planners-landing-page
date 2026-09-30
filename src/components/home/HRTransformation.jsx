import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  PhoneCall,
  ClipboardCheck,
  Clock3,
  MessageSquareMore,
  Heart,
  Award,
  Gift,
  Sparkles,
} from "lucide-react";

import "./HRTransformation.css";

const hrProblems = [
  {
    icon: FileSpreadsheet,
    title: "Manual Tracking",
    text: "Spreadsheets everywhere",
  },
  {
    icon: PhoneCall,
    title: "Vendor Coordination",
    text: "Multiple calls & follow-ups",
  },
  {
    icon: ClipboardCheck,
    title: "Reward Management",
    text: "Too many manual steps",
  },
  {
    icon: MessageSquareMore,
    title: "Repeated Follow-ups",
    text: "Constant coordination",
  },
  {
    icon: Clock3,
    title: "Missed Moments",
    text: "Recognition comes late",
  },
];

const outcomes = [
  {
    icon: Award,
    title: "Recognize",
    text: "Celebrate contributions",
  },
  {
    icon: Gift,
    title: "Reward",
    text: "Create meaningful moments",
  },
  {
    icon: Heart,
    title: "Support",
    text: "Care beyond the workplace",
  },
  {
    icon: Sparkles,
    title: "Celebrate",
    text: "Make milestones memorable",
  },
];

function HRTransformation() {
  return (
    <section className="hr-transform" id="hr">
      <div className="hr-transform-container">

        {/* SECTION INTRO */}
        <motion.div
          className="hr-transform-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hr-transform-label">
            BUILT FOR HR. DESIGNED FOR PEOPLE.
          </p>

          <h2>
            HR shouldn&apos;t spend its time
            <span> managing appreciation.</span>
          </h2>

          <p>
            Bring scattered employee engagement activities into one
            thoughtful experience—so HR can spend less time coordinating
            and more time creating moments that matter.
          </p>
        </motion.div>

        {/* TRANSFORMATION VISUAL */}
        <div className="hr-flow">

          {/* BEFORE */}
          <motion.div
            className="hr-side hr-before"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hr-side-title">
              <span className="hr-status-dot"></span>
              HR Today
            </div>

            <h3>
              Too many tasks.
              <br />
              Too little time.
            </h3>

            <div className="hr-problem-list">
              {hrProblems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="hr-problem"
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.09,
                    }}
                  >
                    <div className="hr-problem-icon">
                      <Icon size={18} />
                    </div>

                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CENTER */}
          <motion.div
            className="hr-center"
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <div className="hr-center-glow"></div>

            <motion.div
              className="hr-rp-circle"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="hr-r-letter">R</span>

              <div>
                <strong>Reward Planners</strong>
                <small>One connected experience</small>
              </div>
            </motion.div>

            <span className="hr-center-caption">
              Simplify • Connect • Engage
            </span>
          </motion.div>

          {/* AFTER */}
          <motion.div
            className="hr-side hr-after"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            <div className="hr-side-title hr-side-title-after">
              Employee Experience
            </div>

            <h3>
              More moments.
              <br />
              More meaning.
            </h3>

            <div className="hr-outcome-grid">
              {outcomes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="hr-outcome"
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.3 + index * 0.1,
                    }}
                  >
                    <div className="hr-outcome-icon">
                      <Icon size={19} />
                    </div>

                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* FINAL STATEMENT */}
        <motion.div
          className="hr-final-message"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
        >
          <span>Less manual effort.</span>
          <strong>More time for people.</strong>
        </motion.div>

      </div>
    </section>
  );
}

export default HRTransformation;