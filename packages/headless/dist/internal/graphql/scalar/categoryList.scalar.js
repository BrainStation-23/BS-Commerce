"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectScalarType = void 0;
const graphql_1 = require("graphql");
exports.ObjectScalarType = new graphql_1.GraphQLScalarType({
    name: 'Object',
    description: 'Arbitrary object',
    parseValue: (value) => {
        return typeof value === 'object'
            ? value
            : typeof value === 'string'
                ? JSON.parse(value)
                : null;
    },
    serialize: (value) => {
        return typeof value === 'object'
            ? value
            : typeof value === 'string'
                ? JSON.parse(value)
                : null;
    },
    parseLiteral: (ast) => {
        switch (ast.kind) {
            case graphql_1.Kind.STRING:
                return JSON.parse(ast.value);
            case graphql_1.Kind.OBJECT:
                throw new Error(`Not sure what to do with OBJECT for ObjectScalarType`);
            default:
                return null;
        }
    },
});
//# sourceMappingURL=categoryList.scalar.js.map