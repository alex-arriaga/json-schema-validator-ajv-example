# JSON Schema Validator Example with [Ajv](https://github.com/ajv-validator/ajv)

This is just a brief demonstration about how to use [Ajv: Another JSON Schema Validator](https://github.com/ajv-validator/ajv) to validate a JSON schema.

- The example of the JSON schema for validating a `package.json` file came from https://github.com/SchemaStore/schemastore/blob/master/src/schemas/json/package.json
- [chalk](https://www.npmjs.com/package/chalk) is used to see nicer colors to print the output (red, green colors)
- [Prettier](https://prettier.io/) for code formatting

## Getting started
```
# Clone repository and install dependencies
git clone https://github.com/alex-arriaga/json-schema-validator-ajv-example.git
npm install

# Running the example
npm run validate

# or
npm start
```

## Example of output

- First example will pass ([package-valid.json](src/data/package-valid.json) is a valid `package.json` file)
- Second example will fail ([package-invalid.json](src/data/package-valid.json) has a `name` that should be a `string` instead of `boolean`)

![output](https://raw.githubusercontent.com/alex-arriaga/json-schema-validator-ajv-example/main/assets/output-example.png)
