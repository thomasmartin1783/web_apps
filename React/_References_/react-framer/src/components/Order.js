import React, { useEffect } from 'react';
import { motion } from 'framer-motion';


// Children
// staggerChildren
// Spring YOYO Oscillations
// Spring mass damping
// exit 

const variants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: .4,
      mass: .5,    //higher number heavier slower
      damping: 10,    //higher number less oscillation and quickly stops
      // *****************lower number more oscillation and 0 infinite  YOYO
      stiffness: 120,
      when: 'beforeChildren',    //done before children starts animating
      //================Staggering====================//
      staggerChildren: .25    //1s    delays each children 1s
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}


const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}


const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000);
  }, [setShowModal])

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"

      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      {pizza.toppings.map(topping => <motion.div variants={childVariants} key={topping}>{topping}</motion.div>)}
    </motion.div>
  )

}

export default Order;