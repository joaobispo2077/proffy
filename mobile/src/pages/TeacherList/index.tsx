import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';

import { Feather } from '@expo/vector-icons';

import api from '../../services/api';
import styles from './styles'
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
        const [isFiltersVisible, setIsFiltersVisible] = useState(false);

        const [teachers, setTeachers] = useState([]);

        const [favorites, setFavorites] = useState<number[]>([]);

        const [subject, setSubject] = useState('');
        const [week_day, setWeekDay] = useState('');
        const [time, setTime] = useState('');

        function loadFavorites() {
                AsyncStorage.getItem('favorites').then(response => {
                        if (response) {

                                const favoritedTeachers = JSON.parse(response);
                                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                                        return teacher.id
                                });
                                setFavorites(favoritedTeachersIds);
                        }
                });
        }

        useFocusEffect(() => {
                loadFavorites();
        }) ;


        function handleToggleFilterVisible() {
                setIsFiltersVisible(!isFiltersVisible);
        }

     async function handleFiltersSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
                                params: {
                                subject,
                                week_day,
                                time
                                }
                        })
            
        setTeachers(response.data)

        console.log(response.data);

        setIsFiltersVisible(false);

        }

        return (
        <View style={styles.container}>
                <PageHeader 
                        title="Proffys disponíveis" 
                        headerRight={
                        <BorderlessButton onPress={handleToggleFilterVisible}>
                                <Feather size={32} name="filter" color="#FFF"/>
                        </BorderlessButton>     
                }>
                        { isFiltersVisible && (
                                <View style={styles.searchForm}>
                                        <Text style={styles.label}>Matéria</Text>
                                        <TextInput

                                                value={subject}
                                                onChangeText={text => setSubject(text)}
                                                style={styles.input}
                                                placeholder="Qual a matéria?"
                                                placeholderTextColor="#c1bccc"
                                        />

                                        <View style={styles.inputGroup}>
                                                <View style={styles.inputBlock}>
                                                        <Text style={styles.label}>Dia da semana</Text>
                                                        <TextInput

                                                                value={week_day}
                                                                onChangeText={text => setWeekDay(text)}
                                                                style={styles.input}
                                                                placeholder="Qual o dia?"
                                                                placeholderTextColor="#c1bccc"
                                                        />
                                                </View>

                                                <View style={styles.inputBlock}>
                                                        <Text style={styles.label}>Horário</Text>
                                                        <TextInput

                                                                value={time}
                                                                onChangeText={text => setTime(text)}
                                                                style={styles.input}
                                                                placeholder="Qual o horário?"
                                                                placeholderTextColor="#c1bccc"
                                                        />
                                                </View>
                                        </View>
                                        <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                                                <Text style={styles.submitButtonText}>Filtrar</Text>
                                        </RectButton>

                                </View>
                        )}
                </PageHeader>
        <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingBottom: 16,
                }}
        >
                {teachers.map((teacher: Teacher) => {
                        return (
                        <TeacherItem 
                                key={teacher.id} 
                                teacher={teacher}
                                favorited={favorites.includes(teacher.id)}
                        />
                        )
                        }
                )}

        </ScrollView>
        </View>
        )
}

export default TeacherList;