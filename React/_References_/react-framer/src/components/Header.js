import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';


const svgVariants = {
  hidden: {
    rotate: -180
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    }
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }

}


const Header = () => {

  const location = useLocation()

  return (
    <header>
      <motion.div
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={.7}

        // =========================================================//
        //  Animation runs everytime url changes
        //  Everytime the animation will trigger since the key is unique
        //  and element is always created
        // =========================================================//


        key={location.key}


        // ========================================================//


        className="logo">
        <motion.svg
          variants={svgVariants}
          initial="hidden"
          animate="visible"

          className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <div className="title">
        <Link to="/">
          <motion.h1
            initial={{ y: '-50vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 30 }}
          >Pizza Joint</motion.h1>
        </Link>
      </div>
    </header>
  )
}

export default Header;