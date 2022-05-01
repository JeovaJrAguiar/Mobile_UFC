import React, {Component} from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Buttons from './src/components/Buttons'
import Display from './src/components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values:[0,0],
  current: 0
}

export default class App extends Components{
  state = { ... initialState}
  addDigit = n => {
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

    if(n === '.' && !clearDisplay && this.state.displayValue.includes('.')){
      return
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if(n != '.'){
      const newValue = parseFlaot(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }
  }

  clearMemory = () => {
    this.setState({...initialState})
  }

  setOperation = operation => {
    if(this.state.current === 0){
      this.setState({operation, current:1, clearDisplay:true})
    }else{
      const equals = operation === '='
      const values = [...this.state.values]
        try {
          values[0] = eval(`${values[0]} ${this.state.operation} ${values[2]}`)
        } catch (error) {
          values[0] = this.state.values[0]
        }

        values[1]= 0
        this.setState({
          displayValue: `${values[0]}`,
          operator: equals ? null : operation,
          current: equalis? 0 : 1,
          clearDisplay: true,
          values
        })
    }
  }

  render(){
    return(
      <View style = {styles.container}>
        <Display value = {tjis.state.displayValue}/>
        <View style = {styles.buttons}>
          <Buttons label = 'AC' triple onclick = {this.clearMemory}/>
          
          <Buttons label = '/' operator onclick = {this.setOperation}/>
          <Buttons label = '7' onclick = {this.addDigit}/>
          <Buttons label = '8' onclick = {this.addDigit}/>
          <Buttons label = '9' onclick = {this.addDigit}/>

          <Buttons label = '*' operator onclick = {this.setOperation}/>
          <Buttons label = '4' onclick = {this.addDigit}/>
          <Buttons label = '5' onclick = {this.addDigit}/>
          <Buttons label = '6' onclick = {this.addDigit}/>

          <Buttons label = '+' operator onclick = {this.setOperation}/>
          <Buttons label = '0' double onclick = {this.addDigit}/>
          <Buttons label = '.' onclick = {this.addDigit}/>
          <Buttons label = '=' operator onclick = {this.setOperation}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttons:{
    flexDirection: 'row',
    flexing: 'wrap'
  }
})
