import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput style={styles.input} placeholder="Digite aqui" keyboardType="numeric" />
      <View style={styles.labelsContainer}>
        <Text style={styles.label}>Montanhas</Text>
        <Text style={styles.label}>Praias</Text>
        <Text style={styles.label}>Comida</Text>
      </View>
      <View style={styles.imagesContainer}>
      
       <Image source={require('./assets/gato.jpg')} style={styles.image} />
        <Image source={require('./assets/gato2.jpeg')} style={styles.image} />
        <Image source={require('./assets/filhote-capa.jpg.jpg')} style={styles.image} />
        <Image source={require('./assets/Sem título.jpeg')} style={styles.image} />
        <Image source={require('./assets/hSem título.jpeg')} style={styles.image} />
        <Image source={require('./assets/images.jpeg')} style={styles.image} />
        <Image source={require('./assets/m título.jpeg')} style={styles.image} />
        <Image source={require('./assets/c título.jpeg')} style={styles.image} />
        <Image source={require('./assets/animal-cat-face-close-up-feline-416160-1024x683.jpg')} style={styles.image} />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default App;