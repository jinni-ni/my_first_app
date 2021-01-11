import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropsChild from './propsChild';


class App extends Component {
  state = {
    sampleText: 'Hello World!!',
    sampleBoolean: false,
    sampleNum: 1
  }

  inputText = () => {
    this.state.sampleBoolean ?
        <Text>sampleboolean is true</Text>
        :
        <Text>sampleboolean is false</Text>
  }

  changeState = () => {
    if(!this.state.sampleBoolean){
      this.setState({
        sampleText: "text changed!!",
        sampleBoolean: true
      })
    }else{
      this.setState({
        sampleText: "Hello world!!",
        sampleBoolean: false
      })
    }
  }

  onAdd = () => {
    this.setState(prevState => {
      return {
        sampleNum: prevState.sampleNum + 1
      }
    })
  }

  render() {
    return (
        <View style={styles.background}>
          <PropsChild sText={this.state.sampleText} cState={this.changeState} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
