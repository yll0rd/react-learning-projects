// eslint-disable-next-line react/prop-types
import {useContext, useMemo} from "react";
import { AppContext } from "../contexts/appContext.jsx";
import Firestore from "../handlers/firestore.js";
import Storage from "../handlers/storage.js";
import {useAuthContext} from "../contexts/AuthContext.jsx";

const { writeDoc } = Firestore;
const { uploadFile, downloadFile } = Storage

// eslint-disable-next-line react/prop-types
const Preview = ({ path }) => {
    return (
            path && <div
            className="rounded p-1 m-5"
            style={{
                width: "30%",
                height: "300px",
                backgroundImage: `url(${path}`,
                backgroundSize: "cover",
            }}
        ></div>
    );
};


const UploadForm = () => {
    const { state, dispatch, read } = useContext(AppContext)
    const { inputs } = state
    const { currentUser } = useAuthContext()

    const handleUploadFormOnChange = (event) => {
        if (event.target.name === 'title')
            dispatch({type: 'setInputs', payload : { title: event.target.value }})
        else if (event.target.name === 'file') {
            const file = event.target.files[0]
            dispatch({type: 'setInputs', payload : { file, path: URL.createObjectURL(file), fileValue: event.target.value }})
        }
    }

    const username = useMemo(() => currentUser?.displayName.split(" ").join(""), [currentUser]);
    const handleUploadFormSubmit = (event) => {
        event.preventDefault()
        uploadFile(state.inputs).then(downloadFile)
            .then(media => {
                writeDoc({ path: media.path, title: media.title, userName: username.toLowerCase() }, "stocks")
                    .then((res) => {
                        console.log(res)
                        // dispatch({ type: 'setItem', payload: { item: res } })
                        read("stocks")
                        dispatch({ type: 'clearInputs' })
                    })
        })
    }

    const checkDisable = () => {
        // eslint-disable-next-line react/prop-types
        let { title, fileValue } = inputs
        return !(title && fileValue)
    }

    return (
        <>
            <p className="display-6 text-center mb-3">Upload Stock Image</p>
            <div className="mb-5 d-flex align-items-center justify-content-center">
                <Preview path={inputs.path}/>
                <form className="mb-2" style={{ textAlign: "left" }}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="title"
                            aria-describedby="text"
                            onChange={handleUploadFormOnChange}
                            value={inputs.title}
                            required={true}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="file"
                            className="form-control"
                            name="file"
                            onChange={handleUploadFormOnChange}
                            value={inputs.fileValue}
                            required/>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success float-end"
                        onClick={handleUploadFormSubmit}
                        disabled={checkDisable()}
                    >
                        Save and Upload
                    </button>
                </form>
            </div>
        </>
    );
};

export default UploadForm;
