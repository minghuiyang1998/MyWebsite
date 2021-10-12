import React from "react"
import "./BannerResult.scss"

class BannerResult extends React.Component {
    render() {
        return (
            <div className={"banner-result"}>
                <h1>{this.props.info.searchKey.length ? this.props.info.searchKey : 'Total'}</h1>
                <h2>{this.props.info.text}</h2>
            </div>
        )
    }
}

export default BannerResult