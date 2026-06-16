import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const products = [
    { id: '1', name: 'Product 1', price: '.99', image: '📦' },
    { id: '2', name: 'Product 2', price: '.99', image: '🎁' },
    { id: '3', name: 'Product 3', price: '.99', image: '📱' },
  ];

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Text style={styles.productImage}>{item.image}</Text>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BTac Marketplace</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  productImage: {
    fontSize: 40,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#e74c3c',
    marginVertical: 8,
  },
  addButton: {
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
