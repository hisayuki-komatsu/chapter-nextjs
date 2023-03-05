/* eslint-disable */
const fs = require('fs')
const Json = require('../../openapi.json')

const createType = (schemas) =>
  'type Examples= { ' +
  Object.keys(schemas)
    .map((i) => `${i}: Entity.${i};`)
    .join('') +
  '};'

// プロパティからexampleの値を取得する
const extractExample = (propertie) => {
  if ('$ref' in propertie) {
    const schemaName = new RegExp('(?<=schemas/).*$').exec(propertie.$ref)
    return extractSchemaExample(Json.components.schemas[schemaName[0]])
  }
  if ('example' in propertie) return propertie.example

  if ('items' in propertie) return [extractExample(propertie.items)]

  if ('properties' in propertie) {
    const obj = {}
    Object.keys(propertie.properties).map((k) => {
      obj[k] = extractExample(propertie.properties[k])
    })
    return obj
  }
}

// スキーマのプロパティを取得、examplesを返す
const extractSchemaExample = (schema) => {
  const schemaProperties =
    'properties' in schema
      ? schema.properties
      : 'allOf' in schema
      ? schema.allOf[1].properties
      : undefined

  if (!schemaProperties) return

  const example = {}
  Object.keys(schemaProperties).forEach((j) => {
    const propertie = schemaProperties[j]
    const exampleValue = extractExample(propertie)

    if (!exampleValue) return

    example[j] = exampleValue
  })
  return example
}

const extractExamples = (schemas) => {
  const examples = {}
  Object.keys(schemas).forEach((i) => {
    const schema = schemas[i]
    examples[i] = extractSchemaExample(schema)
  })
  return examples
}

fs.writeFile(
  './src/apis/Autogen/examples.ts',
  '/* eslint-disable */\n' +
    "import * as Entity from '~/apis/Autogen/@types';\n\n" +
    createType(Json.components.schemas) +
    'export const examples =' +
    JSON.stringify(extractExamples(Json.components.schemas)) +
    'as unknown as Examples;',
  (err) => {
    if (err) throw err
  },
)
