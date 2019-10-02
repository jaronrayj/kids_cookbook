import React, {Component} from 'react'
import { Header, Progress, Divider, Image, Button } from 'semantic-ui-react';

export default function Pizza (){


        return(
            <>
                <Progress className='progress' percent="20" indicating />
                <Header size='large'>
                    Pizza, Pizza, Pizza!!
                </Header>
                <Divider />
                <Header>
                    1. Oven
                </Header>
                <Image centered src='https://img.icons8.com/officel/200/000000/cooker.png' /> 
                <Button size='huge' onClick>Done!</Button>
                <Divider />
                <Header>
                    2. Dough
                </Header>
                <Image centered src='https://img.icons8.com/officel/200/000000/bread.png' /> 
                <Button size='huge' onClick>Done!</Button>
                <Divider />
                <Header>
                    3. Sauce
                </Header>
                <Image centered src='https://img.icons8.com/officel/200/000000/ketchup.png' /> 
                <Button size='huge' onClick>Done!</Button>
                <Divider />
                <Header>
                    4. Cheese
                </Header>
                <Image centered src='https://img.icons8.com/officel/200/000000/cheese.png' /> 
                <Button size='huge' onClick>Done!</Button>
                <Divider />
                <Header>
                    5. Bacon
                </Header>
                <Image centered src='https://img.icons8.com/officel/200/000000/bacon.png' /> 
                <Button size='huge' onClick>Done!</Button>
                <Divider />
                <Header>
                    6. Tomato
                </Header>
                <Image centered src='https://img.icons8.com/officel/200/000000/tomato.png' /> 
                <Button size='huge' onClick>Done!</Button>
                <Divider />
                <Header>
                    7. Anything Else?
                </Header>
                <Image centered src='https://img.icons8.com/officel/200/000000/question-mark.png' /> 
                <Button size='huge' onClick>Done!</Button>
                <Divider />
                <Header>
                    8. Cook!
                </Header>
                <Image centered src='https://img.icons8.com/officel/200/000000/cooker.png' /> 
                <Button size='huge' onClick>Done!</Button>
                <Divider />
                <Header>
                    9. Cut
                </Header>
                <Image centered src='https://img.icons8.com/officel/200/000000/pizza-cutter--v2.png' /> 
                <Button size='huge' onClick>Done!</Button>
                <Divider />
                <Header>
                    10. Eat
                </Header>
                <Image centered src='https://img.icons8.com/officel/300/000000/pizza.png' />
                <Button size='huge' onClick>Done!</Button>
                <Divider />
            </>
        );
    }

