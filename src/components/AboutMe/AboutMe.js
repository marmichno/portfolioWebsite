import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {useAnimation} from 'framer-motion';

export const AboutMe = () => {

    const {ref, inView, skip} = useInView({
        threshold: 0.5,
        triggerOnce:true
    });
    
    const animation = useAnimation();

    const container = {
        hidden: { opacity: 0, y: '20vh' },
        show: {
          y:0,
          opacity: 1,
          transition: {
            duration:1
          }
        }
      }

    return(
        <section className="aboutMe">
            <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="content">
                <h1 ref={ref}>Few informations about me</h1>
                <p>
                Courteous and enthusiastic, I am interested in IT and everything in its orbit especially coding. 
                I am constantly expanding my knowledge and presently looking for a job or an internship as a front-end developer.
                </p>
            </motion.div>
        </section>
    )
}