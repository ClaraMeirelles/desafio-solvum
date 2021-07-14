import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Stores from '../pages/stores/Stores'
import ProductsPage from '../pages/productspage/ProductsPage'

export default function Router(){
return(
    <BrowserRouter>
    <Switch>
    <Route exact path={'/'}>
        <Home />
    </Route>
    <Route exact path={'/delivery'}></Route>
    <Route exact path={'/encontre-uma-loja'}>
    <Stores />
    </Route>
    <Route exact path={'/produtos'}>
    <ProductsPage />
    </Route>
    </Switch>
    </BrowserRouter>
)
}