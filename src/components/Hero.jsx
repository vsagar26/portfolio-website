import React from "react";
import heroimg from "../assets/heroimg.svg";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf"



const Hero = () => {



  return (
    <motion.div
      className="flex flex-row ml-[140px]"
      initial={{ y: 40 }}
      animate={{
        y: 0,
      }}
      
    >
      <div className="pl-20 flex flex-col justify-center h-[100vh] ">
        <h2 className="text-[30px] pt-4 font-[400]">Hi</h2>
        <h1 className="text-[80px] font-bold font-[Poppins] font-[300]">
          I'm <span className="text-[#6737A3] font-[700]">Vidya Sagar</span>
        </h1>
        <p className={`font-[Poppins] text-[16.5px] pt-4`}>
        An enthusiastic, motivated and self-disciplined <span className="text-[#6737A3] font-semibold">Full Stack Web Developer (MERN)</span><br/> seeking Full Stack Web Developer (MERN) role in an emerging firm where<br/> I could utilize my skills and knowledge to grow professionally as well as play a <br/>challenging and creative role with a commitment to company excellence.
        </p>
        <div>
        <a href={resume} download="Vidya_Sagar_Resume">
        <motion.button
          className="bg-[#6737A3] text-white px-4 py-2 w-[200px] mt-20 rounded"
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >
          Download CV
        </motion.button>
        </a>
        <motion.button
          className="bg-[#6737A3] text-white px-4 py-2 w-[200px] mt-20 rounded ml-20"
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}

          onClick={()=> window.open("mailto:vsagar267@gmail.com?subject=Regarding Job Opportunity&body=Hi Vidya Sagar,")}
        >
          Hire Me
        </motion.button>
        </div>
        
        
      </div>
      <motion.div animate={{
            y:-10 }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
            }}>
        <img src={heroimg} alt="IMG" className="h-[450px] mt-40 pr-4" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
