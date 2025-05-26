import { useState } from 'react'
import './App.css'
import image from '/public/imagem.jpg'

function App() {

  return (
    <div>
      <header>
        <img src="/src/assets/logo-tiki.svg" alt="Logo da TIKI" />
      </header>
      <main>
        <p>cuidado, ao rolar pode conter</p>
        <img src="/src/assets/icon-yellow.svg" alt="" />
        <img src="/src/assets/tittle1.svg" alt="" />
        <img src="/src/assets/arrow down.svg" alt="" />
        <img src="/public/imagem.jpg" alt="" />
      </main>
      <footer>
        <img src="/src/assets/tittle2.svg" alt="" />
        <img src="/src/assets/icon-yellow(1).svg" alt="" />
        <div>
          <p>cadastre-se e fique por dentro das novidades</p>
          <form>
            <input type="text" />
            <input type="email" placeholder="Digite seu e-mail" />
            <input type="radio" /><label>Declaro que li e aceito a <a href="#">politica de privacidade</a></label>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <h2>Texto Legal</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis esse ullam nulla tempora sint expedita ex quas tenetur consectetur, soluta corporis alias ab quae repellendus officia eaque cumque ut delectus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae porro debitis laborum nisi ex esse maxime aliquid, tempore vero accusantium ea perspiciatis excepturi saepe, doloremque iste error sed obcaecati expedita.</p>
      </footer>
        
    </div>
  )
}

export default App
