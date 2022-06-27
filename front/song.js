import {View,ScrollView,Text,StyleSheet} from 'react-native'
import {Component} from 'react'

export default class Song extends Component{
    constructor(props){
        super(props);
        const song = this.props.navigation.getParam('song')
        this.state = {
            song:song
        }
    }
    render(){
        return(
            <View style={style.v1}>
                
                <View style={style.v2}>
                    
                        {/* <View style={{justifyContent:'space-between',flexDirection:'column'}}> */}
                            <Text style={style.t1}>{this.state.song.titre}</Text>                            
                            <Text style={style.t2}>{this.state.song.auteur}</Text>
                        {/* </View>    */}
                                        
                </View>                
                <View style={style.v3}>
                    <ScrollView>
                        <View >
                            <Text style={style.t3}>{this.state.song.contenu}</Text>
                        </View>
                        
                    </ScrollView>                    
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    v1:{
        // backgroundColor:"#3F424D",
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },
    v2:{
        flex:1,
        backgroundColor:"#6767ff",
        justifyContent:'space-around',
        // alignItems:'center',
        width:'100%',
        height:'9%',
        // marginBottom:3
    },
    v3:{
        
        backgroundColor:"#07080d",
        alignItems:'center',
        width:'100%',
        height:'91%',
        // marginBottom:3
    },
    t1:{
        width:290,
        fontWeight:'bold',
        fontSize:15,
        letterSpacing:1,
        color:'#fff',
        marginTop:5
    },
    t2:{
        width:290,
        // fontWeight:'bold',
        fontStyle:'italic',
        fontSize:10,
        letterSpacing:1,
        color:'#fff'
    },
    t3:{
        width:310,
        // fontWeight:'italic',
        fontSize:15,
        letterSpacing:1,
        color:'#fff',
        marginTop:10,
        marginLeft:5,
    }
})