const validator = require('validator');
const ArticleValidator = (params) => {
    let validar_titulo = !validator.isEmpty(params.title) && validator.isLength(params.title, { min: 5, max: 25 });
    let validar_contenido = !validator.isEmpty(params.content);

    if (!validar_titulo || !validar_contenido) {
        throw new Error("No se ha validado la informacion")
    }
}

module.exports = {
    ArticleValidator
}