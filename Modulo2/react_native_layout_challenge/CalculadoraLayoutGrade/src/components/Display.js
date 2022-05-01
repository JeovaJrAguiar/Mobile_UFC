import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    display:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba{0,0,0,0.6}',
        alighItems: 'flex-end',
    },

    displayvalue:{
        fontSize: 60,
        color: '#fff',
    }
})

export default (props) => {
    return (
        <View style = {styles.display}>
            <Text style = {styles.displayvalue} numberOgLines = {1}>
                {props.value}
            </Text>
        </View>
    )
}