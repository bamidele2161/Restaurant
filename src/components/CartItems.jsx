import React, {useState} from 'react'
import { motion } from "framer-motion"
import image from '../img/c1.png'
import {BiMinus, BiPlus} from 'react-icons/bi'
import { useStateValue } from "../context/stateProvider";


const CartItems = ({item}) => {

    const [quantity, setquantity] = useState(1);
    const [{cartItems}, dispatch] = useStateValue()

    const updateQuantity = (action, id) => {
        if(action == "add") {
            setquantity(quantity + 1);
        
        }
    }
  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
        <img src={image?.imageURL} alt="" className="w-20 h-20 max-w-[60px] rounded-full object-contain"/>
        <div className="flex flex-col gap-2">
            <p className="text-base text-gray-50">{item?.title}</p>
            <p className="text-sm block text-gray-300 font-semibold">${parseFloat(item?.price * quantity)}</p>
        </div>
        <div className="group flex items-center gap-2 ml-auto cursor-pointer">
            <motion.div whileTap={{scale: 0.57}} onClick={() =>  updateQuantity("remove", item?.id)}>
                <BiMinus className="text-gray-50" />
            
            </motion.div>
            <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">{quantity}</p>

            <motion.div whileTap={{scale: 0.57}} onClick={() =>  updateQuantity("add", item?.id)}>
                <BiPlus className="text-gray-50" />
            
            </motion.div>
        </div>
    </div>
  )
}

export default CartItems