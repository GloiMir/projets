import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import PrincipaleStack from './principaleStack';
import AideStack from './aideStack';
import ApropoStack from './apropoStack';


const ecrans = {
    Principale:{
        screen:PrincipaleStack,
    },   
    Aide:{
        screen:AideStack,
    }, 
    A_propos:{
        screen:ApropoStack,
    }
};

const Page = createDrawerNavigator(ecrans);

export default createAppContainer(Page);