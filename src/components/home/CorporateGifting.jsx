import { motion } from "framer-motion";
 import {
  Gift,
  Sparkles,
  Trophy,
  Heart,
} from "lucide-react";

import "./CorporateGifting.css";


const giftingMoments = [
  {
    icon: Gift,
    title: "Welcome Kits",
    text: "Create memorable first impressions for new employees.",
  },
  {
    icon: Sparkles,
    title: "Festive Celebrations",
    text: "Make festivals and occasions more meaningful.",
  },
  {
    icon: Trophy,
    title: "Milestones",
    text: "Celebrate achievements and employee journeys.",
  },
  {
    icon: Heart,
    title: "Appreciation",
    text: "Turn recognition into a memorable experience.",
  },
];


function CorporateGifting() {

  return (

    <section
      className="corporate-gifting"
      id="gifting"
    >

      <div className="corporate-gifting-container">


        {/* HEADER */}

        <motion.div

          className="gifting-header"

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

          <p className="gifting-label">
            CORPORATE GIFTING
          </p>


          <h2>
            Beyond a gift.
            <span> A memorable experience.</span>
          </h2>


          <p>

            Thoughtfully curated gifting experiences that help
            organizations celebrate employees, milestones and
            important moments.

          </p>


        </motion.div>





        {/* MAIN SECTION */}


        <div className="gifting-layout">



          {/* LEFT CONTENT */}


          <motion.div

            className="gifting-content"

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


            <div className="gifting-highlight">

              <Sparkles size={22}/>

              <span>
                Employee-first gifting
              </span>

            </div>



            <h3>

              Make every employee
              moment special.

            </h3>



            <p>

              From joining experiences to festivals and
              achievements, Reward Planners helps companies
              create thoughtful moments employees remember.

            </p>



            <div className="gifting-points">

              <span>
                ✓ Curated collections
              </span>

              <span>
                ✓ Personalised experiences
              </span>

              <span>
                ✓ Corporate-ready solutions
              </span>

            </div>


          </motion.div>






          {/* GIFT VISUAL */}


          <motion.div

            className="gift-visual"

            initial={{
              opacity:0,
              scale:.9
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


            <div className="gift-glow"></div>


            <motion.div

              className="gift-box"

              animate={{
                y:[0,-10,0]
              }}

              transition={{
                duration:4,
                repeat:Infinity,
                ease:"easeInOut"
              }}

            >

              <div className="gift-ribbon"></div>

              <Gift size={70}/>

            </motion.div>




            <div className="floating-gift tag-one">
              🎉 Festival
            </div>


            <div className="floating-gift tag-two">
              🏆 Achievement
            </div>


            <div className="floating-gift tag-three">
              🎁 Welcome Kit
            </div>



          </motion.div>


        </div>





        {/* MOMENTS */}


        <div className="gifting-moments">


          {
            giftingMoments.map((item,index)=>{

              const Icon=item.icon;


              return (

                <motion.div

                  className="gifting-card"

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
                    duration:.5,
                    delay:index*.1
                  }}

                >

                  <div className="gifting-icon">

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


export default CorporateGifting;