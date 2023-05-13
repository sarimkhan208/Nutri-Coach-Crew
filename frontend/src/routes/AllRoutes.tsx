import {Routes,Route} from 'react-router-dom'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import {Chat} from '../pages/Chat'
import Homepagebody from '../components/Homepagebody'
import Dashboard from '../pages/Dashboard'
import Recipes from '../components/Recipes'

export default function AllRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Homepagebody/>} ></Route>
            <Route path='/signin' element={<Signin/>} ></Route>
            <Route path='/signup' element={<Signup/>} ></Route>
            <Route path='/chat' element={<Chat/>} ></Route>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/recipes' element={<Recipes/>}/>
        </Routes>
    )
}