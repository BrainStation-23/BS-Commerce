"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("../config/core");
exports.User = (0, common_1.createParamDecorator)(async (data, context) => {
    return core_1.coreConfig.api === 'GRAPHQL'
        ? await graphql_1.GqlExecutionContext.create(context).getContext().req.user
        : await context.switchToHttp().getRequest().user;
});
//# sourceMappingURL=auth.decorator.js.map