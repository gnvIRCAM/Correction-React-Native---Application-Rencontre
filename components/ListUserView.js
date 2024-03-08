import { FlatList } from 'react-native'; 
import CondensedUserView from './CondensedUserView';
import { useNavigation } from '@react-navigation/native';

export default function ListUserView(props) {
    // Le composant ListUserView prends en entrée un props users
    const users = props.users; 

    // On va définir une FlatList (liste défilable), qui contient:
    //      - data = liste des éléments à afficher (ici : les users)
    //      - keyExtractor : associe à chaque élément de data un identifiant unique
    //      - renderItem : associe un composant à chaque élément de data
    return (
        <FlatList 
            data={users}
            renderItem={({item}) => 
            <CondensedUserView user={item}/>
            }
            keyExtractor={item => item.login.uuid}
        />
    )
}