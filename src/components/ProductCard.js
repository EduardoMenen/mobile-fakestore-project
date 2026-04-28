import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { formatPrice } from '../utils/formatPrice';

function ProductCard({ product, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="contain"
        />
        <View style={styles.info}>
            <Text style={styles.title} numberOfLines={2}>
            {product.title}
            </Text>
            <Text style={styles.price}>{formatPrice(product.price)}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 12,
    },
    info: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007AFF',
    },
});

export default ProductCard;