import React from "react"
import { Link } from "gatsby";

class NotFound extends React.Component {
    render() {
        return (
            <div style={{
                backgroundImage: "url(https://jasmine-blog-1256893771.cos.ap-shanghai.myqcloud.com/404.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0"
            }}>
                <Link to="/" style={{
                    position: "fixed",
                    top: "80%",
                    left: "50%",
                    width: "9rem",
                    height: "3rem",
                }}></Link>
            </div>
        )
    }

}

export default NotFound