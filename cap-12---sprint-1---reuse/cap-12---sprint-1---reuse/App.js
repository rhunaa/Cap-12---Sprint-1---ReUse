import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';

import Header from './components/Header';
import FeatureCard from './components/FeatureCard';
import ImpactCard from './components/ImpactCard';
import CustomButton from './components/CustomButton';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Header />

        <View style={styles.grid}>
          <FeatureCard
            title="Doar"
            description="Dê uma nova vida para produtos que você não usa mais."
            icon="♻️"
            variant="light"
          />

          <FeatureCard
            title="Trocar"
            description="Encontre pessoas interessadas em trocar itens de forma consciente."
            icon="🔄"
            variant="yellow"
          />
        </View>

        <FeatureCard
          title="Consumo consciente"
          description="O ReUse ajuda a reduzir o desperdício conectando pessoas e produtos que ainda podem ser utilizados."
          icon="🌱"
          variant="dark"
          large
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Impacto da comunidade</Text>

          <ImpactCard />
        </View>

        <CustomButton title="Conhecer proposta" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3FAF4',
  },

  container: {
    padding: 22,
    paddingBottom: 40,
  },

  grid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },

  section: {
    marginTop: 22,
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#263A2A',
    marginBottom: 12,
  },
});