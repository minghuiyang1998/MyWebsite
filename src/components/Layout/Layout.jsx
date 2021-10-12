// 这个组件用来整个全局reset,每个页面都是单独的页面
import React from "react"
import "./reset.scss"
import "./global.scss"
import "./layout.scss"

import Header from "./Header/Header.jsx"
import Container from "./Container/Container.jsx"
import Footer from "./Footer/Footer";

class Layout extends React.Component {
    render() {
        return (
            <div className={"layout"}>
                <Header></Header>
                <Container>
                    {this.props.children}
                </Container>
                <Footer></Footer>
            </div>
        )
    }
}

export default Layout
