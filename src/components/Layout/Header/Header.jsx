import React from "react"
import { Link } from "gatsby"
import "./Header.scss"
import { navigate } from "gatsby"

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { searchKey: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("TCL: Header -> onSearchButtonTap -> this.state.searchKey", this.state.searchKey)
        navigate(`/search?key=${this.state.searchKey}`) // 当页面不刷新的时候state不会透传，不如不用：）
    }

    handleChange(event) {
        this.setState({ searchKey: event.target.value });
    }

    render() {
        return (
            <div className={"header-wrap"}>
                <header className={"header"}>
                    <div className={"logo"}>
                        <Link className={"header-link"} to="/">
                            <svg className={"octicon"} width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <g id="Group" transform="translate(0.000000, -3.000000)">
                                    <rect id="Rectangle" x="0" y="3" width="64" height="64" rx="32"></rect>
                                    <text id="J" style={{ fontSize: "48", fontFamily: "PingFangSC-Medium, PingFang SC", fontWeight: "400" }}>
                                        <tspan x="19.708" y="51">J</tspan>
                                    </text>
                                </g>
                            </svg>
                        </Link>
                    </div>
                    <nav className={"nav"}>
                        <Link className={"header-link"} to="/develop">Develop</Link>
                        <Link className={"header-link"} to="/travel">Travel</Link>
                        {/* <Link className={"header-link"} to="/classification">Classification</Link> */}
                    </nav>
                    <form onSubmit={this.handleSubmit} className={"header-search"}>
                        <input className={"input"} type="text" autoComplete="off" placeholder="Search or jump to..." value={this.state.searchKey} onChange={this.handleChange} />
                        <button type="submit" className="search-button">
                            <svg t="1555994577347" className={"icon"} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1107">
                                <path d="M702.537056 608.55508c85.516676-129.373533 71.343885-305.235866-42.583864-419.164638-130.141012-130.141012-341.126284-130.141012-471.26832 0-130.141012 130.141012-130.141012 341.127308 0 471.26832 113.928772 113.927749 289.790082 128.101563 419.163615 42.582841 13.449313 2.808976 27.335578 1.909489 40.410362-2.061962-8.972349 27.489074-3.180436 58.4666 18.276249 79.922261l153.658635 153.671938c30.670533 30.66951 81.020268 30.05655 112.479771-1.403976 31.439036-31.461549 32.05302-81.799004 1.382487-112.49205L780.396331 667.239644c-21.455661-21.456684-52.432163-27.247574-79.922261-18.275225C704.468035 635.888612 705.367521 622.002346 702.537056 608.55508zM255.116887 594.71077c-92.976578-92.977601-92.976578-243.718791 0-336.696392 92.976578-92.998067 243.717767-92.976578 336.672856 0 92.999091 92.977601 92.999091 243.696278 0 336.696392C498.834654 687.688371 348.093465 687.688371 255.116887 594.71077z" p-id="1108" ></path>
                            </svg>
                        </button>
                    </form>
                    <details className={"details"}>
                        <summary>
                            <div className={"header-link"}>
                                <span className={"icon-menu"}></span>
                            </div>
                        </summary>
                        <div className={"dropdown-menu"}>
                            <form onSubmit={this.handleSubmit} className={"dropdown-search"}>
                                <input className={"input"} type="text" autoComplete="off" placeholder="Search" value={this.state.searchKey} onChange={this.handleChange} />
                                <button type="submit" className="search-button">
                                    <svg t="1555994577347" className={"icon"} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1107">
                                        <path d="M702.537056 608.55508c85.516676-129.373533 71.343885-305.235866-42.583864-419.164638-130.141012-130.141012-341.126284-130.141012-471.26832 0-130.141012 130.141012-130.141012 341.127308 0 471.26832 113.928772 113.927749 289.790082 128.101563 419.163615 42.582841 13.449313 2.808976 27.335578 1.909489 40.410362-2.061962-8.972349 27.489074-3.180436 58.4666 18.276249 79.922261l153.658635 153.671938c30.670533 30.66951 81.020268 30.05655 112.479771-1.403976 31.439036-31.461549 32.05302-81.799004 1.382487-112.49205L780.396331 667.239644c-21.455661-21.456684-52.432163-27.247574-79.922261-18.275225C704.468035 635.888612 705.367521 622.002346 702.537056 608.55508zM255.116887 594.71077c-92.976578-92.977601-92.976578-243.718791 0-336.696392 92.976578-92.998067 243.717767-92.976578 336.672856 0 92.999091 92.977601 92.999091 243.696278 0 336.696392C498.834654 687.688371 348.093465 687.688371 255.116887 594.71077z" p-id="1108"></path>
                                    </svg>
                                </button>
                            </form>
                            <Link className={"dropdown-item"} to="/develop">Develop</Link>
                            <Link className={"dropdown-item"} to="/travel">travel</Link>
                            <Link className={"dropdown-item"} to="/classification">classification</Link>
                        </div>
                    </details>
                    <span className={"menu"}></span>
                </header>
            </div>
        )
    }
}

export default Header
