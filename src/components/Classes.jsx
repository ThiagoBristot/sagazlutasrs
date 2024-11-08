import React from 'react';
import castilhoemika from '../assets/castilhoemika.jpeg'
import deloi from '../assets/deloi.jpeg'
import muriel from '../assets/muriel.jpeg'
import wiliam from '../assets/wiliam.jpeg'

const Classes = () => (
  <div className="classes">
    <div className='classes-title-div'>
      <h2>Galeria</h2>
    </div>
    <div className="class-gallery">
      <div className="class-item">
        <img src={castilhoemika} alt="disciplina" />
        <h2>Coragem</h2>
        <div>
          <p>Coragem não é a ausência de medo, é a força para enfrentá-lo. permitindo-nos agir, mesmo quando o caminho é incerto.</p>
        </div>
      </div>

      <div className="class-item">
        <img src={deloi} alt="deloi" />
        <h2>Autoconfiança</h2>
        <div>
          <p>Autoconfiança é a força interna que nos impulsiona a enfrentar desafios, acreditando no próprio potencial a cada passo.</p>
        </div>
      </div>

      <div className="class-item">
        <img src={muriel} alt="muriel" />
        <h2>Disciplina</h2>
        <div>
          <p>Disciplina é a prática constante que transforma sonhos em realidade, fortalecendo cada pequeno passo rumo ao sucesso.</p>
        </div>
      </div>

      <div className="class-item">
        <img src={wiliam} alt="wiliam" />
        <h2>Resiliência</h2>
        <div>
          <p>Resiliência é a habilidade de se recuperar rapidamente dos desafios, mantendo a determinação para continuar.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Classes;
