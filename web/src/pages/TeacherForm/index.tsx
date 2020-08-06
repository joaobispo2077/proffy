import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import { useHistory } from 'react-router-dom';

import './styles.css'

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';





function TeacherForm() {
    const history = useHistory();

    const [name, setName ] = useState('');
    const [avatar, setAvatar ] = useState('');
    const [whatsapp, setWhatsapp ] = useState('');
    const [bio, setBio ] = useState('');
    
    const [subject, setSubject ] = useState('');
    const [cost, setCost ] = useState('');


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

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert("Cadastro realizado com sucesso, boas aulas!");
            history.push('/');

        }).catch(() => {
            alert("Erro no cadastro, tente novamente!");
        });
    }

        function setScheduleItemValue(position: number, field: string, value: string) {
            const updatedScheduleItem = scheduleItems.map((scheduleItem, index) => {

            if (index === position) {
                return { ...scheduleItem, [field]: value}
            }

            return scheduleItem;
            });
            setscheduleItems(updatedScheduleItem);

        }
        
    
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo, é preencher esse formulário de inscrição."
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input 
                            name="name" 
                            label="Nome Completo" 
                            value={name} 
                            onChange={(e) => {setName(e.target.value)}}
                        />
                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={avatar} 
                            onChange={(e) => {setAvatar(e.target.value)}}
                        />
                        <Input
                            name="whatsapp" 
                            label="Whatsapp"
                            value={whatsapp} 
                            onChange={(e) => {setWhatsapp(e.target.value)}}
                        />
                        <Textarea 
                            name="bio" 
                            label="Biografia"
                            value={bio} 
                            onChange={(e) => {setBio(e.target.value)}}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Matéria e custo/aula</legend>
                        <Select 
                            name="subject" 
                            label="Matéria"
                            value={subject}
                            onChange={(e) => {setSubject(e.target.value)}}
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
                        <Input 
                            name="cost" 
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => {setCost(e.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>
                            {scheduleItems.map((scheduleItem, index) => {
                                return (
                                    <div key={scheduleItem.week_day + index} className="schedule-item">
                                        <Select 
                                            name="week-day" 
                                            label="Dia da semana"
                                            value={scheduleItem.week_day}
                                            onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                        <Input 
                                            name="from" 
                                            label="Das"
                                            type="time" 
                                            value={scheduleItem.from}
                                            onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                                        />
                                        <Input 
                                            name="to" 
                                            label="Até" 
                                            type="time" 
                                            value={scheduleItem.to}
                                            onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                                        />
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
                        <button type="submit">
                            Salvar Cadastro
                        </button>

                </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;