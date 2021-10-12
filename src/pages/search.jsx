import React from "react"
import Layout from "../components/Layout/Layout.jsx"
import Result from "../components/Result/Result";
import BannerResult from "../components/Banner/BannerResult.jsx";

class searchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchKey: '',
        }

        console.log("construct")
        this.updateSearchKey = this.updateSearchKey.bind(this)
    }

    // 统一处理url的变化，更新props, 监听不到的
    componentDidMount() {
        console.log("mount")
        if (window) {
            this.updateSearchKey()
        }
    }

    componentWillUnmount() {
    }

    componentDidUpdate() {
        // 没有watch手动监视
        let _currUrl = window.location.search.substring(5) || ''
        _currUrl != this.state.searchKey && this.updateSearchKey()
    }

    updateSearchKey() {
        console.log('update key')
        this.setState({
            searchKey: window.location.search.substring(5) || ''
        })
    }

    render() {
        return (
            <Layout>
                {/* {console.log(this)} */}
                <BannerResult info={{ searchKey: this.state.searchKey }}></BannerResult>
                <Result searchKey={this.state.searchKey}></Result>
            </Layout>
        )
    }
}

export default searchPage
