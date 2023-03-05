/* eslint-disable */
const fs = require('fs')

fs.readFile('./src/apis/Autogen/@types/index.ts', 'utf8', (err, data) => {
  if (err) throw err

  const splitStr = data.split('\n')
  const replaceTypeStr = splitStr.map((str) =>
    str.replace(
      /export type ([a-zA-Z]{1,}) = {/g,
      'export type $1 = ToCamelObj<{',
    ),
  )
  const resultStr = replaceTypeStr.map((str) => (str === '}' ? '}>' : str))
  resultStr[0] = 'import { ToCamelObj } from "~/types/toCamelObj";\n\n'

  fs.writeFile(
    './src/apis/Autogen/@types/index.ts',
    resultStr.join('\n'),
    (err) => {
      if (err) throw err
    },
  )
})
