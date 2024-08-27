import React from 'react'
import Image from '../../assets/images.jpeg'
import './styles.css'
const Sobre = () => {
    return (
        <div className='sobre'>
            <h1>Sobre</h1>
            <img src={Image}/>
            <h2>Gustavo Kraemer</h2>
            <h3>Desenvolvedor Backend</h3>
            <p>Aos 12 anos meus pais mudaram para Cascavel, PR, onde finalizei o ensino médio.</p>
            <p>Para seguir com meus estudos, escolhi a faculdade de Engenharia de Software na FAG, pois tecnologia sempre foi do meu interesse.</p>
            <p>Comecei a trabalhar na área de desenvolvimento de Software no primeiro semestre, e assim descobri que o desenvolvimento de software é algo que pretendo aprender cada vez mais e se tornou a minha profissão.</p>
            <p>Depois de entrar na área, arquitetura de software, junto ao desing de código, são meus principais interesses dentro da área, possivelmente por conta de eu já ter trabalhado com Java e ver muito claramente a diferença que esses assuntos trazem no dia a dia de um programador.</p>
            <h3><a href='https://github.com/gustavokra' target='_blank'>Github</a></h3>
        </div>
    )
}

export default Sobre;