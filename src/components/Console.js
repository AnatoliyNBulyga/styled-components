import React, {useState} from 'react';
import styled from 'styled-components';
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
width: 100%;
height: 70vh;
background: black;
font-size: 24px;
border: none;
color: ${props => props.color || props.theme.colors.primary};
&:focus {
  outline: none;
}
@media ${props => props.theme.media.tablet} {
border: 1px solid green;
}
@media ${props => props.theme.media.phone} {
  border: 1px solid red;
}
`;

const Console = ({color, ...props}) => {
    const startLine = 'C/users/ULBI_TV>';
    const [lines, setLines] = useState([startLine]);

    const onKeyPress = e => {
        if(e.charCode == 13) {
            setLines([...lines, startLine])
        }
    }

    return (
        <Flex>
            <Flex direction="column" margin="0 10px">
                {
                    lines.map( line =>
                        <Line key={Date.now} color={color}>{line}</Line>
                    )
                }
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    )
};

export default Console;