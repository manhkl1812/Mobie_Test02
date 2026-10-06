import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const BikeCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>
      <View style={styles.category}>
        <View style={[styles.categoryItem, styles.active]}>
          <Text style={styles.activeText}>All</Text>
        </View>
        <View style={styles.categoryItem}>
          <Text style={styles.categoryText}>Roadbike</Text>
        </View>
        <View style={styles.categoryItem}>
          <Text style={styles.categoryText}>Mountain</Text>
        </View>
      </View>
      <View style={styles.list}>
        <BikeItem name="Pinarello" price="1800" image={require('@/assets/images/favicon.png')}/>
        <BikeItem name="Pina Mountain" price="1700"/>
        <BikeItem name="Pina Bike" price="1500"/>
        <BikeItem name="Pinarello" price="1900"/>
        <BikeItem name="Pinarello" price="2700"/>
        <BikeItem name="Pinarello" price="1500"/>
      </View>
    </View>
  )
}

const BikeItem = ({ name, price, image }: any) => {
  return (
    <View style={styles.card}>
      <Text style={styles.heart}>♡</Text>
      <Image source={image} style={styles.image} resizeMode="contain"/>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.price}>
        <Text style={styles.dollar}>$</Text>
        {price}
      </Text>
    </View>
  )
}

export default BikeCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },

  title: {
    color: '#f44336',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 20,
  },

  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  categoryItem: {
    width: '30%',
    height: 30,
    borderWidth: 1,
    borderColor: '#f2bcbc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  active: {
    backgroundColor: '#fff',
  },

  categoryText: {
    color: '#aaa',
    fontSize: 11,
  },

  activeText: {
    color: '#f44336',
    fontSize: 11,
  },

  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    height: 165,
    backgroundColor: '#fff5ed',
    borderRadius: 7,
    marginBottom: 10,
    alignItems: 'center',
    padding: 5,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
  },

  heart: {
    position: 'absolute',
    left: 7,
    top: 3,
    fontSize: 21,
    color: '#555',
    zIndex: 1,
  },

  image: {
    width: '90%',
    height: 105,
    marginTop: 4,
  },

  name: {
    fontSize: 11,
    color: '#777',
    marginTop: 2,
  },

  price: {
    fontSize: 12,
    color: '#222',
    marginTop: 3,
  },

  dollar: {
    color: '#ff6b35',
  },
})
