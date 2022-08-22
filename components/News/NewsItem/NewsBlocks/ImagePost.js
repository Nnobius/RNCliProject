import React from 'react';
import {Image} from "react-native";
import {gStyles} from "../../../../styles/style";

export const ImagePost = ({img}) => {
    return (
        <Image style={gStyles.imageItem} source={{uri: `${String(img).replace(/\"/g, '')}`}}/>
    );
};