import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function TabTwoScreen() {

  // Collape this items
  const items = [
    'File-based routing',
    'Android, iOS, and web support',
    'Images',
    'Custom fonts',
    'Light and dark mode components',
    'Animations',
    'Haptic feedback',
    'Custom hooks',
    'Themed components',
    'Parallax scroll view',
    'Dynamic theming',
    'TypeScript support',
    'Expo Router',
    'Expo SDK 49',
    'React Navigation',
    'React Native 0.72',
    'React 18',
    'React Native Reanimated',
    'React Native Gesture Handler',
    'React Native Screens',
    'React Native Vector Icons',
    'React Native Safe Area Context',
    'React Native Paper',
    'React Native Elements',
    'React Native Fast Image',
    'React Native Image Crop Picker',
    'React Native Image Zoom Viewer',
    'React Native Maps',
    'React Native Web',
    'React Native Firebase',
    'React Native Async Storage',
    'React Native Localization',
    'React Native Device Info',
    'React Native Share',
    'React Native Clipboard',
    'React Native Push Notifications',
    'React Native Permissions',
    'React Native Splash Screen',
    'React Native Status Bar',
    'React Native Safe Area View',
  ];

  const textColor = useThemeColor({}, 'text'); // Dynamically get the text color based on the theme

  return (
    <View style={styles.scrollViewContent}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: textColor }]}>Explore</Text>
      </View>
      <Text style={[styles.description, { color: textColor }]}>
        This app includes example code to help you get started.
      </Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {items.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={{ color: textColor }}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    marginTop: 64,
    padding: 16,
    marginBottom: 128,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});