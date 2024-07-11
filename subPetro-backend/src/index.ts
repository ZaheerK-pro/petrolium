import "reflect-metadata";
import Fastify from "fastify";
import cors from "@fastify/cors";
import { contactRoutes } from "./routes/contact.route";
import { serviceRoutes } from "./routes/service.route";
import AppDataSource from "./ormconfig";

const fastify = Fastify({ logger: true });

fastify.register(cors, {
  origin: "*",
});

fastify.register(contactRoutes);
fastify.register(serviceRoutes);

const start = async () => {
  try {
    await AppDataSource.initialize();
    await fastify.listen({ port: 3000 });
    console.log("Server is running on http://127.0.0.1:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
