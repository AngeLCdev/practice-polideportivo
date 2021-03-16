
const zIndex = require("./_z-index");
const colores = require("./_colors");
const tipografia = require("./_typography");
const layout = require("./_layout");

const mezcla1 = Object.assign(zIndex, colores);
const mezcla2 = Object.assign(mezcla1, tipografia);
const variables = Object.assign(mezcla2, layout);

module.exports = variables

