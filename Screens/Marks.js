import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Marks() {
  const modules = [
    { name: 'SAD', mark: 80 },
    { name: 'MAD', mark: 70 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Marks</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cell}>Module</Text>
          <Text style={styles.cell}>Total Marks</Text>
        </View>
        {modules.map((module, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{module.name}</Text>
            <Text style={styles.cell}>{module.mark}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#03045e',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 80,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  table: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    fontWeight:'bold',
  },
});
