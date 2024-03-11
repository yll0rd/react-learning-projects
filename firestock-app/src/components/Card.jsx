// eslint-disable-next-line react/prop-types
import {useMemo} from "react";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Card({photo}) {
    const navigate = useNavigate()

    console.log(photo)
    // eslint-disable-next-line react/prop-types
    const { path, title, createdAt, userName, id } = photo

    const handleOnClick = () => {
        navigate(`/stocks/${id}`, { state: { id } })
    }

    const timestamp = useMemo(() => {
        const date = `${new Date(createdAt.seconds * 1000)}`.split(" ")
        return `${date[1]} ${date[2]} ${date[3]}`
    }, [createdAt.seconds]);
    return (
        <div className='col mb-5' onClick={handleOnClick}>
            <div className="card" style={{width: "18rem"}}>
                <div style={{
                    height: "220px",
                    backgroundImage: `url(${path})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}></div>
                {/* eslint-disable-next-line react/prop-types */}
                <h5 className="text-center mt-1">{title}</h5>
                <div className="d-flex justify-content-between p-2">
                    <p>{timestamp}</p>
                    <i>@{userName}</i>
                </div>
            </div>
        </div>
    )
}
export default Card;