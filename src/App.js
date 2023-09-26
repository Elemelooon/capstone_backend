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
function App() {
  return (
    <>
    <BrowserRouter>
    <Navigationbar></Navigationbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Recipelist" element={<Recipe/>}></Route>
      <Route path="/RandomRecipe" element={<RandomRecipe/>}></Route>
      <Route path="/RandomRec" element={<RandomRec/>}></Route>
      <Route path="/Addrecipe" element={<Addrecipe/>}></Route>
      <Route path="/Addingredient" element={<Ingredients/>}></Route>
      <Route path="/Adddisplay" element={<Adddisplay/>}></Route>
      <Route path="/Addinstruction" element={<Instruction/>}></Route>
      <Route path="/Addfilter" element={<Addfilter/>}></Route>
      <Route path="/Recipelist/recipedetails" element={<Details/>}></Route>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
