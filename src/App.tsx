import './App.css'
import { useState } from 'react';
import { EmailService } from './services/EmailService';

function App() {
  const [destinatario, setDestinatario] = useState('');
  const [assunto, setAssunto] = useState('');
  const [corpo, setCorpo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarEmail = () => {
    const email = new EmailService();
    email.enviar(destinatario, assunto, corpo);
    setMensagem('E-mail enviado com sucesso!');
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Destinatário"
        value={destinatario}
        onChange={e => setDestinatario(e.target.value)}
      />
      <input
        type="text"
        placeholder="Assunto"
        value={assunto}
        onChange={e => setAssunto(e.target.value)}
      />
      <textarea
        placeholder="Corpo do e-mail"
        value={corpo}
        onChange={e => setCorpo(e.target.value)}
      />
      <button onClick={enviarEmail}>Enviar</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default App