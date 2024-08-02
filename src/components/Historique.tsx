import { Image, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Colors } from "@/src/constants/Colors";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Order = {
  id: number;
  created_at: string;
  status: string;
  total_price: number;
  user_id: number;
  product_images?: string[]; 
};

type HistoriqueProps = {
  order: Order;
};

const Historique: React.FC<HistoriqueProps> = ({ order }) => {
  return (
    <View style={styles.container}>
      {order.product_images && order.product_images.length > 0 && (
        <Image source={{ uri: order.product_images[0] }} style={styles.imageorder} />
      )}
      <View style={styles.textContainer}>
        <View style={styles.topRightIconContainer}>
          <FontAwesome name="trash-o" size={24} color="lightblue" />
        </View>
        <Text style={styles.text}>Commande #{order.id}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{new Date(order.created_at).toLocaleString()}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="eye" size={20} color="lightblue" style={styles.icon} />
          <AntDesign name="star" size={20} color="lightblue" style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

export default Historique;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20,
    borderRadius: 25,
    position: 'relative',
  },
  imageorder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  topRightIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  text: {
    fontSize: 13,
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  date: {
    fontSize: 13,
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    marginLeft: 10,
  },
});
