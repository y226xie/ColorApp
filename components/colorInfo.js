import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import ColorTools from 'color'

export class ColorInfo extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.color
    })

    constructor(props) {
        super(props)
    }
    
    render() {
         const { color } = this.props.navigation.state.params
         const copyColor = ColorTools(color)
        return(
            <View style={[styles.container, {backgroundColor: color}]}>
                <Text style={[styles.text, { color: copyColor.negate()}]}>{copyColor.hex()}</Text>
                <Text style={[styles.text, { color: copyColor.negate()}]}>{copyColor.rgb().string()}</Text>
                <Text style={[styles.text, { color: copyColor.negate()}]}>{copyColor.hsl().string()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 20,
        margin: 10
    }
})