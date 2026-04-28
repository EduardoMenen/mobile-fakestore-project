import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const groupMembers = [
    { name: 'Eduardo Menegazzo Riboli', ra: '1136488' },
    { name: 'Jean Demarchi', ra: '1136156'},
    { name: 'Vitor Valduga Modesti', ra: '1136127'}
];

function GroupInfoScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.header}>
            <Text style={styles.title}>Informações do Grupo</Text>
            <Text style={styles.subtitle}>
            Aplicativo desenvolvido como trabalho acadêmico de Projeto, Design e Engenharia de Processos, consumindo dados da Fake Store API.
            </Text>
        </View>

        <View style={styles.membersSection}>
            <Text style={styles.sectionTitle}>Integrantes</Text>

            {groupMembers.map((member, index) => (
            <View key={index} style={styles.memberCard}>
                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.memberRa}>RA: {member.ra}</Text>
            </View>
            ))}
        </View>

        <View style={styles.footer}>
            <Text style={styles.footerText}>
            Trabalho de React Native — Consumo de API
            </Text>
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
        padding: 20,
        paddingBottom: 40,
    },
    header: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    membersSection: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        paddingHorizontal: 4,
    },
    memberCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    memberName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    memberRa: {
        fontSize: 13,
        color: '#888',
    },
    footer: {
        alignItems: 'center',
        marginTop: 10,
    },
    footerText: {
        fontSize: 12,
        color: '#999',
        fontStyle: 'italic',
    },
});

export default GroupInfoScreen;