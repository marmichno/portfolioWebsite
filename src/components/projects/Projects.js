import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {useAnimation} from 'framer-motion';

import photographer from '../../resources/projects/photographerWebsite.JPG';
import flashcards from '../../resources/projects/flashcards.JPG';
import hearthstone from '../../resources/projects/hearthstone.JPG';
import foodOrdering from '../../resources/projects/foodordering.JPG';


export const Projects = () => {

    const {ref, inView, skip} = useInView({
        threshold: 1,
        triggerOnce:true
    });
    
    const animation = useAnimation();

    const container = {
        hidden: {},
        show: {
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
            duration:0.5
          }
        }
      }

      const headerFromBottom = {
          hidden: { opacity: 0, y:"20vh"},
          show: {opacity: 1, y:0, transition: { duration: 1}}
      }
      
      const itemLeft = {
        hidden: { opacity: 0, x:"-20vw" },
        show: { opacity: 1, x:0, transition: {delay:0.5, duration:0.8} }
      }

      const itemRight = {
        hidden: { opacity: 0, x: "20vw" },
        show: { opacity: 1, x: 0, transition: {delay:0.5, duration:0.8} }
      }

    return(
        <section className="projects">
            <motion.h1
            ref={ref}
            variants={headerFromBottom}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            >My latest projects</motion.h1>
            <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="projectsShowcase">
                <motion.div variants={itemLeft} className="project">
                    <div style={{ backgroundImage: `url('${foodOrdering}')`}} className="image"></div>
                    <div className="description">
                        <h2>Food Ordering App</h2>
                        <p>landing page for restaurant with cms</p>
                        <div class="buttons">
                            <button>Github</button>
                            <button>Live preview</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={itemRight} className="project">
                <div style={{ backgroundImage: `url('${hearthstone}')`}} className="image"></div>
                <div className="description">
                    <h2>Hearthstone deck builder</h2>
                    <p>deck builder with packs opening simulator</p>
                    <div class="buttons">
                        <button>Github</button>
                        <button>Live preview</button>
                    </div>
                </div>
                </motion.div>
                <motion.div variants={itemLeft} className="project">
                <div style={{ backgroundImage: `url('${flashcards}')`}} className="image"></div>
                <div className="description">
                    <h2>Flashcards app</h2>
                    <p>creating custom flashcards and learning using them</p>
                    <div class="buttons">
                        <button>Github</button>
                        <button>Live preview</button>
                    </div>
                </div>
                </motion.div>
                <motion.div variants={itemRight} className="project">
                <div style={{ backgroundImage: `url('${photographer}')`}} className="image"></div>
                <div className="description">
                    <h2>Photographer website</h2>
                    <p>simple landing page for photographer</p>
                    <div class="buttons">
                        <button>Github</button>
                        <button>Live preview</button>
                    </div>
                </div>
                </motion.div>
            </motion.div>
        </section>
    )
}