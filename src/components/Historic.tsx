import { Image, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Colors } from "@/src/constants/Colors";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import BodyFontSmall from "@/src/components/typography/BodyFontSmall";

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
  icon: JSX.Element;
};

const Historic: React.FC<HistoriqueProps> = ({ order, icon }) => {
  return (
    <View style={styles.container}>
      {order.product_images && order.product_images.length > 0 && (
        <Image source={{ uri: order.product_images[0] }} style={styles.imageorder} />
      )}
      <View style={styles.textContainer}>
        <View style={styles.topRightIconContainer}>
          <FontAwesome name="trash-o" size={24} color="#0F8ACE" />
        </View>
        <BodyFontSmall text={`Commande #${order.id}`} textStyle={styles.text} />
        <View style={styles.dateContainer}>
          <BodyFontSmall text={new Date(order.created_at).toLocaleString()} textStyle={styles.text} />
        </View>
        <View style={styles.bottomContainer}>
          <BodyFontSmall text={`Status : ${order.status}`} textStyle={styles.status}/>
          <View style={styles.iconsContainer}>
            <AntDesign name="eye" size={20} color="#0F8ACE" style={styles.icon} />
            {icon}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Historic;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20,
    borderRadius: 10,
    borderColor: '#f4f4f4',
    borderWidth: 1,
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
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'center'
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
  status: {
    fontSize: 13,
    marginBottom: 10,
    color: '#00954A',
  },
});
