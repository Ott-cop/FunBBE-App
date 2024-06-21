import { Appbar } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';

export default function AppBar() {
    return (
        <Appbar.Header>
            <Appbar.Content title="Home" />
            <Appbar.Action icon="hoop-house"  />
            <Appbar.Action icon="account-group" />
            <Appbar.Action icon="phone" />
            
        </Appbar.Header>
    );
}