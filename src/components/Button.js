import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Buttons = styled(Link)`
border-radius: 50px;
background: #6C63FF;
padding: 1rem 3rem;
text-decoration: none;
color: white;
font-size: 2rem;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
transition: all 0.2s ease-in-out;
-webkit-box-shadow: 0 0 10px #D3D3D3;
   box-shadow: 0 0 10px #D3D3D3;
&:hover{
transition: all 0.2s ease-in-out;
color: black;}
`;
const Button = (props) => {
  const buttonstyle = {
    fontSize: "2rem",
    paddingTop: "4px",
    paddingLeft: "5px",
    marginLeft: "2rem",
  }

  return <>
    <div className="fluid-container d-flex my-4 justify-content-center">
      <Buttons to="/converter" onClick={props.task} type='submit'>
        {props.name}
        { props.show ? <FontAwesomeIcon icon={faAngleDoubleRight} style={buttonstyle} />
         : null }
      </Buttons>

    </div>
  </>;
};
Button.defaultProps={
  show:false
}
export default Button;
