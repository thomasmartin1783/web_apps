import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


// animations 
import { pageAnimation } from '../animation'
import Loader from './Loader'

// hover 
// YOYO
// exit    ---->   switch location AnimatePresence on App.js

const hoverPulse = {
  hover: {
    scale: 1.02,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",

    transition: {
      duration: .3,
      yoyo: Infinity
    }
  }
}


const fadeInZoom = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: .7,
      delay: 1
    }
  },
}



const Home = () => {
  return (
    <motion.div
      variants={fadeInZoom}
      initial="hidden"
      animate="visible"
      exit={{
        x: '-100vw',
        transition: {
          ease: 'easeInOut'
        }
      }}
      className="home container"
    >
      <motion.h2>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={hoverPulse}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;