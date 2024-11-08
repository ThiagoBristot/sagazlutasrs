import React from 'react';
import imghome from "../assets/castilhohome.png"
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Home = () => (
  <div className="home">
    <section>
      <div className='home-title-div'>
        <h2 className='home-title'>Aprenda a arte da defesa pessoal e torne-se <h1>SAGAZ</h1></h2>
      </div>

      <div className='home-desc-div'>
        <p>Treinos de Boxe, Jiu-jitsu, Kickboxing e Muay Thai.</p>
        <h4>Agende já!</h4>
        <button onClick={() => { scrollToSection('schedule')}}>Agendar aula</button>
      </div>
      <div className='home-img-div'>
        <img src={imghome} alt="" />
      </div>
    </section>
  </div>
);

export default Home;
