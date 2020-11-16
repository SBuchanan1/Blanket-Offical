// import { projectStorage,} from '../firebase/config';

import Success from "../components/Form/Success";



const deleteDialog = (src)=>{

delete(Success).then(function() {
    // File deleted successfully
  }).catch(function(error) {
    // Uh-oh, an error occurred!
  });

}


export default deleteDialog;