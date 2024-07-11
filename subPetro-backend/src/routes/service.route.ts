import { FastifyInstance } from "fastify";
import { createService } from "../controllers/service.controller";

export const serviceRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/services", createService);
};
