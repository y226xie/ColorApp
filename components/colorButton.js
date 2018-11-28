import React, {Component} from 'react'
import {
    TouchableHighlight,
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default class ColorButton extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { backgroundColor, onSelect } = this.props
        return(
        <TouchableHighlight 
        style={styles.button}
        onPress={onSelect}
        underlayColor='orange'
        >
          <View style={styles.row}>
            <View style={[styles.sample, { backgroundColor }]}/>
            <Text style={styles.text}>{backgroundColor.toUpperCase()}</Text>
          </View>
        </TouchableHighlight>
    )}
}

const styles = StyleSheet.create({
    button: {
      alignSelf: 'stretch',
      marginHorizontal: 20,
      padding: 20,
      borderRadius: 5,
      backgroundColor: 'rgba(255,255,255, 0.8)',
      borderWidth: 1,
      marginVertical: 10,
    },
    row: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    sample: {
      width: 20,
      height: 20,
      borderRadius: 10,
      margin: 5,
      backgroundColor: 'yellow',
    },
    text: {
      fontSize: 20,
    }
  })