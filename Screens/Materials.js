import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ModuleCard from './ModuleCard';

export default function Dashboard({ navigation }) {
  const modules = [
    {
      id: 1,
      title: 'SAD',
      description: 'Study the principles of Software Analysis and Development',
      icon: 'calculator-outline',
    },
    {
      id: 2,
      title: 'MAD',
      description: 'Study the basic of Moblie Application Development ',
      icon: 'book-outline',
    },
    
  ];

  const handleModulePress = (module) => {
    navigation.navigate('ModuleDetails', { module });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lecture Materials</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
         
        </TouchableOpacity>
      </View>
      <View style={styles.modules}>
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            onPress={() => handleModulePress(module)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    backgroundColor: '#03045e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    
  },
  modules: {
    flex: 1,
    padding: 16,
    
  },
});
