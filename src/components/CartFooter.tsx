import {FlatList, StyleSheet, View, Text} from "react-native";
import React from "react";
import PriceComponent from "@/src/components/PriceComponent";
import {useState, useMemo} from "react";
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

type Props = {
    price: string;
}
const CartFooter = (props: Props) => {
    const {
        price
    } = props;

    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Option 1',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Option 2',
            value: 'option2'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState<string | undefined>();

    return (
        <View style={styles.products}>
            <PriceComponent price={price} />

            <RadioGroup
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    products: {
        rowGap: 20
    }
});

export default CartFooter;