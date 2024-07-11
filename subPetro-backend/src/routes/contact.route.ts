import { FastifyInstance } from "fastify";
import { createContact } from "../controllers/contact.controller";

export const contactRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/contact", createContact);
};
