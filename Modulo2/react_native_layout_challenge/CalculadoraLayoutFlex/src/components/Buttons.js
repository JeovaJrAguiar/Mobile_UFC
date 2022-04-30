import React from 'react'
import {StyleSheet, Text, Dimentions, TouchableHighlight} from 'react-native'

const styles = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimentions.get('window'. width/4),
        with: Dimentions.get('window').width/4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAling: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton:{
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    doubleButton:{
        width: (Dimentions.get('window').widht/4) * 2,
    },
    tripleBlutton:{
        width: (Dimentions.get('window').width/4) * 3
    },
})


export default props => {
    const styleButtons = [styles.button]

    if(props.double){
        styleButtons.push(styles.doubleButton)
    }
    if(props.triple){
        styleButtons.push(styles.trupleButton)
    }
    if(props.operator){
        styleButtons.push(syles.operationButton)
    }

    return(
        <TouchableHighlight onPress = {() => props.onClick(props.label)}>
            <Text style={styleButtons}>{props.label}</Text>
        </TouchableHighlight>
    )
}