import { useRouter } from 'expo-router';
import { useState } from 'react';
// 1. Đổi sang dùng Pressable
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export type Bike = {
  id: string;
  name: string;
  price: string;
  image: any;
  category: string; 
};

const bikeList: Bike[] = [
  { id: '1', name: 'Pinarello', price: '1800', image: require('@/assets/images/favicon.png'), category: 'Roadbike' },
  { id: '2', name: 'Pina Mountain', price: '1700', image: require('@/assets/images/favicon.png'), category: 'Mountain' },
  { id: '3', name: 'Pina Bike', price: '1500', image: require('@/assets/images/favicon.png'), category: 'Roadbike' },
  { id: '4', name: 'Pinarello', price: '1900', image: require('@/assets/images/favicon.png'), category: 'Mountain' },
  { id: '5', name: 'Pinarello', price: '2700', image: require('@/assets/images/favicon.png'), category: 'Roadbike' },
  { id: '6', name: 'Pinarello', price: '1500', image: require('@/assets/images/favicon.png'), category: 'Mountain' },
];

const BikeCard = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBikes = selectedCategory === 'All' 
    ? bikeList 
    : bikeList.filter(bike => bike.category === selectedCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>
      
      {/* Thanh lọc */}
      <View style={styles.category}>
        <Pressable 
          style={[styles.categoryItem, selectedCategory === 'All' && styles.active]}
          onPress={() => setSelectedCategory('All')}
        >
          <Text style={selectedCategory === 'All' ? styles.activeText : styles.categoryText}>All</Text>
        </Pressable>

        <Pressable 
          style={[styles.categoryItem, selectedCategory === 'Roadbike' && styles.active]}
          onPress={() => setSelectedCategory('Roadbike')}
        >
          <Text style={selectedCategory === 'Roadbike' ? styles.activeText : styles.categoryText}>Roadbike</Text>
        </Pressable>

        <Pressable 
          style={[styles.categoryItem, selectedCategory === 'Mountain' && styles.active]}
          onPress={() => setSelectedCategory('Mountain')}
        >
          <Text style={selectedCategory === 'Mountain' ? styles.activeText : styles.categoryText}>Mountain</Text>
        </Pressable>
      </View>

      <View style={styles.list}>
        {filteredBikes.map((bike) => (
          <BikeItem 
            key={bike.id} 
            bike={bike} 
            onPress={() => router.push({ pathname: '/BikeDetail' as any, params: { id: bike.id } })} 
          />
        ))}
      </View>
    </View>
  );
};

const BikeItem = ({ bike, onPress }: { bike: Bike; onPress: () => void }) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.heart}>♡</Text>
      <Image source={bike.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{bike.name}</Text>
      <Text style={styles.price}>
        <Text style={styles.dollar}>$</Text>
        {bike.price}
      </Text>
    </Pressable>
  );
};

export default BikeCard;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 12 },
  title: { color: '#f44336', fontSize: 17, fontWeight: 'bold', marginTop: 5, marginBottom: 20 },
  
  category: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, gap: 10 },
  categoryItem: { flex: 1, height: 34, borderWidth: 1, borderColor: '#f2bcbc', borderRadius: 6, justifyContent: 'center', alignItems: 'center' },
  
  active: { backgroundColor: '#ffebee', borderColor: '#f44336' },
  
  // 2. Thêm userSelect: 'none' để chống bôi đen chữ trên Web
  categoryText: { color: '#aaa', fontSize: 12, fontWeight: '500', userSelect: 'none' },
  activeText: { color: '#f44336', fontSize: 12, fontWeight: 'bold', userSelect: 'none' },

  list: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', height: 175, backgroundColor: '#fff5ed', borderRadius: 10, marginBottom: 15, alignItems: 'center', padding: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, elevation: 3 },
  heart: { position: 'absolute', left: 10, top: 8, fontSize: 22, color: '#555', zIndex: 1, userSelect: 'none' },
  image: { width: '90%', height: 100, marginTop: 10 },
  name: { fontSize: 13, color: '#333', fontWeight: '600', marginTop: 8, userSelect: 'none' },
  price: { fontSize: 13, color: '#222', marginTop: 4, fontWeight: 'bold', userSelect: 'none' },
  dollar: { color: '#ff6b35' },
});