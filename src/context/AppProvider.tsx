import { Context } from './AppContext';
import { PropsProvider, AppState } from '../interfaces/interfaces'; // Import PropsProvider type

const state: AppState = {
    name: 'Ironman',
    url: 'https://www.marvel.io/bw',
    time: new Date().toLocaleTimeString()
}

export const AppProvider = ({ children }: PropsProvider) => {
    return (
        <Context.Provider value={{ state }}>
            { children }
        </Context.Provider>
    )
}