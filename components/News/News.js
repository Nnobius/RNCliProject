import React from 'react';
import {gStyles} from "../../styles/style";
import {NewsItem} from "./NewsItem/NewsItem";
import {ScrollView, Text} from "react-native";

export const News = ({items}) => {
    return (
        <ScrollView style={gStyles.scrollBlock}>
            {
                items.map(obj => (
                    <NewsItem key={obj.id} obj={obj}/>
                ))
            }
        </ScrollView>
    );
};