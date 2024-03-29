import { createContext } from 'react';
import { AppState } from '../interfaces/interfaces';

type State = {
    state: AppState;
    setState: (state: AppState) => void;
}

export const Context = createContext<State>({} as State);
