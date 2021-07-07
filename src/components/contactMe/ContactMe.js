import {AiOutlinePhone} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';


export const ContactMe = () => {

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce:true
    });

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
        <section className="contactMe">
            <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            class="content"
            id="contactMe"
            >
                <h1 ref={ref}>Lets get in touch</h1>
                <div>
                    <AiOutlinePhone style={{color:"white"}}/><p>795 504 214</p>
                </div>
                <div>
                    <AiOutlineMail style={{color:"white"}}/><p>mmichno179@gmail.com</p>
                </div>
            </motion.div>
        </section>
    )
}