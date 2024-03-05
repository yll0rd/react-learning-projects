// eslint-disable-next-line react/prop-types
function Card({photo}) {
    console.log(photo)
    return (
        <div className='col mb-5'>
            <div className="card" style={{width: "18rem"}}>
                {/* eslint-disable-next-line react/prop-types */}
                <img src={photo.path} className="card-img-top" alt={photo.title} />
            </div>
        </div>
    )
}
export default Card;