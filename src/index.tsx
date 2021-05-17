import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MyForm from "./components/Form/Form";


ReactDOM.render(
   <React.StrictMode>
       <div className="wrapper">
           <MyForm onSubmit={({email,topic, firstName, text}) => {console.log({email, topic, firstName, text})}}/>
       </div>
   </React.StrictMode>,
   document.getElementById('root')
);
