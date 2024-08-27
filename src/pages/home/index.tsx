import React from 'react'
import './styles.css'

const Home = () => {
    return (
        <div className='home'>
            <h1>Home</h1>
            <h2>O que é um todo list?</h2>
            <p>Um todo list é uma lista de tarefas a serem realizadas. Pode ser usado para organizar tarefas que precisam ser feitas, organizando assim sua rotina ou o que quer que seja!</p>
            <p>Para usar, deve ser adicionado um título à sua tarefa, isso adicionará a tarefa à sua lista de tarefas.</p>
            <p>Após finalizar a tarefa, basta clicar no quadrado ao lado de seu nome, e ela sairá da sua todo list!</p>
        </div>
    )
}

export default Home;