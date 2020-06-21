import React, {useEffect, useState} from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const Login = () => {

    const [user, setUser] = useState('');


    const navigation = useNavigation();

    function handleTextInput(value){
        setUser(value);
        AsyncStorage.setItem('nome',value.toString());
    }

    return (
        <View style={s.container}>
            <View style={s.header}>
                <Image style={s.imagemHeader}
                    source={require('../../assets/logo-universo.png')} />
            </View>

            <ScrollView style={{flex: 1}}>
                <View style={s.content}>
                    <View style={s.contentInput}>
                        <Text style={s.titleInput}>Mátricula</Text>
                        <View style={s.containerInput}>
                            <Image style={s.imageInput}
                                source={require('../../assets/name.png')} />
                            <TextInput placeholder="Matricula" style={s.input} 
                            onChangeText={(value) => handleTextInput(value)}
                            keyboardType="numeric"/>
                        </View>
                    </View>

                    <View style={s.contentInput}>
                        <Text style={s.titleInput}>Senha</Text>
                        <View style={s.containerInput}>
                            <Image style={s.imageInput}
                                source={require('../../assets/password.png')} />
                            <TextInput placeholder="Senha" secureTextEntry={true} style={s.input} />
                        </View>
                    </View>
                </View>

                <View style={s.footer}>
                    <TouchableOpacity style={s.button} activeOpacity={0.6} 
                    onPress={() => navigation.navigate('Menu')}>
                        <Text style={s.titleButton}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3F3", //F3F3F3
    },

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 35,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    footer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // ------------- Header ------------- 
    imagemHeader: {
        width: 160,
        height: 165,
    },
    // ------------- Header ------------- 


    // ------------- Content -------------
    containerInput: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: '#DBDADA',
        width: '90%',
        alignItems: 'center',
    },

    imageInput: {
        width: 30,
        height: 30,
    },

    input: {
        width: '90%',
        paddingLeft: 10,
    },

    titleInput: {
        width: 250,
        fontSize: 20,
        color: '#102D69',
    },

    contentInput: {
        marginBottom: 30,
    },
    // ------------- Content -------------


    // ------------- Footer -------------
    button: {
        borderRadius: 5,
        backgroundColor: '#102D69',
        width: '90%', // 300
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleButton: {
        fontSize: 20,
        color: '#FFF',
    },
    // ------------- Footer -------------
});

export default Login;
