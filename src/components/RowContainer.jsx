import React, {useEffect, useRef, useState} from 'react'
import {MdShoppingBasket} from 'react-icons/md'
import {motion} from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from "../context/stateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({flag, data, scrollValue}) => {
    const rowContainer = useRef()
    const [items, setitems] = useState([]);

    const [{cartItems}, dispatch] = useStateValue()
    const addToCart = (item) => {
        setitems([...cartItems, item])
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };
;
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue])

    // useEffect(() => {
    //     addToCart();
    //   }, [items]);

  return (
    <div ref={rowContainer} className={`w-full my-12 flex items-center scroll-smooth ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`} >
        { 
            data && data.length > 0 ? (data.map((item) => (
                <div key={item.id} className="w-300 min-w-[300px] md:w340 md:min-w-[340px] my-12 md:w-340 backdrop-blur-lg p-2 hover:drop-shadow-lg bg-gray-100 rounded-lg h-[220px] flex flex-col items-center justify-between" > 
                    <div className="w-full flex items-center justify-between">
                        <motion.div  
                            whileTap={{scale: 1.2 }}
                            className="w-40 h-40 -mt-8 drop-shadow-xl"
                            alt=""
                        >
                            <img 
                                src={item?.imageURL}
                                className="w-full h-full object-contain"
                                alt=""
                            />
                        </motion.div>


                        <motion.div 
                            whileTap={{scale: 0.75}}
                            className="w-8 h-8 rounded-full cursor-pointer hover:shadow-md bg-red-600 flex items-center justify-center" onClick={() => addToCart(item)}>
                            <MdShoppingBasket className="text-white" />
                        </motion.div>
                    </div>
                    <div className="w-full flex items-end justify-end flex-col">
                        <p className="text-textColor font-semibold text-base md:text-lg">{item.title}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.calories}</p>
                        <div className="flex items-center gap-8">
                            <p className="text-lg text-headingColor font-semibold">
                                <span className="text-red-600">$</span> {item?.price}
                            </p>
                        </div>
                    </div>
                </div>
            )) ): (<div className="w-full flex flex-col items-center justify-center">
                <img src={NotFound} alt="" className="h-340"/>
                <p>Items Not Available</p>
            </div>)
        }
    </div>
  )
}

export default RowContainer