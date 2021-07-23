import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'



// styles
import { ButtonStyles } from '../styles'


// animations 
import { hoverPulse, liScale, pageAnimation } from '../animation'



const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="toppings container"
    >

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              variants={liScale}
              whileHover="hover"

              key={topping} onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      {
        pizza.toppings.length > 0 &&

        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: .3, type: 'spring', stiffness: 30 }}
        >
          <Link to="/order">
            <OrderButton
              variants={hoverPulse}
              whileHover="hover"
            >
              Order
          </OrderButton>
          </Link>
        </motion.div>
      }

    </motion.div>
  )
}


const OrderButton = styled(ButtonStyles)`
  box-shadow: 0px 0px 10px rgba(10,10,26,.5);
`



export default Toppings;