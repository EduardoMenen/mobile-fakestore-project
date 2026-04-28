import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button} from 'react-native';
import { getProductById } from '../api/products';
import { formatPrice } from '../utils/formatPrice';
import Loading from '../components/Loading';

function ProductDetailScreen({ route, navigation }) {
    const { productId } = route.params;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function loadProduct() {
        setLoading(true);
        setError(false);

        try {
            const data = await getProductById(productId);
            setProduct(data);
        } catch (err) {
            console.log('Erro ao carregar produto:', err);
            setError(true);
        } finally {
            setLoading(false);
        }
        }

        loadProduct();
    }, [productId]);

    if (loading) {
        return <Loading message="Carregando produto..." />;
    }

    if (error || !product) {
        return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorTitle}>Ops! Algo deu errado.</Text>
            <Text style={styles.errorMessage}>
            Não foi possível carregar os detalhes do produto.
            </Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
        );
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.imageContainer}>
            <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="contain"
            />
        </View>

        <View style={styles.infoContainer}>
            <Text style={styles.category}>{product.category}</Text>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{formatPrice(product.price)}</Text>

            <View style={styles.divider} />

            <Text style={styles.descriptionLabel}>Descrição</Text>
            <Text style={styles.description}>{product.description}</Text>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        paddingBottom: 24,
    },
    imageContainer: {
        backgroundColor: '#fff',
        paddingVertical: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 220,
        height: 220,
    },
    infoContainer: {
        backgroundColor: '#fff',
        marginTop: 8,
        padding: 20,
    },
    category: {
        fontSize: 12,
        color: '#888',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 6,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    price: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 16,
    },
    descriptionLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#666',
        lineHeight: 22,
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

export default ProductDetailScreen;