import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"
import image from '../img/c1.png'
import {BiMinus, BiPlus} from 'react-icons/bi'
import { useStateValue } from "../context/stateProvider";
import { actionType } from "../context/reducer";


const CartItems = ({item}) => {

    const [quantity, setquantity] = useState(1);
    const [items, setItems] = useState([]);
    const [{cartItems}, dispatch] = useStateValue()

    const cartDispatch = () => {
        localStorage.setItem("cartItems", JSON.stringify(items));
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        })
    }
    const updateQuantity = (action, id) => {
        if(action === "add") {
            setquantity(quantity + 1);
            cartItems.map((item) => {
                if(item.id === id) {
                    item.quantity += 1
                }
                
            });
            cartDispatch();
        
        }
        else{
            setquantity(quantity - 1);
            cartItems.map((item) => {
                if(item.id === id) {
                    item.quantity -= 1;
                }
            });
            cartDispatch();
        }

        }
        
  

    useEffect(() => {
        setItems(cartItems)
    }, [quantity]);
    
  return (
    <div key={item.id} className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
        <img src={item?.imageURL} alt="" className="w-20 h-20 max-w-[60px] rounded-full object-contain"/>
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