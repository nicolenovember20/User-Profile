import React from 'react';
import { View, Text, StyleSheet, Image, Switch, TouchableOpacity } from 'react-native';

export default function UserProfile() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={require('./profile.jpg')}
        />
        <Text style={styles.name}>Nicole C. Panares</Text>
        <Text style={styles.membership}>⚡ Gold member</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.info}>09123456789</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Mail</Text>
        <Text style={styles.info}>nicolepanares123@gmail.com</Text>
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.option}>
          <Text style={styles.optionText}>Dark mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={(value) => setIsDarkMode(value)}
          />
        </View>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Profile details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  membership: {
    fontSize: 16,
    color: '#ffd700',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
    color: '#888',
  },
  info: {
    fontSize: 16,
    color: '#fff',
  },
  optionsContainer: {
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
  },
});
