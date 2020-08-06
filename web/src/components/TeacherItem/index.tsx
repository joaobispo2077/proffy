import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

const TeacherItem = () => {
    return (  
        <article className="teacher-item">
        <header>
            <img src="https://i.pinimg.com/564x/d8/4c/4a/d84c4a6f6388070de27f55d155c629a6.jpg" alt="Viviane Queiroz"/>
            <div>
                <strong>Viviane</strong>
                <span>Biologia</span>
            </div>
        </header>
        <p>
        Aficionada e inspirada pela junção "mágica" de tecnologia com o estudo da vida.
        <br/>
        <br/>
        Inpulsionada a disseminar à tão moderna biotecnologia, busca aprimora-lá com programação para causar impacto positivo na vida das pessoas por meio dessa área recente.
        </p>
        <footer>
            <p>
                Investimento/hora da aula
                <strong>R$ 100,00</strong>
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