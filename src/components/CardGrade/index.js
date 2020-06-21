import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Use path para caminhos relativos
export default function CardGrade({ discipline, grades, lack, partialAverage, finalAverage, situation } = props) {


    const s = StyleSheet.create({
        cardGrade: {
            backgroundColor: '#E8E8E8',
            borderRadius: 15,
            width: 350,
            height: 170,
            marginTop: 20,
            paddingTop: 10,
            paddingLeft: 15,
            paddingRight: 15,

        },

        titleCard: {
            fontSize: 15,
            color: '#102D69',
        },

        areaCardTop: {
            flex: 1,
            flexDirection: 'row',
            marginTop: 5,
            paddingBottom: 5,
            borderBottomWidth: 1,
        },

        areaCardTopLeft: {
            flex: 3,
            justifyContent: 'space-around',
        },

        areaCardTopRight: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },

        areaCardBottom: {
            flex: 1,
            marginBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        areaTitleBall: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },

        areaBall: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        },

        ball: {
            backgroundColor: '#FFF',
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },

        title: {
            fontSize: 12,
            color: "#102D69",
        },

        description: {
            fontSize: 13,
            color: "#102D69",
        },

        titleSituation: {
            fontSize: 13,
            color: "#102D69",
            textAlign: 'right',
        }
    });

    return (
        <View style={s.cardGrade}>
            <Text style={s.titleCard}>{discipline}</Text>
            <View style={s.areaCardTop}>
                <View style={s.areaCardTopLeft}>
                    <View style={s.areaTitleBall}>
                        <Text style={s.title}>V1</Text>
                        <Text style={s.title}>V2</Text>
                        <Text style={s.title}>VT</Text>
                        <Text style={s.title}>VS</Text>
                    </View>
                    <View style={s.areaBall}>
                        <View style={s.ball}>
                            <Text style={s.description}>{grades.v1.toFixed(2)}</Text>
                        </View>

                        <View style={s.ball}>
                            <Text style={s.description}>{grades.v2.toFixed(2)}</Text>
                        </View>

                        <View style={s.ball}>
                            <Text style={s.description}>{grades.vt.toFixed(2)}</Text>
                        </View>

                        <View style={s.ball}>
                            <Text style={s.description}>{grades.vs === 0 ? '-' : grades.vs.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
                <View style={s.areaCardTopRight}>
                    <Text style={s.title}>FALTAS</Text>
                    <View style={s.ball}>
                        <Text style={s.description}>{lack}</Text>
                    </View>
                </View>
            </View>
            <View style={s.areaCardBottom}>
                <View>
                    <Text style={s.title}>Média Parcial</Text>
                    <Text style={s.title}>Média Final</Text>
                    <Text style={s.title}>Situação</Text>
                </View>

                <View>
                    <Text style={s.titleSituation}>{partialAverage.toFixed(2)}</Text>
                    <Text style={s.titleSituation}>{finalAverage.toFixed(2)}</Text>
                    <Text style={s.titleSituation, { color: finalAverage >= 7 ? 'green' : 'red' }}>{situation}</Text>
                </View>
            </View>
        </View>
    );
}