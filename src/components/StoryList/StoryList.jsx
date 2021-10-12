// 这个组件用来整个全局reset,每个页面都是单独的页面
import React from "react"
import "./StoryList.scss"

import Card from "./Card/Card.jsx";

class StoryList extends React.Component {
    constructor(props) {
        super(props)
        // console.log("TCL: StoryList -> constructor -> props", props)
    }

    render() {
        let currDirection = 'left'
        const itemENUM = {
            'left': (item) => {
                currDirection = 'right'
                return <Card direction='left' info={item} key={item.id}></Card>
            },
            'right': (item) => {
                currDirection = 'left'
                return <Card direction='right' info={item} key={item.id}></Card>
            },
        }
        let items = this.props.items.map(item => itemENUM[currDirection](item))

        return (
            <div className={"story-list"}>{items}</div>
        )
    }
}

export default StoryList
