// eslint-disable-next-line react/prop-types
import {useContext} from "react";
import { AppContext } from "../contexts/appContext.jsx";
import Firestore from "../handlers/firestore.js";

const { writeDoc } = Firestore;

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
    const { state, dispatch } = useContext(AppContext)
    const { inputs } = state

    const handleUploadFormOnChange = (event) => {
        if (event.target.name === 'title')
            dispatch({type: 'setInputs', payload : { title: event.target.value }})
        else if (event.target.name === 'file') {
            const file = event.target.files[0]
            dispatch({type: 'setInputs', payload : { file, path: URL.createObjectURL(file), fileValue: event.target.value }})
        }
    }

    const handleUploadFormSubmit = (event) => {
        event.preventDefault()
        writeDoc(inputs, "stocks").then(() => console.log("Successful"))
        dispatch({ type: 'setItem' })
        dispatch({ type: 'clearInputs' })
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
                        Save changes
                    </button>
                </form>
            </div>
        </>
    );
};

export default UploadForm;
