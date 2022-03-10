import styled from 'styled-components';
import React from 'react';


const TextContainer = styled.div`
    text-align: center;
    padding: 2rem 1.5rem;
    margin: 3rem 1rem   ;
    `;
    const TextHeading = styled.h1`
    padding-bottom:1rem;
    font-weight: 600;
    font-size: 2.5 rem;
    `;
    const Text = styled.p`
    font-size:1.15rem;
    `;

const IntroContainer = () => {

    return <>
    <div className="fluid-container my-2">
        <TextContainer>
            <TextHeading>PNEUMOTHORAX SEGMENTATION APP</TextHeading> 
            <Text><div style={{'textAlign':'justify'}}>Do you know every year thousands of people die as they are not cured in time by Pneumothorax?
                The tedious and difficult task can be solved. We have brought a solution to effectively
                segment the Pneumothorax affected region from the X-ray.</div>  </Text>
        </TextContainer>

    </div>
    </>;
};

export default IntroContainer;
