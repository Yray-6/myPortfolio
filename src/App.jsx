import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Cursor from "./components/Cursor";
import Sidebar from "./components/Sidebar/Sidebar";
import Portfolio from "./components/Portfolio";
import { Route,createBrowserRouter, createRoutesFromElements,RouterProvider } from "react-router-dom";
import HeroMain from "./components/HeroMain.jsx";

const App = () => {

  const [theme,setTheme] = useState("light");

  useEffect(
    ()=>{
      if(theme==="dark"){
        document.documentElement.classList.add("dark");
      }
      else{
        document.documentElement.classList.remove("dark");
      }
    },[theme]
  )

  const handleChange =()=>{
    setTheme(theme==="dark"? "light": "dark");
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Sidebar />}>
        <Route index element={<HeroMain/>} />
        <Route path="Portfolio" element={<Portfolio/>} />
      </Route>
    )
  )
  return (
    <div className=" relative bg-bgs dark:bg-white text-gray-300 dark:text-black">
      <Cursor/>
        <RouterProvider router={router} />
    </div>
  );
};

export default App;
