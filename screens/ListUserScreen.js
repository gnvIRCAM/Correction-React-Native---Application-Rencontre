import { useEffect, useState } from 'react';
import {View} from 'react-native';
import ListUserView from '../components/ListUserView';

export default function ListUserScreen({ navigation }) {
    const [users, setUsers] = useState([]); 
    useEffect(() => {
       const  fetchUsers = async () => {
        try {
            // Récupération asynchrone de la liste des utilisateurs
            const response = await fetch(
                'https://randomuser.me/api/?nat=fr&results=1000'
                ); 
            const results = await response.json();  

            // Mise à jour du state
            setUsers(results.results)
        }
        catch (err) {
            console.error(err); 
        }
       }
       fetchUsers();
    }, [])
    return (
        // On passe l'état users en tant que props au composant ListUserView
        <ListUserView users={users}/>
    )
}