import { FastifyReply, FastifyRequest } from "fastify";
import AppDataSource from "../ormconfig";
import { Service } from "../entities/Service";

export const createService = async (request: FastifyRequest, reply: FastifyReply) => {
  const { name, service, date, time } = request.body as Service;
  const serviceRepository = AppDataSource.getRepository(Service);

  const newService = new Service();
  newService.name = name;
  newService.service = service;
  newService.date = date;
  newService.time = time;

  await serviceRepository.save(newService);
  reply.code(201).send(newService);
};
