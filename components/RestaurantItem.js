import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItem = () => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        marginBottom: 30,
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 15,
          marginTop: 10,
        }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const RestaurantImage = () => (
  <>
    <Image
      source={{
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
      }}
      style={{
        width: '100%',
        height: 180,
      }}
    />
    <TouchableOpacity style={{position: 'absolute', top: 20, right: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
          }}>
          Habibi Restaurants
        </Text>
        <Text
          style={{
            color: '#bebebe',
          }}>
          35-45 . min
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          borderRadius: 40,
          width: 30,
          height: 30,
          marginTop: 4,
        }}>
        <Text
          style={{
            fontSize: 17,
            textAlign: 'center',
            marginTop: 4,
          }}>
          4
        </Text>
      </View>
    </View>
  </>
);
