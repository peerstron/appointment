import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import SearchInput from '../../components/SearchInput';

export default function Main(){

    return(
        <View>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <Text style={{color:'#040720', fontWeight:'bold', fontSize:24}}>Appointments</Text>
                <Entypo name="dots-two-horizontal" size={24} color="black" />
            </View>

            <View  style={{ backgroundColor:'#c3c7c7', borderRadius:'20%', marginTop:30}}>
                <View style={{flexDirection:'row', alignItems:'center',margin:10}}>
                <Feather name="search" size={24} color="black" />
                <SearchInput />
                </View>
            </View>

            <View style={{marginTop: 40}}>
            <ScrollView>
                <View style={{backgroundColor: 'green'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', padding:30}}>
                        <View>
                            <Text style={{fontSize:22, fontWeight:'bold', }}>Design Meeting</Text>
                            <Text style={{fontSize:22 }}>10:00 - 11:30</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:22}}>Today</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', padding:30}}>
                        <View>
                            <View style={{width:50, height:50, borderRadius:25, backgroundColor:'red'}}></View>
                        </View>
                        <View>
                        <Feather name="phone" size={24} color="black" />
                        </View>
                    </View>
                </View>
            </ScrollView>
            </View>
        </View>
    )
} 