
export const EnvConfiguration = () => ({
    jwtsecret: process.env.JWT_SECRET,
    jwtexpiration: process.env.JWT_EXPIRATION,
    enviroment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultLimit: +process.env.DEFAULT_LIMIT || 10,
   });
   