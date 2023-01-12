"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlInitModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("../../config/core");
const path_1 = require("path");
const GraphqlInitModule = () => {
    return [
        graphql_1.GraphQLModule.forRoot({
            driver: apollo_1.ApolloDriver,
            autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
            path: `/${core_1.coreConfig.graphqlPathPrefix}`,
            playground: core_1.coreConfig.env === 'DEVELOPMENT' ? true : false,
            cors: { origin: '*', credentials: true },
            formatError: (error) => {
                var _a, _b, _c, _d, _e, _f, _g;
                return {
                    message: ((_c = (_b = (_a = error.extensions) === null || _a === void 0 ? void 0 : _a.exception) === null || _b === void 0 ? void 0 : _b.response) === null || _c === void 0 ? void 0 : _c.error) || (error === null || error === void 0 ? void 0 : error.message),
                    code: ((_e = (_d = error.extensions) === null || _d === void 0 ? void 0 : _d.response) === null || _e === void 0 ? void 0 : _e.statusCode) ||
                        ((_g = (_f = error.extensions) === null || _f === void 0 ? void 0 : _f.exception) === null || _g === void 0 ? void 0 : _g.status) ||
                        500,
                };
            },
        }),
    ];
};
exports.GraphqlInitModule = GraphqlInitModule;
//# sourceMappingURL=graphql.init.js.map