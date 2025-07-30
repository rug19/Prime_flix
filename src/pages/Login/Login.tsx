import "./Login.css";

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="card">
        <h1>Login</h1>
        <div className="input">
          <label htmlFor="emailInput">Email</label>
          <input id="emailInput" placeholder="Digite seu email" type="email" />
          <label htmlFor="passwordInput">Senha</label>
          <input
            id="passwordInput"
            placeholder="Digite a sua senha"
            type="password"
          />
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}
