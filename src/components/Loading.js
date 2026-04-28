import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

function Loading({ message = 'Carregando...' }) {
    return (
        <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.message}>{message}</Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    message: {
        marginTop: 12,
        fontSize: 14,
        color: '#666',
    },
});

export default Loading;