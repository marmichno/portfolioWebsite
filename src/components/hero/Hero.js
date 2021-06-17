import {motion} from 'framer-motion';

export const HeroSection = () => {

    const container = {
        hidden: {},
        show: {
          transition: {
            when: "beforeChildren"
          }
       }
    }

    const bottomContent = { 
        hidden: { opacity: 0, y:"10vh"},
        show: {opacity: 1, y:0, transition: { duration: 1, delay:1}}
    }

    return(
        <section className="hero">
            <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="content">
                <motion.h1 variants={bottomContent}>Hello, my name is Marcin</motion.h1>
                <motion.p variants={bottomContent}>Im a self taught front end developer who enjoyes to create unforgetful user experience.</motion.p>
                <motion.div variants={bottomContent} class="buttons">
                    <button>Contact me</button><button>Resume</button><button>Github profile</button>
                </motion.div>
            </motion.div>
        </section>
    )
}