//images
import logo from "../assets/logo.png";
//routerdom
import { Link } from "react-router-dom";

//motion
import { motion } from "framer-motion";

export function Home() {
  return (
    <main className="min-w-full min-h-screen flex items-center justify-center m-auto">
      <section className="flex-col items-center justify-center m-auto">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mb-5"
        >
          <img src={logo} alt="dieta ia" />
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center mb-5"
        >
          <h1 className="text-white text-3xl font-bold">
            <strong className="text-green-600 text-5xl font-bold">Diet</strong>
            .IA
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center mb-5"
        >
          <p className="text-white font-thin">
            Sua dieta personlizada com <br />
            inteligência artificial{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex items-center justify-center"
        >
          <Link to={"/dados-client"}>
            <button>Gerar Dieta</button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
