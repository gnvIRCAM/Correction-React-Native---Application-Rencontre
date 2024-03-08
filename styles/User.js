import { StyleSheet } from "react-native";

export const userStyle = StyleSheet.create({
    condensed: {
        // orientation en ligne
        flexDirection: 'row', 

        // alignement par rapport au cross-axis (ici : axe vertical)
        alignItems: 'center',  
        
        // alignement des éléments au début de l'axe principal (ici : au début de la ligne)
        justifyContent: 'flex-start', 

        // marge et couleur du fond
        margin: 3, 
        backgroundColor: '#df7b7b'
    }, 
    condensed_text: {
        flexDirection: 'column', 
    },
    condensed_name: {
        // Couleur, taille de la police, et affichage en gras
        color: '#730d0d',
        fontSize: 23, 
        fontWeight: 'bold' 

    }, 
    detailed: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})