const Ajv = require('ajv')
const chalk = require('chalk')
const log = console.log

// Cache the Draft 4 JSON (included in the AJV module)
const JSONSchemaDraft4Definition = require('ajv/lib/refs/json-schema-draft-04.json')

function runExampleWithDraft4Definition(schemaPath, dataPath) {
  const schema = require(schemaPath)
  const data = require(dataPath)

  // See: https://github.com/ajv-validator/ajv/issues/895
  const ajv = new Ajv({
    schemaId: 'id', // Draft-04 support requirement
    allErrors: true,
    jsonPointers: true,
  })

  // Add the schema to the instance.
  ajv.addMetaSchema(JSONSchemaDraft4Definition)

  const validate = ajv.compile(schema)
  const valid = validate(data)

  if (!valid) {
    log(chalk.red(`Validation failed [${dataPath}]!`))
    log(validate.errors)
  } else {
    log(chalk.green(`Validation passes with Draft 4 example [${dataPath}]`))
  }
}

function run() {
  const schemaPath = './../schemas/package-schema.json'

  runExampleWithDraft4Definition(schemaPath, './../data/package-valid.json')
  runExampleWithDraft4Definition(schemaPath, './../data/package-invalid.json')
}

module.exports.AjvValidator = {
  run,
}
