import React from "react"
import "./BannerFeatured.scss"
import moment from 'moment'

class BannerFeatured extends React.Component {
    render() {
        return (
            <div className={"banner-featured"}>
                <div className={"image-wrap"}>
                    <div className={"banner-image"} style={{ backgroundImage: 'url(' + this.props.details.image + ')' }}></div>
                </div>
                <div className={"reading-time"}>
                    <time>{moment(this.props.details.timestamp).fromNow()}</time>
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M10.1907692,24 C4.5625628,24 0,19.4374372 0,13.8092308 C0,8.18102433 4.5625628,3.61846154 10.1907692,3.61846154 C15.8189757,3.61846154 20.3815385,8.18102433 20.3815385,13.8092308 C20.3815385,19.4374372 15.8189757,24 10.1907692,24 Z M10.1907692,22 C14.7144062,22 18.3815385,18.3328677 18.3815385,13.8092308 C18.3815385,9.28559383 14.7144062,5.61846154 10.1907692,5.61846154 C5.6671323,5.61846154 2,9.28559383 2,13.8092308 C2,18.3328677 5.6671323,22 10.1907692,22 Z" id="Oval"></path><path d="M7.53230769,2.32923077 C6.98002294,2.32923077 6.53230769,1.88151552 6.53230769,1.32923077 C6.53230769,0.776946019 6.98002294,0.329230769 7.53230769,0.329230769 L12.9225711,0.329230769 C13.4748559,0.329230769 13.9225711,0.776946019 13.9225711,1.32923077 C13.9225711,1.88151552 13.4748559,2.32923077 12.9225711,2.32923077 L7.53230769,2.32923077 Z" id="Line-2"></path><path d="M13.2928932,9.29289322 C13.6834175,8.90236893 14.3165825,8.90236893 14.7071068,9.29289322 C15.0976311,9.68341751 15.0976311,10.3165825 14.7071068,10.7071068 L10.897876,14.5163376 C10.5073517,14.9068618 9.87418674,14.9068618 9.48366245,14.5163376 C9.09313816,14.1258133 9.09313816,13.4926483 9.48366245,13.102124 L13.2928932,9.29289322 Z" id="Line"></path></svg>
                    <span>{this.props.details.reading_time}</span>
                </div>
                <h1 className={"banner-title"}>{this.props.details.title}</h1>
            </div>
        )
    }
}

export default BannerFeatured