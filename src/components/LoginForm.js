import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './reusable';


class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress() {

        const { email, password } = this.state;

        this.setState({
            error: '',
            loading: true
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginError.bind(this));
            })
    }

    renderComponent() {
        if (this.state.loading) {
            return <Spinner size='small' />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Sign in
            </Button>
        )
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            error: '',
            loading: false

          });
    }

    onLoginError(){
        this.setState({ 
            error: 'Authentification failed',
            loading: false
          });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        placeholder='user@gmail.com'
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Password'
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        placeholder='User123#'
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                     {this.renderComponent()}
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        marginTop: 3
    }
}

export default LoginForm;