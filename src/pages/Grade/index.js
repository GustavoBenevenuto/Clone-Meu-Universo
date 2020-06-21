import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardGrade from '../../components/CardGrade';

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
                        <CardGrade discipline="N008-N1 - HOMEM CULTURA E SOCIEDADE"
                            grades={{ v1: 10, v2: 10, vt: 10, vs: 0 }} lack={0}
                            partialAverage={5} finalAverage={10}
                            situation="Aprovado" />

                        <CardGrade discipline="N008-N1 - ENGENHARIA DE SOFTWARE"
                            grades={{ v1: 10, v2: 10, vt: 10, vs: 0 }} lack={0}
                            partialAverage={5} finalAverage={10}
                            situation="Aprovado" />

                        <CardGrade discipline="N008-N1 - BANCO DE DADOS"
                            grades={{ v1: 5, v2: 5, vt: 5, vs: 5 }} lack={6}
                            partialAverage={5} finalAverage={5}
                            situation="Reprovado" />

                        <CardGrade discipline="N008-N1 - ESTRUTURA DE DADOS"
                            grades={{ v1: 10, v2: 10, vt: 10, vs: 0 }} lack={0}
                            partialAverage={5} finalAverage={10}
                            situation="Aprovado" />

                        <CardGrade discipline="N008-N1 - ALGORITMOS E LÓGICA"
                            grades={{ v1: 10, v2: 10, vt: 10, vs: 0 }} lack={0}
                            partialAverage={5} finalAverage={10}
                            situation="Aprovado" />

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
        alignItems: 'center',
        paddingBottom: 20,
    },
    // ------------- Content -------------
});