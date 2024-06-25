import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { Home } from './Pages/Home'
import { Checkout } from './Pages/Checkout'
import { Success } from './Pages/Sucess'

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/checkout/:orderId/success' element={<Success />}/>
            </Route>
        </Routes>
    )
}