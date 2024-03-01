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

// eslint-disable-next-line react/prop-types
const UploadForm = ( {input, handleUploadFormOnChange, handleUploadFormSubmit} ) => {
    const checkDisable = () => {
        // eslint-disable-next-line react/prop-types
        let { title, fileValue } = input
        return !(title && fileValue)
    }

    return (
        <>
            <p className="display-6 text-center mb-3">Upload Stock Image</p>
            <div className="mb-5 d-flex align-items-center justify-content-center">
                <Preview path={input.path}/>
                <form className="mb-2" style={{ textAlign: "left" }}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="title"
                            aria-describedby="text"
                            onChange={handleUploadFormOnChange}
                            value={input.title}
                            required={true}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="file"
                            className="form-control"
                            name="file"
                            onChange={handleUploadFormOnChange}
                            value={input.fileValue}
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
