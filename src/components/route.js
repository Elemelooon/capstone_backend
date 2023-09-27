import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminNav from './adminnavbar';
import Protected from './protected';
import AddLocation from '../pages/addlocation';
import Adddisplay from '../pages/addingredientdisplay';
import Addfilter from '../pages/addfilter';
import Addrecipe from '../pages/addrecipe';
import Addrestaurant from '../pages/addrestaurants';
import Instruction from '../pages/addinstruction';
import Ingredients from '../pages/addingredients';
import AdminLogin from '../pages/login';

const AdminRoute = () => {
    return ( 
        <>
        <BrowserRouter>
        
        <Routes>
        <Route path="/Addrecipe" element={<Protected Component={Addrecipe}/>}></Route>
        <Route path="/Addingredient" element={<Protected Component={Ingredients}/>}></Route>
        <Route path="/Adddisplay" element={<Protected Component={Adddisplay}/>}></Route>
        <Route path="/Addinstruction" element={<Protected Component={Instruction}/>}></Route>
        <Route path="/Addfilter" element={<Protected Component={Addfilter}/>}></Route>
        <Route path="/AddLocation" element={<Protected Component={AddLocation}/>}></Route>
        <Route path="/Addrestaurant" element={<Protected Component={Addrestaurant}/>}></Route>
        <Route path="/AdminLogin/iXez7pmIiKnfd4FUKVPgXkmeU4loEw" element={<AdminLogin/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default AdminRoute;