import styled from 'styled-components';

interface Props {
    primary: boolean;
}

export const Button = styled.button<Props>`
    color: whote;
    border: 1px solid white;
    padding: 10px;
    border-radius: 10px;
    ${props => props.primary 
        ? 'background: green;' 
        : 'background: red;'}
`
