import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from 'config/swagger';

type SecuritySchemeType = 'apiKey' | 'http' | 'oauth2' | 'openIdConnect';

export const SwaggerConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle(swaggerConfig.title)
    .addBearerAuth({
      type: swaggerConfig.auth.type as SecuritySchemeType,
      description: swaggerConfig.auth.description,
      scheme: swaggerConfig.auth.schema,
      name: swaggerConfig.auth.name,
      bearerFormat: swaggerConfig.auth.bearer_format,
    })
    .setDescription(swaggerConfig.description)
    .setVersion(swaggerConfig.version)
    .addTag(swaggerConfig.tags)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  return SwaggerModule.setup(swaggerConfig.apiPrefix, app, document);
};
