import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css'

import warningIcon from '../../assets/images/icons/warning.svg';


function TeacherForm() {
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