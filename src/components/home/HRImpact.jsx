import { motion } from "framer-motion";
import {
  ClipboardList,
  Users,
  BarChart3,
  Sparkles,
  CheckCircle,
} from "lucide-react";

import "./HRImpact.css";


const hrChallenges = [
  "Manual reward tracking",
  "Multiple vendor coordination",
  "Low employee participation",
  "Limited visibility",
  "Disconnected experiences",
];


const rpSolutions = [
  "One connected platform",
  "Simplified recognition programs",
  "Better employee engagement",
  "Easy program management",
  "Personalized experiences",
];


const impactCards = [
  {
    icon: Users,
    title: "Employee Engagement",
    text: "Create meaningful moments employees remember.",
  },
  {
    icon: BarChart3,
    title: "Better Visibility",
    text: "Understand participation and engagement.",
  },
  {
    icon: ClipboardList,
    title: "Simplified HR",
    text: "Reduce operational effort and coordination.",
  },
];


function HRImpact() {

  return (

    <section
      className="hr-impact"
      id="hr-impact"
    >

      <div className="hr-impact-container">


        {/* HEADER */}

        <motion.div

          className="hr-impact-header"

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
            duration:.6
          }}

        >

          <p className="impact-label">
            FOR HR TEAMS
          </p>


          <h2>
            Built for employees.
            <span> Designed for HR.</span>
          </h2>


          <p>

            Reward Planners helps HR teams move from
            manual processes to meaningful employee
            experiences.

          </p>


        </motion.div>




        {/* TRANSFORMATION */}


        <div className="impact-flow">


          {/* CHALLENGES */}

          <motion.div

            className="impact-box challenge-box"

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
              duration:.7
            }}

          >

            <div className="box-title">

              <span></span>

              HR Challenges

            </div>



            <div className="impact-list">

              {
                hrChallenges.map(item=>(

                  <div
                    className="impact-item negative"
                    key={item}
                  >

                    <span>
                      ×
                    </span>

                    {item}

                  </div>

                ))
              }

            </div>


          </motion.div>





          {/* CENTER */}

          <motion.div

            className="impact-center"

            initial={{
              opacity:0,
              scale:.8
            }}

            whileInView={{
              opacity:1,
              scale:1
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.6
            }}

          >

            <div className="impact-logo">

              <Sparkles size={28}/>

            </div>


            <strong>
              Reward
              <br/>
              Planners
            </strong>


            <span>
              One connected
              experience
            </span>


          </motion.div>






          {/* SOLUTIONS */}

          <motion.div

            className="impact-box solution-box"

            initial={{
              opacity:0,
              x:40
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.7
            }}

          >

            <div className="box-title solution-title">

              <span></span>

              Reward Planners

            </div>



            <div className="impact-list">

              {
                rpSolutions.map(item=>(

                  <div
                    className="impact-item positive"
                    key={item}
                  >

                    <CheckCircle size={16}/>

                    {item}

                  </div>

                ))
              }

            </div>


          </motion.div>



        </div>





        {/* IMPACT CARDS */}


        <div className="impact-cards">


          {
            impactCards.map((item,index)=>{

              const Icon=item.icon;


              return (

                <motion.div

                  className="impact-card"

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
                    duration:.5,
                    delay:index*.1
                  }}

                >

                  <div className="impact-icon">

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


export default HRImpact;