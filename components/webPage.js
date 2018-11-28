import React, {Component} from 'react'
import {
    WebView,
    StyleSheet
} from 'react-native'

export class WebPage extends Component {

    static navigationOptions = {
        title: 'All Colors'
    }

    constructor(props){
        super(props)
    }

    render() {
        const { uri } = this.props.navigation.state.params
        return(
            <WebView
            style={styles.container}
            source={{uri}}
            contentInset={{top: -650}}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})