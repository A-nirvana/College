import './FrameLogo.css'

interface data{
    name : string,
    image: string,
    color: string,
    time: string,
    delay: string
}

export default function FrameLogo(data:data) {
    let style = {
        animationTime: data.time,
        animationDelay: data.delay
    }

    return (
        <div className="frameLogo" style={style}>
            <div className="pin" style={{backgroundColor: data.color}}></div>
            <div className="logo-container">
                <img src={data.image} alt="" />
            </div>
            <h1>{data.name}</h1>
        </div>
    )
}

export type {data};