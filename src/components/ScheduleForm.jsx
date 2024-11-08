import React, { useState } from 'react';
import castilhoschedule from '../assets/castilhoschedule.png'

const ScheduleForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sport, setSport] = useState('');
  const [turn, setTurn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Número de WhatsApp fictício (substitua pelo número real quando disponível)
    const whatsappNumber = "54996847293"; // Código do país + código de área + número

    // Mensagem formatada
    const message = `Olá! Gostaria de agendar uma aula.
    \nNome: ${name}
    \nIdade: ${age}
    \nModalidade: ${sport}
    \nTurno: ${turn}`;

    // Formatar a mensagem para URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirecionar para o link do WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="schedule-form">
      <div className='schedule-form-div'>
        <div className='schedule-title-div'>
          <h2 style={{ marginBottom: "5vh" }}>Agende Sua Aula</h2>
        </div>
        <div className='schedule-sagaz-div'>
          <h4>Seja <h3>SAGAZ</h3>você também!</h4>
        </div>
        <div className='form-img-div'>
          <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Idade:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />

            <label>Modalidade:</label>
            <select
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              required
            >
              <option value="">Selecione a modalidade</option>
              <option value="Boxe">Boxe</option>
              <option value="Kickboxing">KickBoxing</option>
              <option value="Muay Thai">Muay Thai</option>
              <option value="Jiu-jitsu">Jiu-jitsu</option>
            </select>

            <label>Turno:</label>
            <select
              value={turn}
              onChange={(e) => setTurn(e.target.value)}
              required
            >
              <option value="">Selecione o turno</option>
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
            </select>

            <button type="submit">Agendar no WhatsApp</button>
          </form>

          <div className='inform-img-div'>
            <img src={castilhoschedule} alt="" className='inform-img'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleForm;
