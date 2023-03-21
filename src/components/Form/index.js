import { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { showMessage, hideMessage } from "react-native-flash-message";
import styles from './style'
import Result from './Result';


export default function Form() {
    const [mediaEtapa1, setMediaEtapa1] = useState(null);
    const [mediaEtapa2, setMediaEtapa2] = useState(null);
    // const [msgCalculo, setMsgCalculo] = useState(null);
    const [msgResultado, setMsgResultado] = useState(null);
    const [media, setMedia] = useState(0);
    const [txtButton, setTxtButton] = useState(null);
    
    function calcularMedia(mediaEtapa1, mediaEtapa2) {
        let mediaFinal = (Number.parseFloat(mediaEtapa1) + Number.parseFloat(mediaEtapa2)) / 2;
        setMedia(mediaFinal);
        resultado(mediaFinal);
    }
    
    function resultado(media) {
        if (media >= 7) {
            setMsgResultado("APROVADO");
        } else if (media >= 3 && media < 7) {
            setMsgResultado("PROVA FINAL");
        }else setMsgResultado("REPROVADO");
    }
    
    function validacaoMedia() {
        if (mediaEtapa1 != null && mediaEtapa2 != null) {
            let mediaEtapa1Format = mediaEtapa1.replace(",", ".");
            let mediaEtapa2Format = mediaEtapa2.replace(",", ".");
            if (mediaEtapa1Format >= 0 && mediaEtapa1Format >= 10 && mediaEtapa2 >= 0 && mediaEtapa2 <= 10) {
                calcularMedia(mediaEtapa1Format, mediaEtapa2Format)
            }
            else {
                errorMessage("Valor inválido");
            }
        } else errorMessage("Preencha as médias das etapas!");
    }

    function errorMessage(message) {
        showMessage({
            message: "Error",
            description: message,
            type: "warning",
          });
        setMedia(null);
        setMsgResultado(null);
    }
    
    return (
        <View style={styles.form}>
            <Text style={styles.label}>Média etapa 1</Text>

            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={mediaEtapa1}
                onChangeText={setMediaEtapa1}    
            />

            <Text style={styles.label}>Média etapa 2</Text>

            <TextInput 
                style={styles.input}
                keyboardType='numeric'
                value={mediaEtapa2}
                onChangeText={setMediaEtapa2}
            />

            <TouchableOpacity onPress={()=> validacaoMedia()}>
                <Text style={styles.button}>Calcular média</Text>
            </TouchableOpacity>

            <Result 
                media={media} msgResultado={msgResultado}
            />
        </View>
    );
}