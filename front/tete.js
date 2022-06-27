import {View,Text,StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const Tete = ({titre,navigation})=>{

    const menu = ()=>{
        navigation.openDrawer();
    }

    return(
        <View style  = {styles.head}>
            <MaterialIcons name = 'menu' size='50' onPress = {menu} style = {styles.icon} />
            <View>
                <Text style = {styles.texte}>{titre}</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    head:{
        width:'300px',
        height:'30px',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        position:'absolute',
        left:0,
        size:30
    },
    texte :{
        fontWeight:'bold',
        fontSize:20,
        letterSpacing:1,
        color:'#333'
    }
})

export default Tete;