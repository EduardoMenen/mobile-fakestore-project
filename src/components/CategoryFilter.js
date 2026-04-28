import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Modal, FlatList,} from 'react-native';

    function CategoryFilter({ categories, selected, onChange, onClear }) {
    const [modalVisible, setModalVisible] = useState(false);

    const allOptions = [{ label: 'Todas as categorias', value: '' }, ...categories.map((c) => ({ label: c, value: c }))];

    const selectedLabel = selected === '' ? 'Todas as categorias' : selected;

    function handleSelect(value) {
        onChange(value);
        setModalVisible(false);
    }

    return (
        <View style={styles.container}>
        <Text style={styles.label}>Filtrar por categoria:</Text>

        <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setModalVisible(true)}
        >
            <Text style={styles.dropdownText}>{selectedLabel}</Text>
            <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>

        {selected !== '' && (
            <View style={styles.clearButton}>
            <Button title="Limpar filtro" onPress={onClear} color="#FF3B30" />
            </View>
        )}

        <Modal
            visible={modalVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
        >
            <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
            >
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Selecione uma categoria</Text>
                <FlatList
                data={allOptions}
                keyExtractor={(item) => item.value || 'all'}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    style={[
                        styles.option,
                        selected === item.value && styles.optionSelected,
                    ]}
                    onPress={() => handleSelect(item.value)}
                    >
                    <Text
                        style={[
                        styles.optionText,
                        selected === item.value && styles.optionTextSelected,
                        ]}
                    >
                        {item.label}
                    </Text>
                    </TouchableOpacity>
                )}
                />
            </View>
            </TouchableOpacity>
        </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    label: {
        fontSize: 13,
        color: '#666',
        marginBottom: 4,
        fontWeight: '600',
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: '#fafafa',
    },
    dropdownText: {
        fontSize: 16,
        color: '#333',
    },
    arrow: {
        fontSize: 12,
        color: '#666',
    },
    clearButton: {
        marginTop: 8,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        width: '100%',
        maxHeight: '60%',
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
        textAlign: 'center',
    },
    option: {
        paddingVertical: 14,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginBottom: 4,
    },
    optionSelected: {
        backgroundColor: '#E3F2FD',
    },
    optionText: {
        fontSize: 15,
        color: '#333',
    },
    optionTextSelected: {
        fontWeight: 'bold',
        color: '#007AFF',
    },
});

export default CategoryFilter;