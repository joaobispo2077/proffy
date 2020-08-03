import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

const TeacherItem = () => {
    return (  
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/61950209?s=460&u=ecd3bb6e8f0be5a1754dfa36f2a27cdef340ca0d&v=4" alt="Viviane Queiroz"/>
            <div>
                <strong>Viviane de Santana Queiroz</strong>
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
                Preço/hora da aula
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