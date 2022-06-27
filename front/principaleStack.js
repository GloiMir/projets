import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; 
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {createStackNavigator} from '@react-navigation/stack';
import accueil from './accueil';
import liste from './liste';
import song from './song';
import Tete from './tete';


const ecrans = {
    Accueil:{
        screen:accueil,
        navigationOptions: ({navigation})=> {
            return{
                headerTitle:()=>{
                    return <Tete navigation = {navigation} titre = "Accueil de l'application" />
                }
            }
        }
    },
    Liste:{
        screen:liste,
    },
    Song:{
        screen:song,
    },
}

const Navigation = createStackNavigator(ecrans,{
    defaultNavigationOptions:{
        headerStyle:{backgroundColor:"#464965", height:40}
    }
});

export default createAppContainer(Navigation);

// const stack = createStackNavigator();
// class Navig extends React.Component{
//     render(){
//         <NavigationContainer>
//             <stack.Navigation>
//                 <stack.Screen
//                     name = "Cours1"
//                     component = {Cours1}
//                  />
//             </stack.Navigation>
//             <stack.Navigation>
//                 <stack.Screen
//                     name = "discussion1"
//                     component = {Discussion1}
//                  />
//             </stack.Navigation>
//         </NavigationContainer>
//     }
// }

// export default Navig;