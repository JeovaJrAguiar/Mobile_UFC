import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './ProductList';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

export default function App() {
  const user = {
    firstName: 'Greg',
    lastName: 'Lim'
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.textStyle}>Hello, {formatName(user)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid red'
  },
  textStyle:{
    fontSize: 50
  }
});
