import React from 'react';
import {gStyles} from "../../../../styles/style";
import {Text} from "react-native";

export const BodyPost = ({openText, obj}) => {
    return (
        <Text numberOfLines={openText ? 0 : 3} ellipsizeMode="tail" style={gStyles.bodyItem}>
            {
                obj.body.replace(new RegExp("<br>|<br/>", 'g'), '').replace(/\<img src="https\:\/\/[\w\-\.\/]+\" \/>\s+/, '')
            }
        </Text>
    );
};