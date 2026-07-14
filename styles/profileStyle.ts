import { StyleSheet } from "react-native";

export const stylespf = StyleSheet.create({
    containerProfile: {
        padding: 15,
        borderRadius: 20,
        width: "100%",
        height: "35%",
        backgroundColor: "#045858"
    },

    container: {
        backgroundColor: "#DCEDEA",
        flex: 1
    },

    nome: {
        color: "white",
        fontFamily: "fraunces",
        fontSize: 20
    },

    meuperfil: {
        marginBottom: 15,
        fontFamily: "fraunces",
        fontSize: 30,
        color: "white"
    },

    email: {
        color: "white",
        fontFamily: "space grotesk",
        fontSize: 13   
    },

    viewProfile: {
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"

    },

    viewProfileTexts: {
        marginLeft: 10
    },

    botaoProfile: {
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        width: 120,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#008080"
    },

    botaoProfileTexto: {
        marginLeft: 5,
        fontFamily: "space grotesk",
        color: "white"
    },

    viewGostosDeViagem: {
        padding: 15,
    },

    gostosDeViagemTexto: {
        fontFamily: "fraunces",
        fontSize: 25,
        paddingVertical: 5,
        color: "black",
        fontWeight: "bold"
    },

    gostosDeViagemTextoPequeno: {
        fontFamily: "space grotesk",
        color: "gray",
        fontSize: 14,
        paddingVertical: 2
    },

    viewCardsProfile: {
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },

    cardContainer: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#7C9473",
        marginHorizontal: 5,
        marginVertical: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        borderRadius: 15,
    },

    cardTexto: {
        color: "white",
        fontFamily: "space grotesk"
    }

})

