import React, {Component} from 'react'
import {Container, Menu} from 'semantic-ui-react'
import {Route, Switch} from "react-router-dom";
import Pizza from './components/Pizza'
import App from './App'
import './style.css'

export class Wrapper extends Component {
    render() {
        return ( 
        <> 
            <Menu fixed='top'>
                <Menu.Item name='Home' href='/kids_cookbook/'>                
                </Menu.Item>
            </Menu> 
            <Menu secondary>
                <Menu.Item position='right' secondary name='Icons by Icon8' href='https://icons8.com'>                
                </Menu.Item>
            </Menu>
        <Container > 
            <Switch>
                <Route exact path="/kids_cookbook/" component={App}/>
                <Route path="/kids_cookbook/pizza" component={Pizza}/>
                {/* <Route path="/Pancakes" component={Pancakes}/>
                <Route path="/biscuits" component={Biscuits}/>
                <Route path="/smoothie" component={Smoothie}/>
                <Route path="/ChocSmoothie" component={ChocSmoothie}/>
                <Route path="/Blank6" component={Blank6}/>
                <Route path="/Blank7" component={Blank7}/>
                <Route path="/Blank8" component={Blank8}/>
                <Route path="/Blank8" component={Blank8}/> */}
            </Switch> 
        </Container> 
        </>
        )
    }
}

export default Wrapper