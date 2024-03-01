function Card({photoSrc}) {
    return (
        <div className='col mb-5'>
            <div className="card" style={{width: "18rem"}}>
                <img src={photoSrc} className="card-img-top" alt="..." />
            </div>
        </div>
    )
}
export default Card;