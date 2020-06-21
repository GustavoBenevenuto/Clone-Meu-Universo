import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Use path para caminhos relativos
export default function Card({ sourceImage, title, description, onPress } = props) {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <View style={s.card}>
                <Image style={s.imageCard} source={sourceImage} />
                <View style={s.areaTextCard}>
                    <Text style={s.titleCard}>{title}</Text>
                    <Text style={s.descriptionCard}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const s = StyleSheet.create({
    card: {
        backgroundColor: '#E8E8E8',
        borderRadius: 15,
        width: 350,
        height: 120,
        marginTop: 20,
        alignItems: 'center',
        paddingLeft: 10,
        flexDirection: 'row',
    },

    imageCard: {
        width: 60,
        height: 60,
    },

    areaTextCard: {
        paddingLeft: 10
    },

    titleCard: {
        fontSize: 20,
        color: '#102D69',
    },

    descriptionCard: {
        fontSize: 14,
        color: '#102D69',
    },
});