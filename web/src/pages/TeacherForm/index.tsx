import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css'

import warningIcon from '../../assets/images/icons/warning.svg';





function TeacherForm() {

    const [scheduleItems, setscheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);
    
    function addNewScheduleItem(){
        if (scheduleItems.length < 7){
            setscheduleItems([
                ...scheduleItems,
                { week_day: 0, from: '', to: '' }
            ]);

        } else {
         return null
        }       
    
    }
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo, é preencher esse formulário de inscrição."
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>
                </fieldset>
                <fieldset>
                    <legend>Seus dados</legend>
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
                    <Input name="cost" label="Custo da sua hora por aula"/>
                    <Textarea name="bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>
                        {scheduleItems.map(scheduleItem => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
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
                                    <Input name="from" label="Das" type="time" />
                                    <Input name="to" label="Até" type="time" />
                            </div>
                            );
                        })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante !<br />
                        Preencha todos os dados.
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>

                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;