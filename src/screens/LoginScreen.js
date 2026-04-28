import React, { useState } from 'react';
import {View, Text, TextInput, Button, Alert, ActivityIndicator, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import { getUsers, login } from '../api/auth';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!username || !password) {
      Alert.alert('Atenção', 'Preencha usuário e senha.');
      return;
    }

    setLoading(true);

    try {
      const users = await getUsers();
      const userExists = users.find(
        (u) => u.username === username && u.password === password
      );

      if (!userExists) {
        Alert.alert('Erro', 'Usuário ou senha inválidos.');
        return;
      }

      await login(username, password);
      navigation.replace('Home');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao realizar login. Verifique sua conexão.');
      console.log('Erro no login:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable={!loading}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
        ) : (
          <View style={styles.buttonContainer}>
            <Button title="Entrar" onPress={handleLogin} />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  buttonContainer: {
    marginTop: 8,
  },
  loader: {
    marginTop: 16,
  },
});

export default LoginScreen;