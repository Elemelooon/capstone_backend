import "bootstrap/dist/css/bootstrap.min.css";
import Recipe from "./pages/recipelist";
import RandomRecipe from "./pages/randomrecipe";
import Addrecipe from "./pages/addrecipe";
import Ingredients from "./pages/addingredients";
import React from "react";
import Navigationbar from "./components/navigation";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import Details from "./pages/recipe-detail";
import Adddisplay from "./pages/addingredientdisplay";
import Instruction from "./pages/addinstruction";
import Addfilter from "./pages/addfilter";
import RandomRec from "./pages/randomrecipe2";
import AdminLogin from "./pages/login";
import AddLocation from "./pages/addlocation";
import Addrestaurant from "./pages/addrestaurants";
import RandomRestaurant from "./pages/randomrestau";
import AdminRoute from "./components/route";
function App() {
  return (
    <>
    
    {/* <BrowserRouter>
    <Navigationbar></Navigationbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Recipelist" element={<Recipe/>}></Route>
      <Route path="/RandomRecipe" element={<RandomRecipe/>}></Route>
      <Route path="/RandomRestaurant" element={<RandomRestaurant/>}></Route>
      <Route path="/Recipelist/recipedetails" element={<Details/>}></Route>
      <Route path="/AdminLogin/iXez7pmIiKnfd4FUKVPgXkmeU4loEw" element={<AdminLogin/>}></Route>
    </Routes>
    </BrowserRouter> */}

    <AdminRoute></AdminRoute>

    
    </>
  );
}

export default App;
