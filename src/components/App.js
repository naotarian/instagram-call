import { useState, useEffect } from 'react'
import '../App.css'
import { db } from '../firebase'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'
import InputFormLocal from './InputFormLocal'
import InputFormRemote from './InputFormRemote'

const getMedia = async () => {
  const constraints = { audio: true, video: true }

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
    /* ストリームを使用 */
  } catch (err) {
    /* エラーを処理 */
  }
}
getMedia()
const App = () => {
  const [localPeerName, setLocalPeerName] = useState('')
  const [remotePeerName, setRemotePeerName] = useState('')
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   const usersCollectionRef = collection(db, 'users');
  //   getDocs(usersCollectionRef).then((querySnapshot) => {
  //     setUsers(
  //       querySnapshot.docs.map((docu) => ({ ...docu.data(), id: docu.id }))
  //     )
  //   });
  //   const userDocument = doc(db, 'users', '1');
  //   getDoc(userDocument).then((documentSnapshot) => {
  //     console.log(documentSnapshot.data());
  //   });
  // }, []);

  return (
    <div>
      <InputFormLocal localPeerName={localPeerName} setLocalPeerName={setLocalPeerName} />
      <InputFormRemote remotePeerName={remotePeerName} setRemotePeerName={setRemotePeerName} />
      {/* {users.map((user, index) => (
        <div key={index}>
          <p>{user.id}</p>
          <p>{user.email}</p>
          <p>{user.name}</p>
        </div>

      ))} */}
    </div>
  );
}

export default App;
