// import { Contact } from './entities/Contact';
// import { Service } from './entities/Service';

// export default {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'test',
//   password: 'zaheer@123',
//   database: 'test',
//   entities: [Contact, Service],
//   synchronize: true,
// };
import { DataSource } from "typeorm";
import { Service } from "./entities/Service";
import { Contact } from "./entities/Contact";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "zaheer@123",
    database: "subpetro",
    entities: [Service, Contact],
    synchronize: true,
});

export default AppDataSource;