"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const core_1 = require("@nestjs/core");
const graphqlUploadExpress = require("graphql-upload/graphqlUploadExpress.js");
const swagger_init_1 = require("./internal/swagger/swagger.init");
const app_module_1 = require("./app.module");
const service_validator_1 = require("./decorators/service.validator");
const database_init_1 = require("./database/database.init");
const multer_1 = require("./config/multer");
const database_1 = require("./config/database");
const core_2 = require("./config/core");
const path_1 = require("path");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    await (0, database_init_1.connectToDatabase)(database_1.dbConfig.db);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '../../src/public'), {
        prefix: '/src/public',
    });
    app.enableCors();
    app.setGlobalPrefix(core_2.coreConfig.restApiPrefix);
    app.enableCors({
        allowedHeaders: '*',
        origin: '*',
        credentials: true,
    });
    core_2.coreConfig.api === 'GRAPHQL' &&
        app.use(graphqlUploadExpress({ maxFileSize: multer_1.multerConfig.maxFileSize }));
    app.useGlobalPipes(new service_validator_1.ValidationPipe());
    app.use(cookieParser());
    core_2.coreConfig.api === 'REST' && (0, swagger_init_1.SwaggerConfig)(app);
    await app.listen(core_2.coreConfig.port);
    console.log(`http://${core_2.coreConfig.host}:${core_2.coreConfig.port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map