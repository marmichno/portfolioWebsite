import {motion} from 'framer-motion';
import {useAnimation} from 'framer-motion';

export const SplitText = ({text}) => {

    let textArray = text.split('');

    const container = {
        hidden: {},
        show: {
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.09
          }
        }
      }

    const textAnimation = {
        hidden: {opacity:0},
        show: {opacity:1, transition:{duration:0.001}}
    }

    return(
        <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        >
            {textArray.map(value => {
                {
                return <motion.span variants={textAnimation}>{value}</motion.span>
                }
            })}
        </motion.h1>
    )
}