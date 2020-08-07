import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

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
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;