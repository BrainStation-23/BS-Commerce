"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("../../config/swagger");
const SwaggerConfig = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle(swagger_2.swaggerConfig.title)
        .setDescription(swagger_2.swaggerConfig.description)
        .setVersion(swagger_2.swaggerConfig.version)
        .addTag(swagger_2.swaggerConfig.tags)
        .addBearerAuth({
        type: swagger_2.swaggerConfig.auth.type,
        description: swagger_2.swaggerConfig.auth.description,
        scheme: swagger_2.swaggerConfig.auth.schema,
        name: swagger_2.swaggerConfig.auth.name,
        bearerFormat: swagger_2.swaggerConfig.auth.bearer_format,
    })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    return swagger_1.SwaggerModule.setup(swagger_2.swaggerConfig.apiPrefix, app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
};
exports.SwaggerConfig = SwaggerConfig;
//# sourceMappingURL=swagger.init.js.map