import { useState } from "react";
import logo from "../../public/logo.png";

//routerdom
import { Link } from "react-router-dom";
import { userDataStore } from "../../store/data";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export let dadosClientes: {
  name?: string;
  weight?: string;
  height?: string;
  age?: string;
  gender?: string;
  level?: string;
  objective?: string;
} = {};

export function DadosClient() {
  const [nome, setNome] = useState<string>();
  const [weight, setWeight] = useState<string>();
  const [height, setHeight] = useState<string>();
  const [age, setAge] = useState<string>();
  const [genere, setGenere] = useState<string>();
  const [level, setLevel] = useState<string>();
  const [objective, setObjective] = useState<string>();

  const setPageOne = userDataStore((state) => state.setPageOne);
  const navigator = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    dadosClientes = {
      name: nome,
      weight: weight,
      height: height,
      age: age,
      gender: genere,
      level: level,
      objective: objective,
    };

    setPageOne({
      name: dadosClientes?.name,
      weight: dadosClientes?.weight,
      height: dadosClientes?.height,
      age: dadosClientes?.age,
      gender: dadosClientes?.gender,
      level: dadosClientes?.level,
      objective: dadosClientes?.objective,
    });
    console.log("passando dados da página");
    navigator("/dashboard");
  }

  return (
    <main className="min-w-full min-h-screen flex items-center justify-center m-auto">
      <section className="flex-col items-center justify-center m-auto w-11/12">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex items-center justify-between"
        >
          <Link to={"/"}>
            <button>&laquo;</button>
          </Link>
          <h1 className="text-white font-bold text-2xl ">Dados Pessoais</h1>
          <img className="max-w-16" src={logo} alt="" />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          onSubmit={handleSubmit}
          className="min-w-full"
        >
          <label className="w-full">
            Nome:
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome Completo"
              required
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
              required
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
              required
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
              required
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
              <option value="" disabled selected></option>
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
              <option value="" disabled selected></option>
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
              <option value="" disabled selected></option>
              <option value="emagrecer">Perca de peso</option>
              <option value="hipertrofia">Hipertrofia Muscular</option>
            </select>
          </label>
          <button className="w-full mt-5" type="submit">
            Gerar dieta
          </button>
        </motion.form>
      </section>
    </main>
  );
}
