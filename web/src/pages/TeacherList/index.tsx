import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';



import './styles.css';
function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select
                        name="subject" 
                        label="Matéria"
                        options={[
                            { value: 'Filosofia', label: 'Filosofia'},
                            { value: 'Biologia', label: 'Biologia'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'História geral', label: 'História geral'},
                            { value: 'Química', label: 'Química'},
                            { value: 'Física', label: 'Física'},
                            { value: 'Português', label: 'Português'},
                            { value: 'Inglês', label: 'Inglês'},
                            { value: 'Espanhol', label: 'Espanhol'},
                            { value: 'Geografia do Brasil', label: 'Geografia do Brasil'},
                            { value: 'História do Brasil', label: 'História do Brasil'},
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Educação Física', label: 'Educação Física'},
                        ]}
                    />
                    <Select 
                        name="week-day" 
                        label="Dia da semana"
                        options={[
                            { value: '0', label: 'Domingo'},
                            { value: '1', label: 'Segunda-feira'},
                            { value: '2', label: 'Terça-feira'},
                            { value: '3', label: 'Quarta-feira'},
                            { value: '4', label: 'Quinta-feira'},
                            { value: '5', label: 'Sexta-feira'},
                            { value: '6', label: 'Sábado'},
                        ]}
                    />
                    <Input type="time" name="time"label="Hora" />
                </form>
            </PageHeader>
            <main> 
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;