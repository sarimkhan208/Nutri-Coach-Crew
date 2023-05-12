import {Routes,Route} from 'react-router-dom'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

export default function AllRoutes(){
    return (
        <Routes>
            <Route path='/signin' element={<Signin/>} ></Route>
            <Route path='/signup' element={<Signup/>} ></Route>
        </Routes>
    )
}