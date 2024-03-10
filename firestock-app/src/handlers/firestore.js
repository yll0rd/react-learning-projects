import { setDoc, getDocs, doc, serverTimestamp, collection } from "firebase/firestore"
import { db } from "../lib/firebase.config.js"


const Firestore = {
    readDoc: (collection_name) => {
        let docs = []
        const ref = collection(db, collection_name)
        return new Promise(async resolve => {
            try {
                const snapshots = await getDocs(ref)
                snapshots.forEach(doc => {
                    const d = {...doc.data()}
                    docs.push(d)
                    resolve(docs)
                })
            } catch (e) {
                console.error(e)
            }
        })
    },

    writeDoc: (...args) => {
        const [inputs, collection_name] = args
        return new Promise(async resolve => {
            const randomIndex = Math.floor(Math.random() * 1000000000)
            try {
                const docRef = doc(db, collection_name, `${randomIndex}`);
                const docData = { title: inputs.title, path: inputs.path, userName: inputs.userName , createdAt: serverTimestamp() }
                await setDoc(docRef , docData);
                resolve(docData)
            } catch(e) {
                console.error(e)
            }
        })
    }
}
export default Firestore