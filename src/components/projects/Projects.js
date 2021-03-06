import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';

import photographer from '../../resources/projects/photographerWebsite.JPG';
import flashcards from '../../resources/projects/flashcards.JPG';
import hearthstone from '../../resources/projects/hearthstone.JPG';
import foodOrdering from '../../resources/projects/foodordering.JPG';
import carCustomization from '../../resources/projects/carCustomization.JPG'


export const Projects = () => {

    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce:true
    });
    
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
            variants={headerFromBottom}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            >My latest projects</motion.h1>
            <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="projectsShowcase">
                <motion.div variants={itemRight} className="project">
                <div style={{ backgroundImage: `url('${carCustomization}')`}} className="image"></div>
                <div className="description">
                    <h2>Car customizaton</h2>
                    <p>car configuration width 3d models</p>
                    <div class="buttons">
                        <a href="https://github.com/marmichno/carCustomization" target="_blank"><button>Github</button></a>
                        <button>Live preview</button>
                    </div>
                </div>
                </motion.div>
                <motion.div variants={itemLeft} className="project">
                    <div style={{ backgroundImage: `url('${foodOrdering}')`}} className="image"></div>
                    <div className="description">
                        <h2>Food Ordering App</h2>
                        <p>landing page for restaurant with cms</p>
                        <div class="buttons">
                            <a href="https://github.com/marmichno/foodOrdering" target="_blank"><button>Github</button></a>
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
                        <a href="https://github.com/marmichno/hearthstoneAPI" target="_blank"><button>Github</button></a>
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
                        <a href="https://github.com/marmichno/flashcards" target="_blank"><button>Github</button></a>
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
                        <a href="https://github.com/marmichno/photographerWebsite" target="_blank"><button>Github</button></a>
                        <a href="https://marmichno.github.io/photographerWebsite/" target="_blank"><button>Live preview</button></a>
                    </div>
                </div>
                </motion.div>
            </motion.div>
        </section>
    )
}