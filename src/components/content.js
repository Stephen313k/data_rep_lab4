
import React from 'react';

export class Content extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello world!</h1>
                <h2>The time is {new Date().toLocaleTimeString()}</h2>
             </div>
        );
    }
}