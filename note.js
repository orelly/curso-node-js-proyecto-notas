console.log('Modulo de notas cargado')

const.addNote = () => {
    console.log('nueva nota')
    return "nueva nota"
})

const removeNote = (id) => {
    console.log(`nota con $(id) borrada`)
    return "Nota borrada"
}

module.exports={addnote, removeNote}