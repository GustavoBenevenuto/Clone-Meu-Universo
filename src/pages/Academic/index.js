import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardBall from '../../components/CardBall';


export default function Academic() {

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
                    <Text style={s.titleHeader}>Acadêmico</Text>
                </View>
            </View>

            <View style={s.content}>
                <ScrollView>
                    <View style={s.contentCard}>

                        <CardBall sourceImage={require('../../assets/academico/calendar.png')}
                            title="Calendário Acadêmico" onPress={() => {}}/>

                        <CardBall sourceImage={require('../../assets/academico/photo.png')}
                            title="Atividade Complementar"  onPress={() => {}}/>

                        <CardBall sourceImage={require('../../assets/academico/test.png')}
                            title="Datas de Provas"  onPress={() => {}}/>

                        <CardBall sourceImage={require('../../assets/academico/pin.png')}
                            title="Encontrar Gestor"  onPress={() => {}}/>

                        <CardBall sourceImage={require('../../assets/academico/compass.png')}
                            title="Encontrar Professor"  onPress={() => {}}/>

                        <CardBall sourceImage={require('../../assets/academico/clock.png')}
                            title="Horários" onPress={() => {}}/>

                        <CardBall sourceImage={require('../../assets/academico/grade.png')}
                            title="Notas e Faltas"  onPress={() => navigation.navigate('Grade')}/>
                        
                        {/* Vazias */}
                        <CardBall backgroundColor="#F3F3F3" />

                        <CardBall backgroundColor="#F3F3F3" />
                        {/* Vazias */}

                        

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
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: "wrap",
    },
    // ------------- Content -------------
});