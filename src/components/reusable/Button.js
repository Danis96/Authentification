import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({onPress, children}) => {

    const  { buttonStyle, textStyle } = styles;

     return (
         <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{children}</Text>
         </TouchableOpacity>   
     );
}


const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'purple',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        marginRight: 5,
        marginLeft: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    }
}

export {Button};