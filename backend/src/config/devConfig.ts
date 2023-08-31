import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const devConfig = () => ({
  database: {
    type: 'sqlite',
    database: 'dev.db',
    autoLoadEntities: true, // entities will be registered through the forFeature() method
    synchronize: true,
  } as TypeOrmModuleOptions,
  jwt: {
    secret: 'CHANGE THIS IN PRODUCTION',
    signOptions: { expiresIn: '60s' },
  },
});
