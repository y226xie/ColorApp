import React, { Component } from 'react'
import { 
  Alert
} from 'react-native'
import { createStackNavigator, createAppContainer  } from 'react-navigation'
import ColorList  from './components/colorList'
import { ColorInfo } from './components/colorInfo'
import { WebPage } from './components/webPage'


const NavStack = createStackNavigator({
  Home: {screen: ColorList},
  Detail: {screen: ColorInfo},
  Web: {screen: WebPage}
})

const Navigation = createAppContainer(NavStack);
export default class App extends Component {

  render() {
    return (
      <Navigation/>
    )
  }
}




