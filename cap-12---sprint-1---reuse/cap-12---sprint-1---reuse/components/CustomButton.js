import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export default function CustomButton({ title }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => Alert.alert('ReUse', 'Bem-vindo à proposta do ReUse!')}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1F2D22',
    paddingVertical: 17,
    borderRadius: 28,
    alignItems: 'center',
  },

  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});