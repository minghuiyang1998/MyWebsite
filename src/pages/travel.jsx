import React from "react"
import Layout from "../components/Layout/Layout.jsx"
import Result from "../components/Result/Result";
import BannerResult from "../components/Banner/BannerResult.jsx";



class TravelPage extends React.Component {
    render() {
        return (
            <Layout>
                <BannerResult info={{
                    searchKey: "Develop",
                    text: "Main in frontend development",
                }}></BannerResult>
                <Result searchKey="travel"></Result>
            </Layout>
        )
    }
}

export default TravelPage
