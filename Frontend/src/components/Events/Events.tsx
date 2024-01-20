import { EventCard } from '../../components'
import Timeline from '../timeline/Timeline'
import { event1, event2, event3 } from './event-data'
import './Events.css'
export default function Events() {
    return (
        <div id="events">
            <h1>Events</h1>
            <div className='events-cards-container'>
                <div className="events-card-container">
                    <EventCard name={event1.name} img={event1.image}/>
                </div>
                <div className="events-card-container">
                    <EventCard name={event2.name} img={event2.image}/>
                </div>
                <div className="events-card-container">
                    <EventCard name={event3.name} img={event3.image}/>
                </div>
            </div>
            <button className='event-btn'>View All Events</button>
            <Timeline/>
        </div>
    )
}