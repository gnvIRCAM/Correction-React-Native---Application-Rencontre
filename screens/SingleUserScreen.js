import {View} from 'react-native'; 
import DetailedUserView from '../components/DetailedUserView';

export default function SingleUserScreen({route, navigation}) {
    const user = route.params.user; 

    return (
        <DetailedUserView user={user}/>
    )
}