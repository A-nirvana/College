import './EventCard.css'
interface data{
    name: string,
    img: string
}

export default function EventCard(event:data) {
    return (
        <div className="event-card">
            <div className="event-logo">
                <img src={event.img} alt="" />
                <h3>{event.name}</h3>
            </div>
        </div>
    )
}