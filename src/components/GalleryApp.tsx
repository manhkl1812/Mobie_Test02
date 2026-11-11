import { useRouter } from 'expo-router'; // 1. Phải import useRouter
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GalleryApp = () => {
  const router = useRouter(); // 2. Phải khởi tạo router ở đây

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        A Premium online store for{'\n'}
        sporter and their stylist choice
      </Text>
      
      <View style={styles.imageBox}>
        <Image source={require('@/assets/images/favicon.png')} style={styles.bike} resizeMode="contain" />
      </View>

      <View style={styles.titleBox}>
        <Text style={styles.title}>
          POWER BIKE{'\n'}SHOP
        </Text>
      </View>

      {/* 3. Bây giờ router.push đã hoạt động */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/BikeCard' as any)}>
       <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GalleryApp;

const styles = StyleSheet.create({
  container: { width: '100%', height: '100%', alignItems: 'center', backgroundColor: '#fafafa', borderWidth: 1, borderColor: '#555', borderRadius: 5, alignSelf: 'center', marginTop: 10 },
  description: { marginTop: 42, marginBottom: 14, textAlign: 'center', fontSize: 11, lineHeight: 15, fontWeight: '600', color: '#111' },
  imageBox: { width: 199, height: 216, backgroundColor: '#f7e5e5', borderWidth: 2, borderColor: '#0000', borderRadius: 10, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  bike: { width: '94%', height: '94%' },
  titleBox: { width: 195, height: 35, marginTop: 9, borderWidth: 2, borderColor: '#0000', alignItems: 'center', justifyContent: 'center' },
  title: { textAlign: 'center', fontSize: 14, lineHeight: 14, fontWeight: '800', color: '#000' },
  button: { width: 187, height: 34, marginTop: 34, backgroundColor: '#ef3f43', borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#fff', fontSize: 11, fontWeight: '500' },
});