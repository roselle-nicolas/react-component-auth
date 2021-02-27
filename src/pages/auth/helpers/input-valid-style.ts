import TestInputReponse from "../type/test-input-response";

const inputValidStyle = (inputTest: TestInputReponse | null, inputElm: Element | null) => {

    // gestion des erreurs et retour à l'état initial de chaque input (quand on supprime complètement un champ on revient à son état initial)
    if (inputTest === null || inputElm === null) {
        if (inputTest === null) {
            inputElm?.classList.remove('invalid')
            inputElm?.classList.remove('valid')
        }
        return;
    // gestion du style d'un input valide ou non (class matérialize.css)
    }else {
        // valide
        if (inputTest.result) {
            inputElm?.classList.remove('invalid')
            inputElm?.classList.add('valid')
        // non valide
        }else {
            inputElm?.classList.remove('valid')
            inputElm?.classList.add('invalid')
        }
    }
}

export default inputValidStyle;