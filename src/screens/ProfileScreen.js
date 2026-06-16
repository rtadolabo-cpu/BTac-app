import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.userInfo}>👤 BTac0616</Text>
      <Text style={styles.userInfo}>📧 rt.adolabo@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  userInfo: {
    fontSize: 16,
    color: '#666',
    marginVertical: 8,
  },
});

export default ProfileScreen;
