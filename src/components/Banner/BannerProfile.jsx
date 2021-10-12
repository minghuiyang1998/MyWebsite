import React from "react"
import "./BannerProfile.scss"
import { Link } from "gatsby"

class BannerProfile extends React.Component {
    render() {
        return (
            <div className={"banner-profile"}>
                <div className={"banner"}>
                    <div className={"info"}>
                        <div className={"name"}>Jasmine</div>
                        {/* <Link className={"link"} to="/">about me</Link> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default BannerProfile