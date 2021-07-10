import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../home/Home'

export default function Router(){
return(
    <BrowserRouter>
    <Switch>
    <Route exact path={'/'}>
        <Home />
    </Route>
    <Route exact path={'/delivery'}></Route>
    </Switch>
    </BrowserRouter>
)
}