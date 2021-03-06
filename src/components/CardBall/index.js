import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default function CardBall({ sourceImage, title, backgroundColor, onPress } = props) {

    const s = StyleSheet.create({

        cardBall: {
            backgroundColor: backgroundColor ? backgroundColor : '#E8E8E8',
            width: 100,
            height: 100,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
        },

        buttonCard: {
            alignItems: 'center',
            marginBottom: 30,
        },

        imageCard: {
            width: 50,
            height: 50,
        },

        titleCard: {
            fontSize: 12,
            color: '#102D69',
            textAlign: 'center',
            width: 85,
        },
        // ------------- Content -------------
    });

    return (
        <View style={s.buttonCard}>
            <TouchableHighlight style={s.cardBall} underlayColor="#BBB" activeOpacity={0.7} onPress={onPress}>
                <Image style={s.imageCard} source={sourceImage} />
            </TouchableHighlight>
            <Text style={s.titleCard}>{title}</Text>
        </View>
    )
}

