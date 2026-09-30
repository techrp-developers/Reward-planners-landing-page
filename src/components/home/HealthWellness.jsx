import { motion } from "framer-motion";
import {
  Footprints,
  HeartPulse,
  FlaskConical,
  Home,
  Activity,
} from "lucide-react";

import "./HealthWellness.css";


const wellnessFeatures = [
  {
    icon: Footprints,
    title: "Stay Active",
    text: "Encourage daily movement and healthy habits through wellness tracking.",
  },
  {
    icon: HeartPulse,
    title: "Health Checkups",
    text: "Help employees access preventive health checkups conveniently.",
  },
  {
    icon: FlaskConical,
    title: "Lab Support",
    text: "Connect employees with nearby diagnostic support.",
  },
  {
    icon: Home,
    title: "Home Collection",
    text: "Bring healthcare convenience closer to employees.",
  },
];


function HealthWellness() {

  return (

    <section
      className="health-section"
      id="wellness"
    >

      <div className="health-container">


        {/* HEADER */}

        <motion.div

          className="health-header"

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.6
          }}

        >

          <p className="health-label">
            HEALTH & WELLNESS
          </p>


          <h2>
            Healthy employees.
            <span> Stronger workplaces.</span>
          </h2>


          <p>
            Reward Planners helps organizations support employee
            wellbeing through accessible wellness experiences,
            preventive care and everyday health engagement.
          </p>


        </motion.div>



        {/* MAIN CONTENT */}

        <div className="health-layout">



          {/* LEFT JOURNEY */}

          <motion.div

            className="wellness-journey"

            initial={{
              opacity:0,
              x:-40
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:0.7
            }}

          >

            <span className="journey-title">
              Your wellness journey
            </span>


            <div className="journey-step">

              <div className="step-number">
                01
              </div>

              <div>
                <strong>
                  Connect
                </strong>

                <p>
                  Start your wellness experience.
                </p>
              </div>

            </div>



            <div className="journey-line"></div>


            <div className="journey-step">

              <div className="step-number">
                02
              </div>

              <div>
                <strong>
                  Track
                </strong>

                <p>
                  Build healthier daily habits.
                </p>
              </div>

            </div>



            <div className="journey-line"></div>


            <div className="journey-step">

              <div className="step-number">
                03
              </div>

              <div>
                <strong>
                  Improve
                </strong>

                <p>
                  Understand and improve wellbeing.
                </p>
              </div>

            </div>



            <div className="journey-line"></div>


            <div className="journey-step">

              <div className="step-number">
                04
              </div>

              <div>
                <strong>
                  Stay Healthy
                </strong>

                <p>
                  Continue your wellness journey.
                </p>
              </div>

            </div>


          </motion.div>





          {/* WELLNESS DASHBOARD */}


          <motion.div

            className="wellness-dashboard"

            initial={{
              opacity:0,
              scale:0.95
            }}

            whileInView={{
              opacity:1,
              scale:1
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:0.7
            }}

          >

            <div className="dashboard-header">

              <span>
                Employee Wellness
              </span>

              <Activity size={18}/>

            </div>



            <div className="steps-card">

              <div>

                <small>
                  Today's Activity
                </small>

                <h3>
                  8,540
                </h3>

                <p>
                  Steps completed
                </p>

              </div>


              <div className="step-circle">

                <Footprints size={28}/>

              </div>

            </div>



            <div className="health-status">


              <div>

                <strong>
                  Health Checkup
                </strong>

                <span>
                  Available
                </span>

              </div>


              <div>

                <strong>
                  Lab Support
                </strong>

                <span>
                  Nearby options
                </span>

              </div>


            </div>



            <div className="wellness-note">

              Wellness support,
              whenever employees need it.

            </div>


          </motion.div>


        </div>





        {/* FEATURE CARDS */}


        <div className="wellness-features">


          {
            wellnessFeatures.map((item,index)=>{

              const Icon=item.icon;


              return (

                <motion.div

                  className="wellness-card"

                  key={item.title}


                  initial={{
                    opacity:0,
                    y:25
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  viewport={{
                    once:true
                  }}

                  transition={{
                    duration:0.5,
                    delay:index*0.1
                  }}

                >

                  <div className="wellness-icon">

                    <Icon size={22}/>

                  </div>


                  <h4>
                    {item.title}
                  </h4>


                  <p>
                    {item.text}
                  </p>


                </motion.div>

              )

            })
          }


        </div>


      </div>


    </section>

  );

}


export default HealthWellness;