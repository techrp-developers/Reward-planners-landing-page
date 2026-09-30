import { motion } from "framer-motion";
import {
  Trophy,
  Star,
  Gift,
  Users,
  Sparkles,
} from "lucide-react";

import "./Recognition.css";


const moments = [
  {
    icon: Trophy,
    title: "Great Work",
    text: "Celebrate employees who go beyond expectations.",
  },
  {
    icon: Star,
    title: "Milestones",
    text: "Make important career moments memorable.",
  },
  {
    icon: Gift,
    title: "Special Occasions",
    text: "Celebrate birthdays, festivals and achievements.",
  },
  {
    icon: Users,
    title: "Team Recognition",
    text: "Encourage appreciation across teams.",
  },
];


function Recognition() {

  return (
    <section
      className="recognition-section"
      id="recognition"
    >

      <div className="recognition-container">


        {/* HEADER */}

        <motion.div
          className="recognition-header"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}
        >

          <p className="recognition-label">
            REWARDS & RECOGNITION
          </p>


          <h2>
            Recognition should not wait
            <span> for annual reviews.</span>
          </h2>


          <p>
            Create everyday appreciation moments where employees
            feel valued, celebrated and connected with their
            organization.
          </p>

        </motion.div>



        {/* MAIN VISUAL */}

        <div className="recognition-layout">


          {/* LEFT SIDE */}

          <motion.div
            className="recognition-copy"

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

            <div className="recognition-message">

              <Sparkles size={22}/>

              <p>
                "Every contribution deserves a moment
                of appreciation."
              </p>

            </div>


            <h3>
              Turn employee achievements
              into meaningful experiences.
            </h3>


            <p className="recognition-description">

              From instant appreciation to milestone
              celebrations, Reward Planners helps HR
              create recognition programs employees
              genuinely remember.

            </p>


          </motion.div>




          {/* RIGHT CELEBRATION BOARD */}


          <motion.div
            className="recognition-board"

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


            <div className="board-top">

              <span>
                Employee Recognition
              </span>

              <div>
                ★ ★ ★
              </div>

            </div>



            <div className="achievement-card">


              <div className="achievement-icon">
                <Trophy size={28}/>
              </div>


              <div>

                <strong>
                  Great Work!
                </strong>

                <p>
                  Your contribution made a difference.
                </p>

              </div>


            </div>




            <div className="points-card">

              <span>
                Reward unlocked
              </span>


              <strong>
                +500 RP Points
              </strong>

            </div>



            <div className="floating-moment moment-one">
              🎉 Milestone Achieved
            </div>


            <div className="floating-moment moment-two">
              💜 Team Appreciation
            </div>



          </motion.div>


        </div>




        {/* MOMENT CARDS */}


        <div className="recognition-moments">


          {
            moments.map((item,index)=>{

              const Icon=item.icon;


              return (

                <motion.div

                  className="moment-card"

                  key={item.title}


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
                    duration:0.5,
                    delay:index*0.1
                  }}

                >

                  <div className="moment-icon">

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


export default Recognition;