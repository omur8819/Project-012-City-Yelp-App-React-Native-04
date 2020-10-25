import axios from 'axios';
import React, { useState } from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const CityList = (props) => {
    const [cityList, setCityList] = useState([]);

// ASNC-AWAIT
    const fetchCityData = async () => {
        const {data} = await axios.get("https://opentable.herokuapp.com/api/cities");
        console.log(data);

    }

    return(
    <SafeAreaView>
        <View>
            <Text>CityList</Text>
        </View>
    </SafeAreaView>
    )
}

export {CityList};



