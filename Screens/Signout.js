import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function SignOut() {
  


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Out</Text>
      </View>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
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
  button: {
    width: '80%',
    backgroundColor: '#00563B',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '70%',
    marginBottom: 10,
    marginLeft:45,
    
    shadowColor: '#023e8a',
    
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
});
