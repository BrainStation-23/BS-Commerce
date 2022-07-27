import { emailRegex } from 'config/mail';
import { GraphQLError, GraphQLScalarType } from 'graphql';
const EMAIL_REGEX = RegExp(emailRegex.regex);

function validate(value: unknown): string | never {
  if (typeof value !== 'string') {
    throw new GraphQLError(`${value} is not string`)
  }

  if (!EMAIL_REGEX.test(value)) {
    throw new GraphQLError(`${value} is not a valid email address`);
  }

  return value;
}

export const EmailCheckScalar = new GraphQLScalarType({
  name: 'EmailAddress',
  description: 'A Valid Email Address',
  serialize: (value: string) => validate(value),
  parseValue: (value: string) => validate(value),
  parseLiteral: (ast: any) => validate(ast.value)
})