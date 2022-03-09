import { borderRadius } from '@mui/system';
import React from 'react';

const TextContainer = (props) => {
  return <>
    <figure style={{textAlign:'center'}}>
    <img src={props.image} style={{width:'200px', height:'200px',borderRadius:'50%'}} alt="..."/>
    <figcaption><b>{props.name}</b></figcaption>
    <figcaption><b>{props.rollno}</b> </figcaption>
    </figure>
  </>;
};

export default TextContainer;

