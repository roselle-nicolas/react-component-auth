import TestInputReponse from '../type/test-input-response'
import regexInputSelected from './regex-list'

const testInput = (inputName: string, InputValue: string): TestInputReponse | null=> {
    if (InputValue === '') {
        return null
    }
    //récupération du régex corespondant à l'input
    const inputTestRegex = regexInputSelected(inputName)
    if (inputTestRegex) {
        return {
            result: inputTestRegex.regex.test(InputValue),
            errorMsg:inputTestRegex.errorMsg
        }
    }else {
        return null
    }
}

export {testInput};