import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Card from '../../components/Card';

export default function Menu() {

    const [user, setUser] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        AsyncStorage.getItem('nome')
            .then(response => setUser(response))
            .catch(e => console.log(e));
    }, []);

    return (
        <>
            {/* <StatusBar barStyle="dark-content" backgroundColor="#FFC53C" translucent/>  */}
            <View style={s.header}>
                <View style={s.notification}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <Image style={s.imageNotification} source={require('../../assets/back.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.6}>
                        <Image style={s.imageNotification} source={require('../../assets/notification.png')} />
                    </TouchableOpacity>
                </View>
                <View style={s.contentHeader}>
                    <Image style={s.imageHeader} source={require('../../assets/academico/Gustavo-Perfil.png')} />
                    <View style={s.contetnTextHeader}>
                        <Text style={s.titleHeader}>Olá, Gustavo</Text>
                        <Text style={s.registryHeader}>{user}</Text>
                    </View>
                </View>
            </View>

            <View style={s.content}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 20 }}>
                    <Card sourceImage={require("../../assets/school.png")} title="Acadêmico"
                        description="Caléndario, atividades..." onPress={() => navigation.navigate('Academic')} />

                    <Card sourceImage={require("../../assets/book.png")} title="Biblioteca"
                        description="Empréstimos, reservas..." onPress={() => {}}/>

                    <Card sourceImage={require("../../assets/user.png")} title="Carteirinha Estudante"
                        description="Matrícula, situação..." onPress={() => {}} />

                    <Card sourceImage={require("../../assets/bank.png")} title="Financeiro"
                        description="Cotas, Débitos..." onPress={() => {}} />

                    <Card sourceImage={require("../../assets/chat.png")} title="Fale Aluno"
                        description="Fale conosco..." onPress={() => {}} />

                    <Card sourceImage={require("../../assets/prescription.png")} title="Protocolo"
                        description="Abertura, situação..." onPress={() => {}} />
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
        flex: 2,
        alignItems: 'center',
    },


    // ------------- Header ------------- 
    notification: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        // backgroundColor: "#FFC53C",
    },

    imageNotification: {
        width: 30,
        height: 30,
    },

    contentHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },

    imageHeader: {
        width: 150,
        height: 150,
    },

    contetnTextHeader: {
        marginLeft: 5,
        marginTop: 70,
    },

    titleHeader: {
        fontSize: 23,
        color: '#102D69',
    },

    registryHeader: {
        fontSize: 16,
        color: '#102D69',
    },
    // ------------- Header -------------



    // ------------- Content -------------
    // ------------- Content -------------
});