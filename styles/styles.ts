import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },

    header: {
        minWidth: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"

    },

    headertext: {
        color: "white"
    },

    main: {
        width: "100%",
        height: "80%",
        backgroundColor: "gray"
    },

    footer: {
        width: "100%",
        height: "20%",
        backgroundColor: "cyan"
    },

    headercontainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        width: "90%"
    },

    headerLocalizacao: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    
    headerProfile: {
        width: 50,
        height: 50
    },

    headerLocalizarImagem: {
        width: 15,
        height: 15
    },

    headerTextoLocalizacao: {
        display: "flex",
        flexDirection: "column",

    },

    searchBar: {
        width: "95%",
        padding: 5
    },

    searchBarCorpo: {
        flexDirection: "row",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#DCD6AE",
        fontSize: 16,
        color: '#000',
        padding: 2,

    },
    
    searchBarText: {
        flex: 1,
    },

    cardFiltro: {
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#2F80ED",
    },

    cardFiltroSelecionado: {
        backgroundColor: "#2F80ED",
    },

    cardFiltroTexto: {
        color: "black",
    },

    cardFiltroTextoSelecionado: {
        color: "white",
    },

    headerFiltroView: {
        width: "100%",
    }

})
