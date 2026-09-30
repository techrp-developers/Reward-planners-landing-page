import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import "./Footer.css";


const footerLinks = [
  {
    title: "Platform",
    links: [
      "Rewards & Recognition",
      "Employee Services",
      "Health & Wellness",
      "Corporate Gifting",
    ],
  },

  {
    title: "Employee",
    links: [
      "Rewards",
      "Benefits",
      "Experiences",
      "Wellbeing",
    ],
  },

  {
    title: "Company",
    links: [
      "About Us",
      "Partners",
      "Careers",
      "Contact",
    ],
  },
];


function Footer() {

  return (

    <footer className="footer">


      <div className="footer-container">


        {/* TOP */}


        <motion.div

          className="footer-top"

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

        >


          {/* BRAND */}

          <div className="footer-brand">


            <div className="footer-logo">
              R
            </div>


            <h3>
              Reward Planners
            </h3>


            <p>

              Creating meaningful employee experiences
              through rewards, services, wellbeing
              and recognition.

            </p>



            <div className="social-icons">

            </div>


          </div>





          {/* LINKS */}


          <div className="footer-links">


            {
              footerLinks.map(section=>(

                <div
                  className="footer-column"
                  key={section.title}
                >

                  <h4>
                    {section.title}
                  </h4>


                  {
                    section.links.map(link=>(

                      <a
                        href="#"
                        key={link}
                      >
                        {link}
                      </a>

                    ))
                  }


                </div>

              ))
            }


          </div>



          {/* CONTACT */}


          <div className="footer-contact">


            <h4>
              Connect
            </h4>


            <div>
              <Mail size={16}/>
              contact@rewardplanners.com
            </div>


            <div>
              <Phone size={16}/>
              +91 7391 048 832
            </div>


            <div>
              <MapPin size={16}/>
              India
            </div>


          </div>



        </motion.div>






        {/* BOTTOM */}


        <div className="footer-bottom">


          <p>
            © 2026 Reward Planners. All rights reserved.
          </p>


          <div>

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms & Conditions
            </a>

          </div>


        </div>



      </div>


    </footer>

  );

}


export default Footer;