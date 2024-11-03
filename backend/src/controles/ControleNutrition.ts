import { FastifyRequest, FastifyReply } from "fastify";

//contorler services clientes
import { CreateNutritionServices } from "../services/ServicesNutritions";

export interface DataProps {
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  objective: string;
  level: string;
}

class CreateNutritionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, weight, height, age, gender, objective, level } =
      request.body as DataProps;

    const CreateNutrition = new CreateNutritionServices();

    const nutrition = await CreateNutrition.execute({
      name,
      weight,
      height,
      age,
      gender,
      objective,
      level,
    });

    reply.send(nutrition);
  }
}

export { CreateNutritionController };
