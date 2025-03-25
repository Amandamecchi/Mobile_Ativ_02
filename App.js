import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>OBRIGADA A TODOS QUE CONFIARAM EM MIM❤️ </Text>
      <Image
        source={require('./assets/img/teste-mobile.jpg')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'pink',
    textAlign: 'center',
    margin: 40,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 50,
    margin: 40,
  }

});
