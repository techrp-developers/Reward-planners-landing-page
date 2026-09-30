import { motion } from "framer-motion";
import {
  FileText,
  Plane,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import "./EmployeeServices.css";


const services = [
  {
    icon: FileText,
    title: "Documents & Assistance",
    text: "Support for important employee documentation and personal requirements.",
    items: [
      "PAN Card",
      "Aadhaar Card",
      "Passport",
      "Visa Assistance",
    ],
  },
  {
    icon: Plane,
    title: "Travel & Mobility",
    text: "Convenient travel solutions that simplify everyday journeys.",
    items: [
      "Bus Booking",
      "Travel Support",
      "Commute Assistance",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Financial Protection",
    text: "Access support services that help employees plan and protect better.",
    items: [
      "Insurance",
      "Financial Services",
      "Employee Benefits",
    ],
  },
  {
    icon: Sparkles,
    title: "Lifestyle Support",
    text: "Thoughtful services designed around employee convenience.",
    items: [
      "Wellness",
      "Lifestyle Needs",
      "Personal Services",
    ],
  },
];


function EmployeeServices() {

  return (

    <section
      className="employee-services"
      id="services"
    >

      <div className="employee-services-container">


        {/* HEADER */}

        <motion.div

          className="employee-services-header"

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

          <p className="services-label">
            EMPLOYEE SERVICES
          </p>


          <h2>
            Support beyond
            <span> the workplace.</span>
          </h2>


          <p>

            Reward Planners connects employees with
            meaningful services that simplify everyday
            needs and improve their overall experience.

          </p>


        </motion.div>



        {/* SERVICES GRID */}


        <div className="services-grid">


          {
            services.map((service,index)=>{

              const Icon = service.icon;


              return (

                <motion.div

                  className="service-card"

                  key={service.title}


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
                    duration:0.5,
                    delay:index*0.12
                  }}

                >


                  <div className="service-top">

                    <div className="service-icon">

                      <Icon size={24}/>

                    </div>


                    <ArrowUpRight size={18}/>

                  </div>



                  <h3>
                    {service.title}
                  </h3>


                  <p>
                    {service.text}
                  </p>



                  <div className="service-items">

                    {
                      service.items.map(item=>(

                        <span key={item}>
                          {item}
                        </span>

                      ))
                    }

                  </div>


                </motion.div>

              )

            })
          }


        </div>




        {/* CTA */}

        <motion.div

          className="services-bottom"

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

        >

          <strong>
            Explore more employee experiences with Reward Planners.
          </strong>


          <span>
            A connected ecosystem designed around your people.
          </span>


        </motion.div>



      </div>


    </section>

  );

}


export default EmployeeServices;