import {View, Text, Image, TouchableOpacity} from 'react-native'; 
import { userStyle } from '../styles/User';
import { useNavigation } from '@react-navigation/native';

export default function CondensedUserView(props) {
    const user = props.user; 

    // On n'est pas dans un screen défini dans le navigateur
    // On utilise le hook useNavigation pour avoir accès au screen dans lequel on est 
    const navigation = useNavigation(); 
    
    return (
        <TouchableOpacity onPress={() => 
            navigation.navigate("SingleUserScreen", {user: user})}>
            <View style={userStyle.condensed}>
                <Image 
                source={{uri : user.picture.thumbnail}}
                style = {{width: 70, height: 70}}
                />
                <View style={userStyle.condensed_text}>
                    <Text style={userStyle.condensed_name}>{user.name.first} {user.name.last}</Text>
                    <Text style={{fontSize: 17}}> Identifies as {user.gender}</Text>
                    <Text style={{fontSize: 17}}>Age : {user.dob.age} years old</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}