//images
import logo from "../assets/logo.png";
//routerdom
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="min-w-full min-h-screen flex items-center justify-center m-auto">
      <section className="flex-col items-center justify-center m-auto">
        <div className="mb-5">
          <img src={logo} alt="dieta ia" />
        </div>
        <div className="text-center mb-5">
          <h1 className="text-white text-3xl font-bold">
            <strong className="text-green-600 text-5xl font-bold">Diet</strong>
            .IA
          </h1>
        </div>
        <div className="text-center mb-5">
          <p className="text-white font-thin">
            Sua dieta personlizada com <br />
            inteligência artificial{" "}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link to={"/dados-client"}>
            <button>Gerar Dieta</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
