import React from 'react';

import './styles.css';
import { ThemeName } from '../../assets/styles/themes';

interface Props{
    themeName: ThemeName;
    setThemeName: (newName: ThemeName) => void;
}

const Switcher: React.FC<Props> = ({ themeName, setThemeName}) => {

    function toggleTheme(){
        setThemeName(themeName === 'light' ? 'dark' : 'light');
    }
    return (
        <div className={`switcher ${themeName === 'light' ? 'dark' : 'light'}`} onClick={toggleTheme}></div>
    )
}

export default Switcher;