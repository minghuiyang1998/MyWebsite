import React from "react"
import moment from 'moment'
import { navigate } from "gatsby"
import "./Card.scss"

class Card extends React.Component {
    render() {
        return (
            <div className={"card"} data-direction={this.props.direction === 'left' ? 'left' : 'right'}>
                <div className={"card-content"} onClick={() => { navigate(this.props.info.path) }}>
                    <div className={"time"}>
                        <svg className={"icon-pen"} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M253.866667 883.285333l159.288889-113.066666 259.100444-448.170667 24.775111-44.032 52.508445-90.808889a2.588444 2.588444 0 0 0-0.924445-3.640889l-136.433778-78.648889a2.588444 2.588444 0 0 0-1.991111-0.213333 2.616889 2.616889 0 0 0-1.621333 1.265778l-52.465778 90.737778a136.433778 136.433778 0 0 0-1.607111 4.010666L272.227556 688.981333 253.866667 883.285333z m241.749333-56.746666a69.688889 69.688889 0 0 1-32.142222 30.065777L243.342222 1012.821333l-8.632889 2.318223a70.030222 70.030222 0 0 1-53.077333-6.997334 69.589333 69.589333 0 0 1-32.512-42.666666l-2.218667-8.504889 25.372445-268.344889a69.802667 69.802667 0 0 1 9.713778-42.439111l282.851555-489.244445c1.493333-3.384889 3.171556-6.712889 5.048889-9.984l52.451556-90.709333A102.058667 102.058667 0 0 1 584.419556 8.533333a102.001778 102.001778 0 0 1 77.610666 10.183111l136.391111 78.648889a102.186667 102.186667 0 0 1 37.347556 139.591111L807.822222 285.297778 495.616 826.538667z" p-id="1326"></path>
                        </svg>
                        <time>{moment(this.props.info.timestamp).fromNow()}</time>
                    </div>
                    <h2 className={"title"}>{this.props.info.title}</h2>
                    <p className={"digest"}>“{this.props.info.digest}”</p>
                </div>
                <div className={"gap"}></div>
                <div className={"card-pic"}  onClick={() => { navigate(this.props.info.path) }} style={{ backgroundImage: 'url(' + this.props.info.image + ')' }}></div>
            </div >
        )
    }
}

export default Card
