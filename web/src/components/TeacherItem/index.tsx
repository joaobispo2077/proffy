import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';
import api from '../../services/api';

export interface Teacher {    
        id: number;
        avatar: string;
        name: string;  
        bio: string;
        subject: string;
        cost: number;
        whatsapp: string;   
}
export interface TeacherItemProps {
    teacher: Teacher;
}
const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id,
        });
    }


    return (  
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt="Viviane Queiroz"/>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>
        <p>{teacher.bio}</p>
        <footer>
            <p>
                Custo/hora da aula
                <strong>R$ {teacher.cost}</strong>
            </p>
            {/* adicionar mensagem personalizada: ?text=Eu%20tenho%20interesse%20nas%20aulas%20de%20${teacher.subject}!%20 */}
            <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </a>
        </footer>
    </article>
    );
}

export default TeacherItem;