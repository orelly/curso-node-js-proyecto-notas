/* console.log('Iniciando aplicacion de notas')
const notes = require('./note.js')

console.log(process.argv)

notes.removeNote(7) */

const notes = require('./note.js')
console.log('Aplicación de notas arrancada.')
// const command = process.argv[2]
// console.log('Command: ', command)
// console.log(process.argv)
const { argv } = require('yargs')

console.log(argv)
const command = argv._[0]

if (command === 'add') {
  console.log('Añadiendo nueva nota')
} else if (command === 'list') {
  console.log('Listado de todas las notas')
} else if (command === 'read') {
  console.log('Leyendo notas')
} else if (command === 'remove') {
  console.log('Borrando nota')
} else {
  console.log('Comando desconocido')
}

console.log('El modulo de notas se ha cargado')
const añadirNota = (title, body) => { console.log('Nota añadida: ', title, body) }
const obtenerTodasNotas = () => { console.log('Obtenidas todas las notas') }
const obtenerNota = (title) => { console.log('Obtenida nota: ', title) }
const quitarNota = (title) => { console.log('Nota borrada', title) }
module.exports = { añadirNota, obtenerTodasNotas, obtenerNota, quitarNota }
