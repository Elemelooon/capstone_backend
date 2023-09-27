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
import Login from "./pages/login";
import AddLocation from "./pages/addlocation";
import Addrestaurant from "./pages/addrestaurants";
import RandomRestaurant from "./pages/randomrestau";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navigationbar></Navigationbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Recipelist" element={<Recipe/>}></Route>
      <Route path="/RandomRecipe" element={<RandomRecipe/>}></Route>
      <Route path="/RandomRestaurant" element={<RandomRestaurant/>}></Route>
      <Route path="/9YCKPnFPeixgyLzAddrecipegLlk4jvYcrbGT20" element={<Addrecipe/>}></Route>
      <Route path="/DwyecEawUeQV2UNAddingredientU4JI6zE5oYgZySI" element={<Ingredients/>}></Route>
      <Route path="/Y5nbl5gHIGAnnflAdddisplaypO2Tl6OTkF86ZAY" element={<Adddisplay/>}></Route>
      <Route path="/LMqoY3cd3FPOX0uAddinstructionR6HeUssZSr8I9Ua" element={<Instruction/>}></Route>
      <Route path="/zNCEg2HVmzcFjSmAddfilteruTb5p2ERR1XQ3Nb" element={<Addfilter/>}></Route>
      <Route path="/1F62zkfUvvRANjiAddlocationQ6Ih1Vg1824qPNI" element={<AddLocation/>}></Route>
      <Route path="/5gHPK5qvt5wdUWuAddrestaurantRtxEmhFlHxLqOaF" element={<Addrestaurant/>}></Route>
      <Route path="/Recipelist/recipedetails" element={<Details/>}></Route>
      <Route path="/AdminLogin/iXez7pmIiKnfd4FUKVPgXkmeU4loEw" element={<Login/>}></Route>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
