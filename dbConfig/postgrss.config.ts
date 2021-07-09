import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const postgresConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'a17521752z',
    database: 'nestJs-resume-postgres',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
}
