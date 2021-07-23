// styles that can be applied to multiple components across the pages.

import { motion } from "framer-motion";
import styled from "styled-components";


export const ButtonStyles = styled(motion.button)`
  color: white;
  padding: 10px 30px;
  font-size: 1em;
  background: transparent;
  border-radius: 10px;
  border: 1px solid white;
  margin: 40px auto 0;
  cursor: pointer;
  opacity: 0.7;
`