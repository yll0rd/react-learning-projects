import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import {storage} from "../lib/firebase.config.js";

const Storage = {
    uploadFile: media => {
        return new Promise(async resolve => {
            try {
                const mediaRef = ref(storage, `images/${media.title}`)
                uploadBytes(mediaRef, media.file).then((snapshot) => {
                    console.log('Uploaded a blob or file!');
                    resolve({ path: snapshot.metadata.fullPath, title: media.title })
                })
            }
            catch (e) {
                console.error(e)
            }
        })
    },

    downloadFile: media => {
        return new Promise(async resolve => {
            try {
                const mediaRef = ref(storage, media.path)
                const fileURL = await getDownloadURL(mediaRef)
                resolve({ path: fileURL, title: media.title })
            }
            catch (e) {
                console.error(e)

            }
        })
    }
}

export default Storage