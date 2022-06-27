import React from 'react'; 
import {View,Text,StyleSheet} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Tete from './tete'

class Apropos extends React.Component{
    render(){
        return(
            <View style={style.v1}>
                <View style={style.v2}><Text style={style.t1}>Ici le texte a propos de notre application</Text></View>
            </View>
        )
    }
}

const ecrans = {
    A_props:{
        screen:Apropos,
        navigationOptions: ({navigation})=> {
            return{
                headerTitle:()=>{
                    return <Tete navigation = {navigation} titre = "A propos de l'application" />
                }
            }
        }
    },
}

const Navigation = createStackNavigator(ecrans,{
    defaultNavigationOptions:{
        headerStyle:{backgroundColor:"#464965", height:40}
    }
});

export default createAppContainer(Navigation);

const style = StyleSheet.create({
    v1:{
        backgroundColor:"#07080d",
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },
    v2:{
        backgroundColor:"#464965",
        alignItems:'center',
        width:'97%',
        marginBottom:3
    },
    t1:{
        fontWeight:'bold',
        fontSize:15,
        letterSpacing:1,
        color:'#333'
    }
})