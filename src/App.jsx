import { useState } from 'react';
import './App.css';
import Events from './Componemts/events.jsx';

function App() {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [aceito, setAceito] = useState(false);
  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    // Cancela o recarregamento da página
    event.preventDefault();
    
    if (nome === '' || email === '' || !aceito) {
      alert('Por favor, preencha todos os campos e aceite a política de privacidade.');
      return;

    }

    // Limpar campos
    setNome('');
    setEmail('');
    setAceito(false);
  };

  return (
    <div>
      <header>
        <img src="/src/assets/logo-tiki.svg" alt="Logo da TIKI" />
      </header>
      <main>
        <h1>cuidado, ao rolar pode conter...</h1>
        <img src="/src/assets/icon-yellow.svg" alt="" />
        <img src="/src/assets/tittle1.svg" alt="" class="p-5"/>
        <img src="/src/assets/arrow down.svg" alt="" class="p-5"/>
        <div>
          <Events
            image1="/public/imagem.jpg"
            image2="/src/assets/Duração3.png"
            alt1="Imagem de um evento 1"
            alt2="Imagem de um evento 2"
          />
        </div>
      </main>

      <footer>
        <img src="/src/assets/tittle2.svg" alt="" class="p-5" />
        <img src="/src/assets/icon-yellow(1).svg" alt="" class="p-5" />
        <div id="cadastro">
          <p class="p-5">cadastre-se e fique por dentro das novidades</p>
          <form class="p-5" onSubmit={handleSubmit}>
            <input
              id='nome'
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              id='email'
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="checkbox">
              <input
                id="radio"
                type="radio"
                checked={aceito}
                onChange={(e) => setAceito(e.target.checked)}
              />
              <label>
                Declaro que li e aceito a <a href="#">política de privacidade</a>
              </label>
            </div>
            <button type="submit" id="enviar">Enviar</button>
          </form>
        </div>
        <div id='texto-legal'>
          <h2>Texto Legal</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio dolorem nostrum in adipisci corporis est nemo obcaecati nam architecto, culpa itaque natus unde nulla minima. Laudantium minus voluptatum quibusdam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio dolorem nostrum in adipisci corporis est nemo obcaecati nam architecto, culpa itaque natus unde nulla minima. Laudantium minus voluptatum quibusdam.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
