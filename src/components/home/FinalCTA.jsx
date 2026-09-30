import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Gift,
  HeartPulse,
  Users,
} from "lucide-react";

import "./FinalCTA.css";


const highlights = [
  {
    icon: Award,
    text: "Rewards & Recognition",
  },
  {
    icon: Users,
    text: "Employee Services",
  },
  {
    icon: HeartPulse,
    text: "Health & Wellness",
  },
  {
    icon: Gift,
    text: "Corporate Gifting",
  },
];


function FinalCTA() {

  return (

    <section
      className="final-cta"
      id="demo"
    >

      <div className="final-cta-container">


        <motion.div

          className="final-cta-box"

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.7
          }}

        >


          <div className="cta-glow"></div>


          <div className="cta-content">


            <p className="cta-label">
              READY TO TRANSFORM EMPLOYEE EXPERIENCE?
            </p>


            <h2>
              Create better moments
              <span> for your employees.</span>
            </h2>


            <p className="cta-description">

              Bring recognition, services, wellbeing and gifting
              together with one connected employee experience
              platform.

            </p>



            <a
              href="#contact"
              className="cta-button"
            >

              Request a Demo

              <ArrowRight size={18}/>

            </a>


          </div>




          <div className="cta-highlights">


            {
              highlights.map((item,index)=>{

                const Icon=item.icon;


                return (

                  <motion.div

                    className="cta-highlight"

                    key={item.text}

                    initial={{
                      opacity:0,
                      y:20
                    }}

                    whileInView={{
                      opacity:1,
                      y:0
                    }}

                    viewport={{
                      once:true
                    }}

                    transition={{
                      delay:index*.1,
                      duration:.5
                    }}

                  >

                    <Icon size={18}/>

                    <span>
                      {item.text}
                    </span>

                  </motion.div>

                )

              })
            }


          </div>



        </motion.div>


      </div>


    </section>

  );

}


export default FinalCTA;