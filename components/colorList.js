import React, { Component } from 'react'
import { 
  ListView,
  StyleSheet,
  AsyncStorage,
} from 'react-native'
import ColorButton from './colorButton'
import ColorForm  from './colorForm'

export default class ColorList extends Component {
  
  static navigationOptions = {
    title: 'Avaiable Colors'
  }

  constructor(props){
    super(props)
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const colors = []

    this.state = {
      colors,
      dataSource: this.dataSource.cloneWithRows(colors)
    }

    this.addNewColor = this.addNewColor.bind(this)
  }

  componentDidMount() {
    AsyncStorage.getItem(
      '@ColorListStore:Colors',
      (err, response) => {
        if (err) {
          console.error('Error loading colors', err) 
        }
        else {
          const colors = JSON.parse(response)
          this.setState({
            colors,
            dataSource: this.dataSource.cloneWithRows(colors)
          })
        } 
      }
    )
  }

  saveColors(colors) {
    AsyncStorage.setItem(
      '@ColorListStore:Colors',
      JSON.stringify(colors)
    )
  }


  addNewColor(color){
    const colors = [...this.state.colors, color]
    this.setState({
      colors,
      dataSource: this.dataSource.cloneWithRows(colors)
    })
    this.saveColors(colors)
  }

 
  render() {
    const { navigate } = this.props.navigation
    const { backgroundColor, dataSource } = this.state
    return (
      <ListView style={[styles.container, { backgroundColor }]}
        dataSource={dataSource}
        renderRow={(color) => (
          <ColorButton backgroundColor={color} onSelect={() => navigate('Detail', {color})}/>
        )}
        renderHeader={() => (
          <ColorForm navigation={this.props.navigation} addNewColor={this.addNewColor}/>
        )}
       />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: 'lightgrey',
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  }
})

