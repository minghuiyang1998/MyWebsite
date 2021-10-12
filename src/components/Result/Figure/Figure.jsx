import React from "react"
import "./Figure.scss"
import { navigate } from "gatsby"

class Figure extends React.Component {
    render() {
        return (
            <figure className={"figure"} onClick={() => { navigate(this.props.info.path)}}>
                <div className={"position-relative mb-1"} style={{ paddingBottom: this.props.info.image_height / this.props.info.image_width * 100 + '%'}}>
                    <img className={"image"} src={this.props.info.image} style={{ backgroundColor: `rgb(${this.props.info.palette.Muted.join()})`}}></img>
                    <div className={"digest"}>
                        <div className={"content"}>{this.props.info.digest}</div>
                    </div>
                </div>
                <figcaption className={"title"}>{this.props.info.title}</figcaption>
                {this.props.info.tags.map((tag, index) => <span className={"tag"} key={index}>{tag}</span>)}
            </figure>
        )
    }
}

export default Figure