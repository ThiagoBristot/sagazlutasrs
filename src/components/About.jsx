import React from 'react';
import aboutimg from '../assets/img_about.jpeg'
const About = () => (
  <div className="about">
    <div className='about-title'><h2>Sobre a Equipe</h2></div>
    <p>A equipe Sagaz Lutas foi fundada com o objetivo de oferecer treinamentos de alta qualidade nas mais diversas modalidades de artes marciais. Com um instruturor experiente e altamente qualificado, chamado Diego Castilho Costa, faixa preta em Kickboxing e mestre em muay thai. O foco da sagaz é proporcionar aos alunos uma experiência única, onde o desenvolvimento físico e mental se encontram.
      Nós acreditamos que o treinamento de artes marciais é mais do que aprender técnicas de combate; é sobre autoconfiança, disciplina, respeito e perseverança. Cada aula é estruturada para desafiar nossos alunos a superar seus limites e alcançar novos patamares de excelência, independentemente do seu nível de experiência.
    </p>
    <section className='about-section'>
      <div className='about-div'>
        <img src={aboutimg} alt="imagem" className='img-about'/>
        <p className='img-about-desc'>Sessão de fotos, com o treinador castilho e atletas</p>
      </div>
    
      <div className='p1-about'>
        <p>Com modalidades como Boxe, Jiu-Jitsu, Kickboxing e Muay Thai, nossa equipe se dedica a ensinar e aprimorar as habilidades necessárias para o sucesso em cada disciplina, criando um ambiente de aprendizado dinâmico e inspirador.</p>
      </div>
    </section>
    <div className='p2-about-div'>
      <p className='p2-about'>Além disso, nos preocupamos com a evolução individual de cada aluno, garantindo que todos recebam o apoio necessário, tanto em termos técnicos quanto motivacionais. Nossa missão é construir campeões não só dentro do tatame, mas também na vida.</p>
    </div>
  </div>
);

export default About;
