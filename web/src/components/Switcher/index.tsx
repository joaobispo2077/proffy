import React from 'react';

import './styles.css';
import { ThemeName } from '../../assets/styles/themes';

interface Props{
    themeName: ThemeName;
    setThemeName: (newName: ThemeName) => void;
}

function Switcher<Props>({ themeName, setThemeName}){
    return (
        <div className={`switcher ${themeName === 'light' ? 'dark' : 'light'}`} onClick={() => {alert('oi')}}></div>
    )
}

export default Switcher;