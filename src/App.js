import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/reusable';
import LoginForm from './components/LoginForm';


class App extends Component {

    state = {
        loggedIn: null
    }


    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBHBOjczurrzd0q8AT02gDrC4MkIpIPGDY",
            authDomain: "reactnativeauth-22186.firebaseapp.com",
            databaseURL: "https://reactnativeauth-22186.firebaseio.com",
            projectId: "reactnativeauth-22186",
            storageBucket: "",
            messagingSenderId: "128821689454",
            appId: "1:128821689454:web:6de61d0aa0ff181b"
        });


        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    loggedIn: true
                });
            } else {
                this.setState({
                    loggedIn: false
                });
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (

                    <CardSection>
                       <Button onPress={() => firebase.auth().signOut()}>
                            Sign Out
                        </Button>
                    </CardSection>

                )
            case false:
                return <LoginForm />
            default:
                return (

                    <View style={styles.spinnerStyle}>
                        <Spinner />
                    </View>

                )
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Sign up' />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    spinnerStyle: {
        padding: 10,
        marginTop: 300
    }
}

export default App;