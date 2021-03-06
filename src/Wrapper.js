import React from 'react'
import { Container, Menu, Image } from 'semantic-ui-react'
import { Route, Switch, Link } from "react-router-dom";
import chef from "./images/chef.png"
import Pizza from './components/Pizza'
import Biscuit from './components/Biscuit'
import FruitSmoothie from './components/FruitSmoothie'
import Rice from './components/Rice'
import Pancake from './components/Pancake'
import PBandJ from './components/PBandJ'
import Cookies from './components/Cookies'
import Spaghetti from './components/Spaghetti'
import Marinara from './components/Marinara'
import App from './App'
import './style.css'

function Wrapper() {

    return (
        <>
            <Menu inverted color='teal' size='huge' fixed='top'>
                <Image src={chef} />
                <Link to='/'>
                    <Menu.Item active header>Kids Cookbook</Menu.Item>
                </Link>
                {/* <Menu.Item size='large' position='right' >Kids Cookbook</Menu.Item> */}
            </Menu>
            <Menu secondary >
                <Menu.Item position='right' name='Icons by Icon8' href='https://icons8.com'>
                </Menu.Item>
            </Menu>
            <Container >
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/pizza" component={Pizza} />
                    <Route path="/biscuits" component={Biscuit} />
                    <Route path="/smoothie" component={FruitSmoothie} />
                    <Route path="/rice" component={Rice} />
                    <Route path="/pancakes" component={Pancake} />
                    <Route path="/pbandj" component={PBandJ} />
                    <Route path="/spaghetti" component={Spaghetti} />
                    <Route path="/marinara" component={Marinara} />
                    <Route path="/cookies" component={Cookies} />
                    {/* <Route path="/Pancakes" component={Pancakes}/>
                <Route path="/ChocSmoothie" component={ChocSmoothie}/>
                <Route path="/Blank8" component={Blank8}/> */}
                </Switch>
            </Container>
        </>
    )

}

export default Wrapper