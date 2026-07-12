import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },

    header: {
        width: "100%",
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
        justifyContent: "space-between",
        padding: 5,
        width: "90%"
    },

    headerLocalizacao: {
        display: "flex",
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
        padding: 5

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
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
        color: '#000',
        padding: 2,

    },
    
    searchBarText: {
        width: "90%",
        paddingHorizontal: 5
    },

    cardFiltro: {
        paddingHorizontal: 18,
        paddingVertical: 10,
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
    }

})
