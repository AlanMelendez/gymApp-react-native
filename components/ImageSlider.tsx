import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { SliderImagesReference } from '../constants/images';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ImageSlider = () => {
    return (
        <View style={styles.container}>
            <Swiper
                autoplay
                autoplayTimeout={4}
                showsPagination
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                loop
            >
                {SliderImagesReference.map((image, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={image} style={styles.image} resizeMode="cover" />
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(100),
        height: hp(30),
        alignSelf: 'center',
        borderRadius: 30,
        overflow: 'hidden'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: wp(90),
        height: hp(30),
        borderRadius: 20,
    },
    dot: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 3,
    },
});

export default ImageSlider;