 import {View,TouchableOpacity,ScrollView,Text,Button,StyleSheet,ImageBackground, TouchableNativeFeedbackBase} from 'react-native'
import {Component} from 'react'
import {MaterialIcons} from '@expo/vector-icons';
import axios from 'axios'

export default class Liste extends Component{
    constructor(props){
        super(props);
        const chorale = this.props.navigation.getParam('chorale');
        this.state = {
            songs:{
                lumiere:this.props.navigation.getParam('lumiere'),
                maman:this.props.navigation.getParam('maman'),
                ecodim:this.props.navigation.getParam('ecodim'),
            },
            info:{
                chorale:chorale,
            },
        }
        
    }
    render(){
        if(this.state.info.chorale == "lumiere"){
        
            return(                
                
                <View  style={{backgroundColor:"#07080d",height:'100%'}}>
                    <View style={style.v1}>
                        <ScrollView>
                            {
                                this.state.songs.lumiere.map((val)=>(
                                    
                                        <TouchableOpacity
                                            onPress={()=>{
                                                this.state.info['song']=val;
                                                this.props.navigation.navigate("Song",this.state.info);
                                            }}
                                        >
                                            <View style={style.v2}>
                                                <Text style={style.t1}>{val.titre}</Text>
                                                <Text style={style.t2}>{val.auteur}</Text>
                                            </View>
                                            
                                        </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
                           
            )
        }
        if(this.state.info.chorale == "maman"){
            return(
                
                <View  style={{backgroundColor:"#07080d",height:'100%'}} >
                <View style={style.v1} >
                    <ScrollView>
                        {
                            this.state.songs.maman.map((val)=>(
                                
                                    <TouchableOpacity
                                        onPress={()=>{
                                            this.state.info['song']=val;
                                            this.props.navigation.navigate("Song",this.state.info);
                                        }}
                                    >
                                        <View style={style.v2}>
                                            <Text style={style.t1}>{val.titre}</Text>
                                            <Text style={style.t2}>{val.auteur}</Text>
                                        </View>
                                        
                                    </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
                </View>
            
            
            )
        }
        if(this.state.info.chorale == "ecodim"){
            return(
                <View  style={{backgroundColor:"#07080d",height:'100%'}} >
                    <View style={style.v1}>
                    <ScrollView>
                        {
                            this.state.songs.ecodim.map((val)=>(
                                
                                    <TouchableOpacity
                                        onPress={()=>{
                                            this.state.info['song']=val;
                                            this.props.navigation.navigate("Song",this.state.info);
                                        }}
                                    >
                                        <View style={style.v2}>
                                            <Text style={style.t1}>{val.titre}</Text>
                                            <Text style={style.t2}>{val.auteur}</Text>
                                        </View>
                                        
                                    </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                    </View>
            </View>
                
                
            )
        }
    }
}

const style = StyleSheet.create({
    v1:{
        backgroundColor:"#07080d",
        // flex:1,
        // justifyContent:'flex-start',
        // alignContent:'center',
        // alignItems:'center',
        width:'100%',
        height:'23%'
    },
    v2:{
        backgroundColor:"#464965",
        flexDirection:'column',
        justifyContent:'space-between',
        // backgroundColor:'rgba(150,150,0,0.8)',
        // alignItems:'center',
        width:'100%',
        height:'30px',
        marginBottom:1,
    },
    t1:{
        fontWeight:'bold',
        // fontStyle:'italic',
        fontSize:12,
        letterSpacing:1,
        color:'#FFF'
    },
    t2:{
        // fontWeight:'bold',
        fontStyle:'italic',
        fontSize:8,
        letterSpacing:1,
        color:'#FFF'
    }
})
