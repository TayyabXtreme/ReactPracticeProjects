import React from 'react'
import { motion } from 'framer-motion'
const App = () => {
  
  return (
    <div>
      <motion.div
      drag

      dragConstraints={{
        top:0,
        left:0,
        right:400,
        bottom:500
      }}

      dragDirectionLock={true}

      whileHover={{
        backgroundColor: 'royalBlue',
      }}

      whileDrag={{
        scale:0.9
      }}
      id="box">

      </motion.div>
    </div>
  )
}

export default App