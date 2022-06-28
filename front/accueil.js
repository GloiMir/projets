import {View,TouchableOpacity,Text,Image,ImageBackground,StyleSheet} from 'react-native'
import {Component} from 'react'
// import axios from 'axios'

export default class Accueil extends Component{
    constructor(props){
        super(props);
        this.state = {
            chants:false,
            accueil:true,
            reglages:false,
            lumiere:[{'titre':"En toi j'ai trouvé",'auteur':"Soeur Shany",'contenu':"En toi j'ai trouvé...."},{'titre':"En toi j'ai trouvé",'auteur':"Soeur Shany",'contenu':"En toi j'ai trouvé...."}],
            maman:[],
            ecodim:[],
        } 
    }

    render(){
        if(this.state.chants==true){
            return(                                
                <ImageBackground source={require('../assets/appFO1.png')} style={{height:'100%',width:'100%'}}>
                    <View style={style.v1}>
                    <View style={{backgroundColor:"#6767ff",flexDirection:'row',justifyContent:'space-around',alignContent:'center',alignItems:'center',width:'80%',height:'8%',borderRadius:10,position:'absolute',top:15}}>
                        <TouchableOpacity onPress={()=>{this.setState({accueil:true,chants:false})}} style={{backgroundColor:'#07080d',borderRadius:5}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Chants</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({accueil:true,chants:false})}} style={{backgroundColor:'#464965',borderRadius:5}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Accueil</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({reglages:true,chants:false})}} style={{backgroundColor:'#464965',borderRadius:5}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Reglages</Text></TouchableOpacity>
                    </View>
                    <View style={{height:'40%',width:'80%',justifyContent:'space-evenly'}}>
                    <TouchableOpacity
                        onPress={
                            ()=>{
                                this.state['chorale'] = "lumiere";
                                // axios.put("http://127.0.0.1:8080/accueil/lumiere");
                                // axios.put("http://127.0.1:8080/accueil/lumiere").then((response)=>{        
                                    // this.setState({lumiere:response.data})
                                    this.setState({lumiere:{'titre':"En toi j'ai trouvé",'auteur':"Soeur Shany",'contenu':"En toi j'ai trouvé...."}})
                                    this.props.navigation.navigate("Liste",this.state)
                                // })
                                
                            }
                        }
                    >
                        <View style={style.v2}>
                            <Text style={style.t1}>Chansons de la chorale lumiere</Text>
                        </View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={
                            ()=>{
                                // this.state['chorale'] = "maman"
                                // axios.put("http://127.0.0.1:8080/accueil/maman");
                                // axios.put("http://127.0.1:8080/accueil/maman").then((response)=>{        
                                //     this.setState({maman:response.data})
                                //     this.props.navigation.navigate("Liste",this.state)
                                // })
                            }
                        }
                    >
                        <View style={style.v2}>
                            <Text style={style.t1}>Chansons de la chorale des mamans</Text>
                        </View>
                        
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={
                            ()=>{
                                // this.state['chorale'] = "ecodim"
                                // axios.put("http://127.0.0.1:8080/accueil/ecodim");
                                // axios.put("http://127.0.1:8080/accueil/ecodim").then((response)=>{        
                                //     this.setState({ecodim:response.data})
                                //     this.props.navigation.navigate("Liste",this.state)
                                // })
                            }
                        }
                    >
                        <View style={style.v2}>
                            <Text style={style.t1}>Chansons de la chorale de l'ecole de dimanche</Text>
                        </View>
                    
                    </TouchableOpacity>
                    </View>
                    </View>
                </ImageBackground>            
            )
        }
        if(this.state.accueil==true){
            return(                                
                <ImageBackground source={require('../assets/appFO1.png')} style={{height:'100%',width:'100%'}}>
                    <View style={style.v1}>
                        <View style={{backgroundColor:"#6767ff",flexDirection:'row',justifyContent:'space-around',alignContent:'center',alignItems:'center',width:'80%',height:'8%',borderRadius:10,position:'absolute',top:15}}>
                            <TouchableOpacity onPress={()=>{this.setState({chants:true,accueil:false})}} style={{backgroundColor:'#464965',borderRadius:5}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Chants</Text></TouchableOpacity>
                            <TouchableOpacity onPress={()=>{this.setState({accueil:true})}} style={{backgroundColor:"#07080d",borderRadius:5}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Accueil</Text></TouchableOpacity>
                            <TouchableOpacity onPress={()=>{this.setState({reglages:true,accueil:false})}} style={{backgroundColor:'#464965',borderRadius:5}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Reglages</Text></TouchableOpacity>
                        </View>
                        <View style={{height:'60%',width:'90%',justifyContent:'space-evenly',alignContent:'center',alignItems:'center'}}>
                            <View style={{height:'10%',width:'50%',alignContent:'center',alignItems:'center',justifyContent:'space-evenly',backgroundColor:"#464965",borderRadius:10}}>
                                    <Text style={{color:'white',fontWeight:'bold'}}>Psaume de jour</Text>
                            </View> 
                            <View style={{height:'60%',width:'80%',justifyContent:'space-evenly',backgroundColor:"#464965",borderRadius:10}}>
                                <Text style={{color:'white'}}>Louez l'Éternel!Chantez à l'Éternel un cantique nouveau! Chantez ses louages dans l'assemblée des fideles!</Text>
                                <Text style={{position:'absolute',bottom:2,right:2}}>Psaumes 149.1</Text>
                            </View>  
                        </View>                                          
                    </View>
                </ImageBackground>         
            )
        }
        if(this.state.reglages==true){
            return(                                
                <ImageBackground source={require('../assets/appFO1.png')} style={{height:'100%',width:'100%'}}>
                    <View style={style.v1}>
                        <View style={{backgroundColor:"#6767ff",flexDirection:'row',justifyContent:'space-around',alignContent:'center',alignItems:'center',width:'80%',height:'8%',borderRadius:10,position:'absolute',top:15}}>
                        <TouchableOpacity onPress={()=>{this.setState({accueil:true,chants:false})}} style={{backgroundColor:'#464965',borderRadius:5}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Chants</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({accueil:true,chants:false})}} style={{backgroundColor:'#464965',borderRadius:5}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Accueil</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({reglages:true,chants:false})}} style={{backgroundColor:'#07080d',borderRadius:5}}><Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Reglages</Text></TouchableOpacity>
                        </View>
                        <View style={{height:'40%',width:'80%',justifyContent:'space-evenly',backgroundColor:"#464965"}}>
                            <Text>Ici le message de reglages...</Text>
                        </View>                    
                    </View>
                </ImageBackground>         
            )
        }        
    }
}
const style = StyleSheet.create({
    v1:{
        // backgroundColor:"#3F424D",
        justifyContent:'space-evenly',
        alignContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },
    v2:{
        backgroundColor:"#464965",
        alignContent:'center',
        borderRadius:10,
        // justifyContent:'center',
        // alignItems:'center',
        marginLeft:'10%',
        width:'80%',
        height:'100%',
        marginBottom:10
    },
    t1:{
        fontWeight:'bold',
        fontSize:15,
        letterSpacing:1,
        color:'white'
    }
})