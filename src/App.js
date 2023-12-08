import "./App.css";
import { TextInput } from "./components/TextInput/TextInput";
import { Button } from "./components/Button/Button";
import { Link } from "./components/Link/Link";

export default function App() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const inputs = Array.from(event.target.getElementsByTagName("input"));
    const values = {};

    inputs.forEach((input) => {
      values[input.id] = input.value;
    });

    console.log(values);
    alert("Formulario enviado com sucesso");
  };

  return (
    <div className="background" style={{ backgroundImage: "url(cam.jpg)" }}>
      <main className="main-container">
        <img
          src="cam2.png"
          width={302}
          height="auto"
          alt="NK Truck, agencias de cargas"
        />

        <form className="main-form" onSubmit={handleSubmit}>
          <TextInput id="nome" label="Nome" autoFocus required />
          <TextInput id="telefone" label="Telefone" type="tel" required />
          <TextInput id="modelo" label="Modelo" required />
          <TextInput id="placa" label="Placa" maxLength="7" minLength="7" required />

          <div className="actions">
            <Button type="submit">Cadastre-se</Button>
            <Link href="#">Seja um filiado NK</Link>
          </div>
        </form>
      </main>
    </div>
  );
}
