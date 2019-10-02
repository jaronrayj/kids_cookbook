import React, {Component} from 'react'
import {Container, Menu} from 'semantic-ui-react'
import {Route, Switch} from "react-router-dom";
import App from './App'

export class Wrapper extends Component {
    render() {
        return ( 
        <> 
            <Menu fixed='top'>
                <Menu.Item name='Home' href='/'>                
                </Menu.Item>
            </Menu> 
        <Container > 
            <Switch>
                <Route path="/" component={App}/>
                {/* <Route path="/Pancakes" component={Pancakes}/>
                <Route path="/pizza" component={Pizza}/>
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