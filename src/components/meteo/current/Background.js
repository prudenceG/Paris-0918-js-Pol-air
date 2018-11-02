import React from 'react';

import './Background.css';

/*
Le composent Background récupère le nom de fichier de l'icon
provenant de l'API (par exemple 01d), pour récupérer le chemin d'accès
de l'image correspondante.
*/

const Background = ({imgBackground}) => {

    return (
        
        <div>

            <img 
                src={require(`../../../img/backgrounds/bkg${imgBackground}.jpg`)} 
                className="meteoBackground" 
                alt="Temps actuel" 
            />
            
        </div>
    )
}

export default Background;