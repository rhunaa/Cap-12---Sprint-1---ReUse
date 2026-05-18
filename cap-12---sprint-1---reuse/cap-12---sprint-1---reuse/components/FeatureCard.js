import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FeatureCard({ title, description, icon, variant, large }) {
  const cardStyle = [
    styles.card,
    large ? styles.largeCard : styles.smallCard,
    variant === 'light' && styles.light,
    variant === 'yellow' && styles.yellow,
    variant === 'dark' && styles.dark,
  ];

  const textStyle = variant === 'dark' ? styles.darkText : styles.text;
  const titleStyle = variant === 'dark' ? styles.darkTitle : styles.title;

  return (
    <View style={cardStyle}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={titleStyle}>{title}</Text>
      <Text style={textStyle}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 18,
  },

  smallCard: {
    flex: 1,
    minHeight: 155,
    justifyContent: 'space-between',
  },

  largeCard: {
    minHeight: 170,
    marginBottom: 6,
  },

  light: {
    backgroundColor: '#CFEED8',
  },

  yellow: {
    backgroundColor: '#FFF1B8',
  },

  dark: {
    backgroundColor: '#263A2A',
  },

  icon: {
    fontSize: 24,
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#263A2A',
    marginBottom: 8,
  },

  text: {
    fontSize: 13,
    lineHeight: 19,
    color: '#526156',
  },

  darkTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  darkText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#DDEFE2',
  },
});