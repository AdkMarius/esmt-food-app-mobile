import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const TabBar = ({ state, descriptors, navigation }) => {


    const icons = {
        index: (props) => <AntDesign name="home" size={24}  {...props} />,
        menu: (props) =>  <Feather name="menu" size={24}  {...props} />,
        panier: (props) => <Feather name="shopping-cart" size={24}  {...props} />,
        deco: (props) =>  <MaterialIcons name="logout" size={24}  {...props} />,

    }


    const Couleur1 = '#00954A';
    const Couleur2 = '#0F8ACE';

    return (
        <View style={styles.tabbar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              key={route.name}
              style={styles.tabbarItem}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
                {
                    icons[route.name]({
                        color: isFocused ? Couleur1 : Couleur2
                    })
                }

              <Text style={{ color: isFocused ? Couleur1 : Couleur2 }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
}

const styles = StyleSheet.create({
    tabbar:{
        position: 'absolute',
        bottom: 25,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor:'#F4F4F4',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius:25,
        borderCurve:'continuous',
        shadowColor: 'black',
        shadowOffset: {width:0, height:10},
        shadowRadius: 10,
        shadowOpacity: 0.1,
    },
    tabbarItem:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    }
})

export default TabBar;
