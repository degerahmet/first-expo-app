import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, FlatList, View, Text, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

import users from '@/data/users.json'; // Assuming you have a users.json file with user data

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(users); // Initial data from users.json

  const filteredData = data.filter(item =>
    item.username.toLowerCase().includes(searchText.toLowerCase())
  );

  const textColor = useThemeColor({}, 'text'); // Dynamically get the text color based on the theme

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: textColor }}>
          Search a User!
        </ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView>
        <TextInput
          style={[styles.textInput, { color: textColor }]}
          placeholder="Search username"
          placeholderTextColor={textColor}
          value={searchText}
          onChangeText={setSearchText}
        />
      </ThemedView>
      <ThemedView>
        <Button title="Clear Search" onPress={() => setSearchText('')} />
      </ThemedView>

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={{ color: textColor }}>{item.username}</Text>
          </View>
        )}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    margin: 10,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});