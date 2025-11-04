import { createDrawerNavigator } from "@react-navigation/drawer"
import SettingsScreen from "../screens/SettingsScreen";
import SettingsUser from "../screens/SettingsUser";

const Drawer = createDrawerNavigator();

export default function SettingsDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Config"components={SettingsScreen}/> 
            <Drawer.Screen name="Configuracao de Usuario" component={SettingsUser} />
        </Drawer.Navigator>
    )
}