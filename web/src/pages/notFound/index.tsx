import React from 'react';


import image404 from "../../assets/images/404.svg";
import PageHeader from '../../components/PageHeader';

import './styles.css';

function notFound() {
    return (
        <div id="page-404-notFound" className="container">
            <PageHeader 
                title="Essa página não foi encontrada, tente retornar para a Home."
                description="Parece que algum programador tomou café demais :P"
            >
            </PageHeader>
            <div className="image-container">
                <img src={image404} alt="Página não encontrada"/>
            </div>

        </div>
    )
}

export default notFound;