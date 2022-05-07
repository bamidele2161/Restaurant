import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import I1 from '../img/i1.png'
import heroData from "../utils/data"


const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
    
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
    <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
      <p className="text-base text-orange-500 font-semibold">
        Bike Delivery
      </p>
      <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
        <img
          src={Delivery}
          className="w-full h-full object-contain"
          alt="delivery"
        />
      </div>
    </div>

    <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
    The Fastest Delivery in
    <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
      Your City
    </span>
  </p>

  <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
    eaque fugit distinctio est nam voluptatum architecto, porro iusto
    deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
    suscipit!
  </p>

  <button
    type="button"
    className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
  >
    Order Now
  </button>
      </div>

      
      
      <div className="py-2 flex-1 flex items-center relative">
        <img src={HeroBg} alt="hero-bg" className="ml-auto lg:w-auto h-370 w-full lg:h-650" />
         <div className="w-full h-full absolute flex top-0 left-0 items-center gap-4 flex-wrap justify-center py-4 lg:px-32">
            {
                heroData && heroData.map(n => (
                    <div key={n.id} className="lg:w-190  min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                <img src={n.avatar} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="homeAvatar" />
                <p className="lg:text-xl text-base font-semibold text-textColor lg:mt-4 mt-2">{n.name}</p>
                <p className="text-[12px] lg:text-sm font-semibold text-lightTextGray my-1 lg:my-3">{n.desc}</p>
                <p className="text-sm font-semibold text-headingColor">
                    <span className="text-sm text-red-600">$</span>{n.price}
                </p>
            </div>
                ))
            }
            
         </div>
      </div>

    </section>
  )
}

export default HomeContainer