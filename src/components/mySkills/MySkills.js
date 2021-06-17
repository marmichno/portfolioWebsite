import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {useAnimation} from 'framer-motion';

export const MySkills = () =>{

    const {ref, inView, skip} = useInView({
        threshold: 1,
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
        <section className="mySkills">
            <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            class="content">
                <h1>Things i know</h1>
                <p>- how to build modern web application</p>
                <p>- make it responsive for all resolutions and devices</p>
                <p ref={ref}>- connect it to backend</p>
                <p>- write end to end, unit and integration tests</p>
                <p>- deploy it to a live server</p>
            </motion.div>
        </section>
    )
}