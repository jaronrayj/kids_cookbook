import React, {Component} from 'react'
import { Header, Progress, Divider, Image } from 'semantic-ui-react';

export default function Pizza (){


        return(
            <>
                <Header size='large'>
                    Pizza, Pizza, Pizza!!
                </Header>
                <Divider />
                <Progress fixed percent="20" indicating />
                <Divider />
                <span>
                    Dough
                </span>
                <Image className="lefty" src='https://img.icons8.com/officel/150/000000/bread.png' /> 
                <Image centered src='https://img.icons8.com/officel/120/000000/pizza.png' />
            </>
        );
    }

