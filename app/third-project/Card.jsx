export default function Card() {
    return (
        <div className="card">
            <img className="card--image" src="/katie-zaferes.png"></img>
            <div className="card--rating">
                <img src="/star.png"></img>
                <span className="card--rating--text">5.0 (6)-USA</span>
            </div>
            <div className="card--title">Life lessons with Katie Zaferes</div>
            <div className="card--price"><span className='card--price--bold'>From $136</span> / person</div>
        </div>
    )
}