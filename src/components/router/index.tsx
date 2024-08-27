import React, { useState } from 'react';
import Todo from '../../pages/todo';
import Home from '../../pages/home';
import Sobre from '../../pages/sobre';
import './styles.css'

enum EnumPaginas {
    'home' = 'home',
    'todo' = 'todo',
    'sobre' = 'sobre'
}

const Router = () => {
    const [getPaginaAtual, setPaginaAtual] = useState<EnumPaginas>(EnumPaginas.home)

    const renderizarCabecario = () => (
        <div>
            <button className='button' onClick={() => setPaginaAtual(EnumPaginas.home)}>Home</button>
            <button className='button' onClick={() => setPaginaAtual(EnumPaginas.todo)}>Todo</button>
            <button className='button' onClick={() => setPaginaAtual(EnumPaginas.sobre)}>Sobre</button>
        </div>
    )

    const renderizarPagina = () => {
        switch(getPaginaAtual) {
            case EnumPaginas.home: return <Home/>
            case EnumPaginas.todo: return <Todo/>
            case EnumPaginas.sobre: return <Sobre/>
            default: return  <Home/>
        }
    }

    return (
        <div className='router'>
            {renderizarCabecario()}
            {renderizarPagina()}
        </div>
    )
}

export default Router;