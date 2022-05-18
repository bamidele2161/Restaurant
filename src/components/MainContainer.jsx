import React, { useState, useEffect } from 'react'
import HomeContainer from "./HomeContainer"
import { motion } from "framer-motion"
import {MdChevronLeft, MdChevronRight } from "react-icons/md"
import RowContainer from "./RowContainer"
import { useStateValue } from "../context/stateProvider";
import MenuContainer from "./MenuContainer"
import CartContainer from "./CartContainer"

const MainContainer = () => {
  const [{ foodItems, cartShow},  dispatch] = useStateValue();
  const [scrollValue, setscrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow])
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />

      <section className="w-full ">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before-left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600transition ease-in-out duration-100">Our fresh & healthy fruits</p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div 
              whileTap={{scale: 0.75}}
              className="w-8 h-8 rounded-lg bg-orange-300 flex items-center justify-center duration-100 transition ease-in-out hover:shadow-lg cursor-pointer hover:bg-orange-500" onClick={() => setscrollValue(-200)}>
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div 
              whileTap={{scale: 0.75}} 
              className="w-8 h-8 rounded-lg bg-orange-300 flex items-center justify-center duration-100 transition ease-in-out hover:shadow-lg cursor-pointer hover:bg-orange-500" onClick={() => setscrollValue(200)}>
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue} flag={true} data={
          foodItems?.filter((n) => n.category === "fruits")
        }/>
      </section>
      <section>
      <MenuContainer />
      </section>
      {
        cartShow && <CartContainer />
      }
    </div>
  )
}

export default MainContainer