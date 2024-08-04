import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const StarRating = ({ stars }: {stars: number}) => {
    const totalStars = 5;

    return (
        <View style={styles.starContainer}>
            {[...Array(totalStars)].map((_, index) => (
                <FontAwesome
                    key={index}
                    name="star"
                    size={24}
                    color={index < stars ? "#b9cb00" : "#fff"}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row',
    },
});

export default StarRating;
