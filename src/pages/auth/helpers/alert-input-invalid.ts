import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { Field } from '../type/field-form';

const MySwal = withReactContent(Swal);

const AlertInputInvalid = (input: Field | undefined, inputName: string) => {

 const titleAlert = `Info: ${inputName}` 

   MySwal.fire({
       title: titleAlert,
       text: input?.error
   })
}

export default AlertInputInvalid