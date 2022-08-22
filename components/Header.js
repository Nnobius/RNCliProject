import React from 'react';
import {gStyles} from "../styles/style";
import {HeaderLogo} from "../svg-modules/HeaderLogo";
import {Text, View} from "react-native";

export const Header = () => {
    return (
        <View style={gStyles.titleContent}>
            <HeaderLogo/>
            <Text style={gStyles.titleText}>Новости</Text>
        </View>
    );
};