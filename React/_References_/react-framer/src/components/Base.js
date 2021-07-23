import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



// animations
import { hoverPulse } from '../animation';



const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', delay: .4, stiffness: 120 }}
      exit={{
        x: '-100vw',
        transition: {
          ease: 'easeInOut'
        }
      }}
      className="base container"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: .3, type: 'spring', stiffness: 30 }}
          className="next"
        >
          <Link to="/toppings">
            <motion.button
              variants={hoverPulse}
              whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;