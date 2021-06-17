import {AiFillHtml5} from 'react-icons/ai';
import {SiCss3} from 'react-icons/si';
import {DiSass} from 'react-icons/di';
import {SiJavascript} from 'react-icons/si';
import {DiReact} from 'react-icons/di';
import {SiRedux} from 'react-icons/si';
import {SiPostman} from 'react-icons/si';
import {SiJest} from 'react-icons/si';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';

export const TechStack = () => {

    const {ref, inView} = useInView({
        threshold: 1,
        triggerOnce:true
    });

    const container = {
        hidden: {},
        show: {
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      }

      const item = {
        hidden: { opacity: 0},
        show: { opacity: 1, transition: {delay: 0.5, duration: 1.3}}
      }

      const header = {
        hidden: { opacity: 0, y:"20vh"},
        show: {opacity: 1, y:0, transition: { duration: 1}}
      }

    return(
        <section class="techStack">
            <motion.h1
            variants={header}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            ref={ref}
            >Technologies i use</motion.h1>
            <motion.div class="tech"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            >
                <motion.div variants={item} style={{color:"#F16524"}}><AiFillHtml5></AiFillHtml5><p>HTML</p></motion.div>
                <motion.div variants={item} style={{color:"#2965F1"}}><SiCss3></SiCss3><p>CSS</p></motion.div>
                <motion.div variants={item} style={{color:"#CE679A"}}><DiSass></DiSass><p>SASS</p></motion.div>
                <motion.div variants={item} style={{color:"#F7E018"}}><SiJavascript></SiJavascript><p>javaScript</p></motion.div>
                <motion.div variants={item} style={{color:"#61DBFB"}}><DiReact></DiReact><p>React</p></motion.div>
                <motion.div variants={item} style={{color:"#764ABC"}}><SiRedux></SiRedux><p>redux</p></motion.div>
                <motion.div variants={item} style={{color:"#FD6C35"}}><SiPostman></SiPostman><p>postman</p></motion.div>
                <motion.div variants={item} style={{color:"#99425B"}}><SiJest></SiJest><p>jest</p></motion.div>
                <motion.div variants={item}><p>cypress</p></motion.div>
            </motion.div>
        </section>
    )
}