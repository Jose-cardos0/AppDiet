import { userDataStore } from "../../store/data";
import { api } from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import vector from "../assets/Vector.png";
import relogio from "../assets/clock.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function DashBoard() {
  const nutrition = userDataStore((state) => state.user);
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();

  interface Data {
    altura: number;
    idade: number;
    nome: string;
    objetivo: string;
    peso: number;
    refeicoes: any[];
    sexo: string;
    suplementos: string[];
  }

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.post("/create", {
          name: nutrition.name,
          weight: nutrition.weight,
          height: nutrition.height,
          age: nutrition.age,
          gender: nutrition.gender,
          objective: nutrition.objective,
          level: nutrition.level,
        });
        console.log(response.data);
        setLoading(true);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        navigator("/");
      }
    }

    getData();
  }, [nutrition]);
  console.log(data);
  return (
    <section>
      {loading ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex items-center justify-center m-auto w-full h-screen"
        >
          <div className="flex-col items-center justify-center">
            <img className="w-32 animate-bounce" src={logo} alt="" />
            <h1 className="text-2xl animate-pulse text-white text-center">
              Loading...
            </h1>
          </div>
        </motion.div>
      ) : (
        <div className="flex-col items-center justify-center">
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-white w-full flex items-center
             justify-around min-h-24 rounded-b-2xl shadow-md shadow-black"
          >
            <div className="bg-transparent ">
              <h1 className="bg-white font-bold text-2xl">Minha dieta</h1>
            </div>
            <button className="shadow-md shadow-black">Compartilhar</button>
            <Link className="bg-transparent" to={"/"}>
              <button className="shadow-md shadow-black">&#60;</button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-white font-thin mt-6 w-11/12 p-5"
          >
            <p>Seu nome: {data?.nome}</p>
            <p>Foco: {data?.objetivo}</p>
            <p className="mt-6">Refeições:</p>
          </motion.div>
          <div
            className="flex items-center
        justify-center m-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="bg-white w-11/12 
          rounded-lg p-5"
            >
              <div className="bg-gray-300 rounded-2xl p-5 flex justify-between items-center flex-col">
                <div className="w-full bg-gray-300 flex items-center justify-between">
                  <p className="bg-gray-300 font-semibold">
                    {" "}
                    {data?.refeicoes[0].nome}
                  </p>
                  <img
                    className="bg-gray-300 h-3"
                    src={vector}
                    alt="diet generate ia"
                  />
                </div>
                <div className="bg-gray-300 flex gap-1 items-center w-full my-4">
                  <img className="h-5 bg-gray-300" src={relogio} alt="" />
                  <p className="bg-gray-300 ">Horário:</p>{" "}
                  {data?.refeicoes[0].horario}
                </div>
                <div className="bg-gray-300 flex gap-1 items-center w-full ">
                  {data?.refeicoes[0].alimentos[0]} <br />
                  {data?.refeicoes[0].alimentos[1]} <br />
                  {data?.refeicoes[0].alimentos[2]} <br />
                  {data?.refeicoes[0].alimentos[3]} <br />
                  {data?.refeicoes[0].alimentos[4]} <br />
                </div>
              </div>

              <div className="bg-gray-300 rounded-2xl p-5 flex justify-between items-center flex-col mt-5">
                <div className="w-full bg-gray-300 flex items-center justify-between">
                  <p className="bg-gray-300 font-semibold">
                    {" "}
                    {data?.refeicoes[1].nome}
                  </p>
                  <img
                    className="bg-gray-300 h-3"
                    src={vector}
                    alt="diet generate ia"
                  />
                </div>
                <div className="bg-gray-300 flex gap-1 items-center w-full my-4">
                  <img className="h-5 bg-gray-300" src={relogio} alt="" />
                  <p className="bg-gray-300 ">Horário:</p>{" "}
                  {data?.refeicoes[1].horario}
                </div>
                <div className="bg-gray-300 flex gap-1 items-center w-full ">
                  {data?.refeicoes[1].alimentos[0]} <br />
                  {data?.refeicoes[1].alimentos[1]} <br />
                  {data?.refeicoes[1].alimentos[2]} <br />
                  {data?.refeicoes[1].alimentos[3]} <br />
                  {data?.refeicoes[1].alimentos[4]} <br />
                </div>
              </div>

              <div className="bg-gray-300 rounded-2xl p-5 flex justify-between items-center flex-col mt-5">
                <div className="w-full bg-gray-300 flex items-center justify-between">
                  <p className="bg-gray-300 font-semibold">
                    {" "}
                    {data?.refeicoes[2].nome}
                  </p>
                  <img
                    className="bg-gray-300 h-3"
                    src={vector}
                    alt="diet generate ia"
                  />
                </div>
                <div className="bg-gray-300 flex gap-1 items-center w-full my-4">
                  <img className="h-5 bg-gray-300" src={relogio} alt="" />
                  <p className="bg-gray-300 ">Horário:</p>{" "}
                  {data?.refeicoes[2].horario}
                </div>
                <div className="bg-gray-300 flex gap-1 items-center w-full ">
                  {data?.refeicoes[2].alimentos[0]} <br />
                  {data?.refeicoes[2].alimentos[1]} <br />
                  {data?.refeicoes[2].alimentos[2]} <br />
                  {data?.refeicoes[2].alimentos[3]} <br />
                  {data?.refeicoes[2].alimentos[4]} <br />
                </div>
              </div>

              <div className="bg-gray-300 rounded-2xl p-5 flex justify-between items-center flex-col mt-5">
                <div className="w-full bg-gray-300 flex items-center justify-between">
                  <p className="bg-gray-300 font-semibold">
                    {" "}
                    {data?.refeicoes[3].nome}
                  </p>
                  <img
                    className="bg-gray-300 h-3"
                    src={vector}
                    alt="diet generate ia"
                  />
                </div>
                <div className="bg-gray-300 flex gap-1 items-center w-full my-4">
                  <img className="h-5 bg-gray-300" src={relogio} alt="" />
                  <p className="bg-gray-300 ">Horário:</p>{" "}
                  {data?.refeicoes[3].horario}
                </div>
                <div className="bg-gray-300 flex gap-1 items-center w-full ">
                  {data?.refeicoes[3].alimentos[0]} <br />
                  {data?.refeicoes[3].alimentos[1]} <br />
                  {data?.refeicoes[3].alimentos[2]} <br />
                  {data?.refeicoes[3].alimentos[3]} <br />
                  {data?.refeicoes[3].alimentos[4]} <br />
                </div>
              </div>

              <div className="bg-gray-300 rounded-2xl p-5 flex justify-between items-center flex-col mt-5">
                <div className="w-full bg-gray-300 flex items-center justify-between">
                  <p className="bg-gray-300 font-semibold">
                    {" "}
                    {data?.refeicoes[4].nome}
                  </p>
                  <img
                    className="bg-gray-300 h-3"
                    src={vector}
                    alt="diet generate ia"
                  />
                </div>
                <div className="bg-gray-300 flex gap-1 items-center w-full my-4">
                  <img className="h-5 bg-gray-300" src={relogio} alt="" />
                  <p className="bg-gray-300 ">Horário:</p>{" "}
                  {data?.refeicoes[4].horario}
                </div>
                <div className="bg-gray-300 flex gap-1 items-center w-full ">
                  {data?.refeicoes[4].alimentos[0]} <br />
                  {data?.refeicoes[4].alimentos[1]} <br />
                  {data?.refeicoes[4].alimentos[2]} <br />
                  {data?.refeicoes[4].alimentos[3]} <br />
                  {data?.refeicoes[4].alimentos[4]} <br />
                </div>
              </div>

              <div className="bg-gray-300 rounded-2xl p-5 flex justify-between items-center flex-col mt-5">
                <div className="w-full bg-gray-300 flex items-center justify-between">
                  <p className="bg-gray-300 font-semibold">
                    {" "}
                    Suplementos úteis
                  </p>
                  <img
                    className="bg-gray-300 h-3"
                    src={vector}
                    alt="diet generate ia"
                  />
                </div>
                <div className="bg-gray-300 flex gap-1 items-center w-full mt-6 ">
                  {data?.suplementos[0]} <br />
                  {data?.suplementos[1]} <br />
                  {data?.suplementos[2]} <br />
                  {data?.suplementos[3]} <br />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
