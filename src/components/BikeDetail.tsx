import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const bikeData: Record<string, any> = {
  '1': { name: 'Pinarello', price: '$1800', oldPrice: '$2000', image: require('@/assets/images/favicon.png') },
  '2': { name: 'Pina Mountain', price: '$1700', oldPrice: '$1900', image: require('@/assets/images/favicon.png') },
  '3': { name: 'Pina Bike', price: '$1500', oldPrice: '$1800', image: require('@/assets/images/favicon.png') },
  '4': { name: 'Pinarello', price: '$1900', oldPrice: '$2200', image: require('@/assets/images/favicon.png') },
  '5': { name: 'Pinarello', price: '$2700', oldPrice: '$3000', image: require('@/assets/images/favicon.png') },
  '6': { name: 'Pinarello', price: '$1350', oldPrice: '$1600', image: require('@/assets/images/favicon.png') },
};

const BikeDetail = () => {
  // Lấy ID từ URL (Expo Router)
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
  const bike = bikeData[id as string];

  if (!bike) {
    return (
      <View style={styles.error}>
        <Text>Bike not found</Text>
        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
          <Text style={{ color: 'blue' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageBox}>
        <Image source={bike.image} style={styles.image} resizeMode="contain" />
      </View>

      <Text style={styles.name}>{bike.name}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>{bike.price}</Text>
        <Text style={styles.oldPrice}>{bike.oldPrice}</Text>
      </View>

      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.description}>
        It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
      </Text>

      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.favorite}>
          <Text style={styles.favoriteText}>♡</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BikeDetail;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 10 },
  imageBox: { width: '100%', height: 280, backgroundColor: '#f9e7e7', borderRadius: 6, marginTop: 10, alignItems: 'center', justifyContent: 'center' },
  image: { width: '95%', height: '95%' },
  name: { fontSize: 21, fontWeight: '700', color: '#111', marginTop: 12 },
  priceRow: { flexDirection: 'row', alignItems: 'center', gap: 15, marginTop: 4 },
  price: { fontSize: 14, color: '#555' },
  oldPrice: { fontSize: 13, color: '#222', textDecorationLine: 'line-through' },
  descriptionTitle: { fontSize: 14, fontWeight: '600', color: '#111', marginTop: 20, marginBottom: 12 },
  description: { fontSize: 12, lineHeight: 20, color: '#777' },
  bottomRow: { flexDirection: 'row', alignItems: 'center', marginTop: 35, marginBottom: 30 },
  favorite: { width: 45, height: 45, alignItems: 'center', justifyContent: 'center' },
  favoriteText: { fontSize: 30, color: '#111' },
  addButton: { flex: 1, height: 45, backgroundColor: '#ed3f43', borderRadius: 25, alignItems: 'center', justifyContent: 'center' },
  addText: { color: '#fff', fontSize: 13, fontWeight: '600' },
  error: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});