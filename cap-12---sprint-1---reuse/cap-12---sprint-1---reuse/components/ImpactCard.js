import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ImpactCard() {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.label}>Produtos reutilizados</Text>
        <Text style={styles.number}>+2.450</Text>
        <Text style={styles.description}>
          Itens que poderiam ser descartados ganharam uma nova utilidade.
        </Text>
      </View>

      <View style={styles.bars}>
        <View style={[styles.bar, styles.barSmall]} />
        <View style={[styles.bar, styles.barMedium]} />
        <View style={[styles.bar, styles.barLarge]} />
        <View style={[styles.bar, styles.barMedium]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    padding: 20,
  },

  label: {
    fontSize: 13,
    color: '#7B857E',
    marginBottom: 6,
  },

  number: {
    fontSize: 32,
    fontWeight: '800',
    color: '#263A2A',
  },

  description: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: '#6B756D',
  },

  bars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
    marginTop: 22,
  },

  bar: {
    width: 42,
    borderRadius: 18,
    backgroundColor: '#CFEED8',
  },

  barSmall: {
    height: 46,
  },

  barMedium: {
    height: 72,
  },

  barLarge: {
    height: 96,
  },
});