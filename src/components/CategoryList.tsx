import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from "@/src/constants/Colors";
import React, {useEffect, useState} from 'react';
import {readAllCategory} from "@/src/api/categories";
import {Tables} from "@/src/lib/types";

const CategoryList = () => {
  const [categories, setCategories] = useState<Tables<'categories'>[]>([]);

  useEffect(() => {
    let ignore = false;

    const fetchCategories = async () => {
      const res = await readAllCategory();
      if (!ignore) {
        setCategories(res.data);
      }
    };

    fetchCategories();

    return () => {
      ignore = true;
    }

  }, []);

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <View key={category.id} style={styles.item}>
          <Image source={{ uri: category.image }} style={styles.imageCategory} />
          <Text style={styles.text}>{category.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 20,
  },
  item: {
    alignItems: 'center',
  },
  imageCategory: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10, 
  },
  text: {
    fontSize: 13,
  },
});
