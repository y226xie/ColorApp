import React, {Component} from 'react'
import {
    Text,
    TextInput,
    View,
    StyleSheet
} from 'react-native'

export default class ColorForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.submit = this.submit.bind(this)
    }

    submit() {
        this.props.addNewColor(this.state.text.toLowerCase())
        this.setState({
            text: ''
        })
    }
    

    render(){
        const { text } = this.state
        const { navigate } = this.props.navigation
        const uri = 'https://www.w3schools.com/colors/colors_names.asp'
        return(
            <View style={styles.container}>
                <TextInput 
                style={styles.textField}
                placeholder="Some colors"
                onChangeText={(text) => this.setState({text})}
                value={text}
                />
                <Text style={styles.text} onPress={this.submit}>Add</Text>
                <Text style={styles.text} onPress={() => navigate('Web',{uri})}>Info</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textField: {
        flex: 1,
        padding: 5,
        margin: 5,
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 5,
        backgroundColor: 'snow'
    },
    text: {
        fontSize: 20,
        margin: 5,
        padding: 5,
        backgroundColor: '#FAEBD7'
    }
})