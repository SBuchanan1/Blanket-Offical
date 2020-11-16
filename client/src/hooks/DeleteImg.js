import { projectStorage,projectFirestore} from '../firebase/config';


const deleteImg = (src)=>{

  //const storageRef = projectStorage.ref(file.name);
  const collectionRef = projectFirestore.collection('images');
const storageRef = projectStorage.ref();//    const storageRef = projectStorage.ref(file.name);

// https://firebase.google.com/docs/storage/web/delete-files official doc
//var desertRef = storageRef.child(src);
// Delete the file
//storageRef.child("unnamed.jpg").delete().then(function() {
  collectionRef.where("url", "==", src).get().then(function(docs){
    docs.forEach(function(doc){
      console.log(doc.id, "==>", doc.data());
      collectionRef.doc(doc.id).delete();
      storageRef.child(doc.data().imageName).delete();
     // doc.delete();
    })
 // })
 // collectionRef.delete(src);
    // File deleted successfully
  }).catch(function(error) {
    // Uh-oh, an error occurred!
  });

}


export default deleteImg;