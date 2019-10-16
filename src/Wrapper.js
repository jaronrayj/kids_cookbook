import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { Route, Switch, Link } from "react-router-dom";
import Pizza from './components/Pizza'
import Biscuit from './components/Biscuit'
import App from './App'
import './style.css'

class Wrapper extends Component {
    render() {
        return (
            <>
                <Menu size='huge' fixed='top'>
                    <Link to='/'>
                        <Menu.Item name='Home'>
                        </Menu.Item>
                    </Link>
                </Menu>
                <Menu secondary>
                    <Menu.Item position='right' name='Icons by Icon8' href='https://icons8.com'>
                    </Menu.Item>
                </Menu>
                <Container >
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/pizza" component={Pizza} />
                        <Route path="/biscuits" component={Biscuit} />
                        {/* <Route path="/Pancakes" component={Pancakes}/>
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