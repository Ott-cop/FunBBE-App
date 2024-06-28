import { createBottomTabNavigator, createMaterialBottomTabNavigator } from "@react-navigation/bottom-tabs";
import globalStyle from "../globalStyle";


import Home from './Home/Home';
import Equipe from './Equipe/Equipe'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import QuemSomos from "./QuemSomos/QuemSomos";
import Contato from "./Contato/Contato";

const Tab = createBottomTabNavigator();
const IconSize = 36;

export default function BottomBarNavigation() {
    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false, tabBarHideOnKeyboard: true, tabBarActiveTintColor: globalStyle.secondary, tabBarStyle: {backgroundColor: globalStyle.primary, height: 100, borderTopLeftRadius: 20, borderTopRightRadius: 20}, tabBarShowLabel: false}}>

            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home" color={color} size={IconSize} />)}} />

            <Tab.Screen name="QuemSomos" component={QuemSomos} options={{tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home-city" color={color} size={IconSize} />)}} />
            
            <Tab.Screen name="Equipe" component={Equipe} options={{tabBarIcon: ({color}) => (<MaterialCommunityIcons name="account-group" color={color} size={IconSize}/>)}} />

            <Tab.Screen name="Contato" component={Contato} options={{tabBarIcon: ({color}) => (<MaterialCommunityIcons name="phone" color={color} size={IconSize} />)}} />
        
        </Tab.Navigator>
    );
}