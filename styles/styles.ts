import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    textheaderTituloFonte: {
        fontFamily: "Space Grotesk",
        fontWeight: "bold",
        fontSize: 25
    },

    textHeaderDescricao: {
        fontFamily: "Space Grotesk",
        fontSize: 12,
        color: "gray"
    },

    textCardMainTitulo: {
        fontFamily: "Fraunces",
        fontWeight: "bold"
    },

    container: {
        backgroundColor: "#DCEDEA",
        width: "100%",
        height: "100%"
    },

    header: {
        backgroundColor: "#DCEDEA",
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 5,
        width: "100%",
        height: "80%",
        backgroundColor: "#DCEDEA"
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

    iconHeaderLocal: {
        marginRight: 10
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
        borderWidth: 2,
        borderColor: "#DCD6AE",
        backgroundColor: "white"
    },

    cardFiltroSelecionado: {
        borderColor: "#008080",
        backgroundColor: "#008080",
    },

    cardFiltroTexto: {
        color: "black",
    },

    cardFiltroTextoSelecionado: {
        color: "white",
    },

    headerFiltroView: {
        marginTop: 10,
        marginBottom: 5,
        width: "100%",
    },

    headerFiltroContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    mainCard: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#B9CDBF",
        borderRadius: 10,
        width: "100%",
        height: 270,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "space-between",
        padding: 3
    },

    Imagem: {
        borderRadius: 10,
        width: "100%",
        height: 150
    },

    MainContainerCard: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    TituloDoMainCard: {
        fontSize: 20,
        fontWeight: "bold"
    },

    descricaoDoMainCard: {
        color: "gray",
        fontSize: 14
    },

    containerTextoCardMain: {
        padding: 5
    },

    ContainerComprar: {
        justifyContent: "space-between",
        paddingHorizontal: 5,
        display: "flex",
        flexDirection: "row",
    },

    flitroCardMain: {
        borderRadius: 10,
        backgroundColor: "#E4EBE1",
        width: "40%",
        justifyContent: "center",
        alignItems: "center"
    },

    botaoComprarCardMain: {
        width: "30%",
        padding: 5,
        backgroundColor: "#045858",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },

    botaoCardTexto: {
        color: "white"
    },


    tituloMain: {
        fontWeight: "bold",
        fontFamily: "fraunces",
        fontSize: 20,
        paddingVertical: 10
    },

    headerVitaTurismo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    caraComoÉBomAcabarUmProjetoEFicarSatisfeito: {
        color: "#008080",
        fontFamily: "fraunces",
        fontWeight: "bold",
        fontSize: 22,
    }
})
