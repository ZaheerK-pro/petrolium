import { FastifyReply, FastifyRequest } from "fastify";
import AppDataSource  from "../ormconfig";
import { Contact } from "../entities/Contact";

export const createContact = async (request: FastifyRequest, reply: FastifyReply) => {
  const { name, email, message } = request.body as Contact;
  const contactRepository = AppDataSource.getRepository(Contact);

  const newContact = new Contact();
  newContact.name = name;
  newContact.email = email;
  newContact.message = message;

  await contactRepository.save(newContact);
  reply.code(201).send(newContact);
};
