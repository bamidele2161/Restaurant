import { AnimatePresence } from "framer-motion";
import React, {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import { Header, MainContainer, CreateContainer} from './components';
import { actionType } from "./context/reducer";
import { useStateValue } from "./context/stateProvider";
import { getAllFoodItems } from "./utils/firebaseFunction";


const App = () => {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOT_ITEMS,
        foodItems: data,
      })
    });
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="w-full mt-14 md:mt-20 md:px-16 py-4 px-4">
          <Routes>
            <Route path="/*" element={<MainContainer/>} />
            <Route path="/createItem" element={<CreateContainer/>} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
