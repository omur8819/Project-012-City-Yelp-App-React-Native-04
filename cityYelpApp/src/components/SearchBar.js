import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput

            />
        </View>
    )
}

export { SearchBar };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: '300'
    }
})