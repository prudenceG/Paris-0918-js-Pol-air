import React from 'react';
import error from './../img/404.svg';

const Page404 = () => {

    return (
        
        <div
            style={{
		        height:'100vh',
	        }}>

            <img 
                src={error} 
                style={{
                maxHeight:'80vh',
                maxWidth: '80vw',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                marginTop: '5vh'
		        }} 
                alt="error404" 
            />
            
        </div>
    )
}

export default Page404;