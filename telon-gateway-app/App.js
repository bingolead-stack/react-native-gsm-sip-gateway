import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';

export default class App extends Component {

  async componentDidMount() {
    if (Platform.OS === 'android') {
      await this.ensurePhoneStatePermission();
    }
  }

  async ensurePhoneStatePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        {
          title: 'Phone Permission Required',
          message:
            'This app needs access to phone state for SIP and call handling.',
          buttonPositive: 'Allow',
          buttonNegative: 'Deny',
        }
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          'Permission denied',
          'Phone state permission is required for the app to work properly.'
        );
      }
    } catch (err) {
      console.warn('Permission error:', err);
    }
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Gateway log</Text>
                <View style={styles.container}>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  body: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111111',
    marginBottom: 12,
  },
});
