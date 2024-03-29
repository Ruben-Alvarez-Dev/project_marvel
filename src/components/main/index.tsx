import { Flex } from '../styled.components';
import { Carrousel } from './Carrousel';
import { Info } from './Info';

export const Main = () => {
    
    const theme = {
        primary: true,
        
    }   

    return (
        <>
            <Flex>
                <Carrousel />
                <Info />
            </Flex>
        </>
    );
} 