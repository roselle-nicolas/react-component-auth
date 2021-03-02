import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const AlertInputInvalid = (errorMsg: string | undefined) => {

   MySwal.fire({
       title: "test",
       text: errorMsg
   })
}

export default AlertInputInvalid