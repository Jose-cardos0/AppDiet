import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

//controler router
import { CreateNutritionController } from "./controles/ControleNutrition";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/", (request: FastifyRequest, reply: FastifyReply) => {
    let responseText =
      '```json\n{\n  "nome": "Jose",\n  "sexo": "Masculino",\n  "idade": 28,\n  "altura": 1.80,\n  "peso": 90,\n  "objetivo": "hipertrofia",\n  "refeicoes": [\n    {\n      "horario": "07:00",\n      "nome": "Café da Manhã",\n      "alimentos": [\n        "2 fatias de pão integral",\n        "2 ovos inteiros",\n        "1 banana",\n        "200ml de leite desnatado",\n        "1 colher de sopa de azeite de oliva"\n      ]\n    },\n    {\n      "horario": "10:00",\n      "nome": "Lanche da Manhã",\n        "alimentos": [\n            "1 scoop de whey protein",\n            "1 banana",\n            "1 colher de chá de azeite de oliva"\n        ]\n    },\n    {\n      "horario": "13:00",\n      "nome": "Almoço",\n      "alimentos": [\n        "150g de frango grelhado",\n        "100g de batata doce",\n        "1 xícara de arroz integral",\n        "Salada de folhas verdes com tomate e azeite de oliva"\n      ]\n    },\n    {\n      "horario": "16:00",\n      "nome": "Lanche da Tarde",\n      "alimentos": [\n        "1 iogurte grego com granola",\n        "1 maçã"\n      ]\n    },\n    {\n      "horario": "19:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de peixe grelhado",\n        "1 xícara de brócolis",\n        "1 xícara de batata doce"\n      ]\n    },\n    {\n      "horario": "21:00",\n      "nome": "Lanche da Noite",\n      "alimentos": [\n        "1 scoop de caseína",\n        "1 colher de sopa de azeite de oliva"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Whey protein",\n    "Creatina",\n    "BCAA",\n    "Glutamina"\n  ]\n}\n```';

    try {
      //extrair jason
      let jsonString = responseText
        .replace(/```\w*\n/g, "")
        .replace(/\n```/g, "")
        .trim();

      //pegar o json extraido e converter objeto legivel para front-end
      let jsonObject = JSON.parse(jsonString);

      //enviar o json para visualização no front-end da api
      return reply.send({ data: jsonObject });
    } catch (error) {
      console.log(error.message);
    }
    reply.send({ ok: true });
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutritionController().handle(request, reply);
    }
  );
}
