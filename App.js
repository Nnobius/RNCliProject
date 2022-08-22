/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import axios from 'axios';
import React, {useState} from 'react';
import {gStyles} from './styles/style';
import type {Node} from 'react';
import {
    View,
    Text,
} from 'react-native';
import {Header} from "./components/Header";
import {News} from "./components/News/News";

const App: () => Node = () => {
    const [items, setItems] = React.useState([])
    const [loader, setLoader] = React.useState(1)

    React.useEffect(() => {
        axios.get(`https://app-api.sm117.ru/api/v1/contract/news_for_test/`).then(res => {
            setItems(res.data)
            setLoader(1)
        })
    }, [])

    return (
        <View style={gStyles.content}>
            <Header/>
            {loader ?  <News items={items}/> : <View><Text>Please wait . . .</Text></View>}
        </View>
    )
};

export default App;
