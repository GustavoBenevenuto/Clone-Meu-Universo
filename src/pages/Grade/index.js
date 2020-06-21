import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Grade() {

    const navigation = useNavigation();

    return (
        <>
            {/* <StatusBar barStyle="dark-content" backgroundColor="#FFC53C" translucent/>  */}
            <View style={s.header}>
                <View style={s.areaBackHeader}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <Image style={s.imageBack} source={require('../../assets/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={s.areaTitleHeader}>
                    <Text style={s.titleHeader}>Notas e Faltas</Text>
                </View>
            </View>

            <View style={s.content}>
                <ScrollView>
                    <View style={s.contentCard}>
                        <View style={s.cardGrade}>
                            <Text style={s.titleCard}>N008-N1 - HOMEM CULTURA E SOCIEDADE</Text>
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
                                            <Text style={s.description}>10.00</Text>
                                        </View>

                                        <View style={s.ball}>
                                            <Text style={s.description}>10.00</Text>
                                        </View>

                                        <View style={s.ball}>
                                            <Text style={s.description}>10.00</Text>
                                        </View>

                                        <View style={s.ball}>
                                            <Text style={s.description}>10.00</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={s.areaCardTopRight}>
                                    <Text style={s.title}>FALTAS</Text>
                                    <View style={s.ball}>
                                        <Text style={s.description}>0</Text>
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
                                    <Text style={s.titleSituation}>5.00</Text>
                                    <Text style={s.titleSituation}>10.00</Text>
                                    <Text style={s.titleSituation, {color: 'green'}}>Aprovado</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const s = StyleSheet.create({
    header: {
        flex: 1,
        marginTop: 26,
    },

    content: {
        flex: 4,
    },

    // ------------- Header -------------
    areaBackHeader: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        paddingLeft: 20,
    },

    areaTitleHeader: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    imageBack: {
        width: 30,
        height: 30,
    },

    titleHeader: {
        fontSize: 30,
        color: '#102D69',
    },
    // ------------- Header -------------

    // ------------- Content -------------


    contentCard: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    // ball

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

    titleSituation:{
        fontSize: 13,
        color: "#102D69",
        textAlign: 'right',
    }

    // ------------- Content -------------
});