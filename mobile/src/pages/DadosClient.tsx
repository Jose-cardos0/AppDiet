import { useState } from "react";
import logo from "../../public/logo.png";

//routerdom
import { Link } from "react-router-dom";

export function DadosClient() {
  const [nome, setNome] = useState<string>();
  const [weight, setWeight] = useState<string>();
  const [height, setHeight] = useState<string>();
  const [age, setAge] = useState<string>();
  const [genere, setGenere] = useState<string>();
  const [level, setLevel] = useState<string>();
  const [objective, setObjective] = useState<string>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let dadosClientes = {
      name: nome,
      weight: weight,
      height: height,
      age: age,
      gender: genere,
      level: level,
      objective: objective,
    };

    console.log(dadosClientes);
  }

  return (
    <main className="min-w-full min-h-screen flex items-center justify-center m-auto">
      <section className="flex-col items-center justify-center m-auto w-11/12">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <button>&laquo;</button>
          </Link>
          <h1 className="text-white font-bold text-2xl animate-bounce">
            Dados Pessoais
          </h1>
          <img className="max-w-16" src={logo} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="min-w-full">
          <label className="w-full">
            Nome:
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome Completo"
            />
          </label>
          <label className="w-full">
            Seu peso atual:
            <input
              type="text"
              name="nome"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Peso ex: 80"
            />
          </label>
          <label className="w-full">
            Altura:
            <input
              type="text"
              name="nome"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Altura ex: 1.85"
            />
          </label>
          <label className="w-full">
            Idade:
            <input
              type="text"
              name="nome"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Idade ex: 25"
            />
          </label>
          <label className="w-full">
            Sexo:
            <select
              name="idade"
              id="idade"
              value={genere}
              onChange={(e) => setGenere(e.target.value)}
            >
              <option value=""></option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </label>
          <label className="w-full">
            Nível de atividade física:
            <select
              name="atividade"
              id="atividade "
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value=""></option>
              <option value="baixo">Baixo: 2 a 3 dias semana</option>
              <option value="medio">Médio: 4 a 5 dias semana</option>
              <option value="alto">Alto: 5 a 7 dias semana</option>
            </select>
          </label>
          <label className="w-full">
            Selecione seu objetivo:
            <select
              name="objetivo"
              id="objetivo"
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
            >
              <option value=""></option>
              <option value="emagrecer">Perca de peso</option>
              <option value="hipertrofia">Hipertrofia Muscular</option>
            </select>
          </label>
          <button className="w-full mt-5" type="submit">
            Gerar dieta
          </button>
        </form>
      </section>
    </main>
  );
}
