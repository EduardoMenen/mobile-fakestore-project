import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { getProducts } from '../api/products';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

function HomeScreen({ navigation }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function loadProducts() {
        setLoading(true);
        setError(false);

        try {
        const data = await getProducts();
        setProducts(data);
        } catch (err) {
        console.log('Erro ao carregar produtos:', err);
        setError(true);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    if (loading) {
        return <Loading message="Carregando produtos..." />;
    }

    if (error) {
        return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorTitle}>Ops! Algo deu errado.</Text>
            <Text style={styles.errorMessage}>
            Não foi possível carregar os produtos. Verifique sua conexão e tente novamente.
            </Text>
            <Button title="Tentar novamente" onPress={loadProducts} />
        </View>
        );
    }

    return (
        <View style={styles.container}>
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <ProductCard product={item} onPress={() => {}} />
            )}
            contentContainerStyle={styles.list}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    list: {
        padding: 12,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 32,
    },
    errorTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    errorMessage: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default HomeScreen;