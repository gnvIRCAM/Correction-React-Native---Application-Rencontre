import {View, Text, Image} from 'react-native'; 
import { userStyle } from '../styles/User';

export default function DetailedUserView(props) {
    const user = props.user; 

    return (
        <View style={userStyle.detailed}>
            <Text style={{fontSize:25}}>{user.login.username}</Text>
             <Image 
             source={{uri : user.picture.large}}
             style = {{width: 300, height: 300, marginTop: 10, marginBottom: 10}}
             />
            <Text>Also known as {user.name.first} {user.name.last} </Text>
            <Text>Identifies as {user.gender}</Text>
            <Text> Is {user.dob.age} years old </Text>
            <Text>Lives in {user.location.city} ({user.location.country})</Text>
        </View>
    )
}