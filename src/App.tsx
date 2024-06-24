// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Create from './components/Create';

function App() {
    return (
        <Provider store={store}>
            <Create />
        </Provider>
    );
}

export default App;
