import React, { Component } from 'react';
import { Text, View, Button, SafeAreaView, StyleSheet } from 'react-native';

export default class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            timer: null,
            number: 0 
        }
        this.startStop = this.startStop.bind(this);
        this.resetButton = this.resetButton.bind(this)
    }

    startStop(){
        if(this.state.timer == null){
            this.state.timer = setInterval(() => {
                let newState = this.state;
                newState.number += 0.1;
                this.setState(newState);
            }, 100);    
        }else{
            clearInterval(this.state.timer)
            this.state.timer = null
        }
    }

    resetButton(){
        let newState = this.state;
        this.state.number = 0
        this.state.timer = null
        this.setState(newState)
    }

    render() {
        return (
            <View style={styles.app}>
                    <Text style={styles.counterText}>{this.state.number.toFixed(1)}</Text>

                <View style={styles.buttonsPosition}>
                    <Button title="Start/Stop" onPress={this.startStop}></Button>
                    <Button title="Reset" onPress={this.resetButton}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: 'rgb(60,63,65)',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsPosition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50,
        fontSize: 40,
    },
    timerSection: {
        alignItems: 'center',
        marginVertical: 100,
    },
    counterText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'
    }
})

