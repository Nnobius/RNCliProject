import React from 'react';
import {gStyles} from "../../../../styles/style";
import {Text, View} from "react-native";
import {Down} from "../../../../svg-modules/Down";

export const MyButton = ({onOpen, openText}) => {
    return (
        <View style={gStyles.btnItem}>
            <Text onPress={onOpen} style={gStyles.btnTextItem}>
                {
                    openText ? 'Скрыть' : 'Подробнее'
                }
            </Text>
            <Text onPress={onOpen}><Down openText={openText}/></Text>
        </View>
    );
};