import TestInputReponseType from "../type/test-input-response-type";
//helpers
import testInput from "./input-test-regex";
import inputValidStyle from "./input-valid-style";

// au changement des valeurs input
    const inputTestValidate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputElm: Element = event.target
        // donnée de l'input
        const inputName: string = event.target.name;
        const inputValue: string = event.target.value;
        // test de validité des entrées de loginForm
        const inputTestResult: TestInputReponseType | null = testInput(inputName, inputValue);
        // gestion du style d'un input valide ou non
        inputValidStyle(inputTestResult, inputElm);
        // mise à jour de loginForm
        const newInputValue = { [inputName]: {value: inputValue, error: inputTestResult?.errorMsg, isValid: inputTestResult?.result} }
        return newInputValue;
    }

    export default inputTestValidate;