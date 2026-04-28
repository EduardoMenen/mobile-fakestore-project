import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import GroupInfoScreen from '../screens/GroupInfoScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Produtos',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Sair',
                  'Tem certeza que deseja fazer logout?',
                  [
                    { text: 'Cancelar', style: 'cancel' },
                    {
                      text: 'Sair',
                      style: 'destructive',
                      onPress: () => navigation.replace('Login'),
                    },
                  ]
                );
              }}
              style={styles.headerButton}
            >
              <Text style={styles.headerButtonText}>Sair</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('GroupInfo')}
              style={styles.headerButton}
            >
              <Text style={styles.headerButtonText}>ⓘ</Text>
            </TouchableOpacity>
          ),
          headerBackVisible: false,
        })}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: 'Detalhes do Produto' }}
      />

      <Stack.Screen
        name="GroupInfo"
        component={GroupInfoScreen}
        options={{ title: 'Informações do Grupo' }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  headerButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AppNavigator;