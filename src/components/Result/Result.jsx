import React from "react"
import './Result.scss'
import Figure from './Figure/Figure.jsx'
import { StaticQuery, graphql } from "gatsby"


class PureResult extends React.Component {
    // 根据屏幕大小决定返回3 /  2/ 1个itemlist，每个iterm内部排列
    constructor(props) {
        super(props)
        this.state = {
            rawData: [],
            matrix: []
        }

        this._refresh = this._refresh.bind(this)
        this.handleLayout = this.handleLayout.bind(this)
    }

    componentDidMount() {
        // console.log('mount')
        this._refresh()
        window.addEventListener('resize', this.handleLayout);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleLayout);
    }

    componentDidUpdate(prevProps) {
        // 简单处理没法使用watch
        // console.log('update')
        if (prevProps.searchKey != this.props.searchKey) {
            this._refresh()
        }
    }

    _refresh() {
        // console.log('refresh')
        let tempData
        if (this.props.searchKey) {
            tempData = this.props.data.filter((item) => {
                let str = item.tags.join().concat(item.type, item.title).toLowerCase()
                return str.search(this.props.searchKey.toLowerCase()) >= 0
            })
        } else{
            tempData = this.props.data
        }

        this.setState({
            rawData: tempData
        }, () => { // setState是异步的会导致更新不及时
            this.handleLayout() // 初始化获取一波监听
        })
    }

    handleLayout() {
        let windowWidth = window.innerWidth
        // console.log("TCL: Result -> handleLayout -> windowWidth", windowWidth)
        if (windowWidth < 650) {
            // console.log('650')
            let temp = [this.state.rawData.map((i) => {
                return { info: i, key: i.id }
            })]
            this.setState({
                matrix: temp
            })
        } else if (windowWidth < 1000) {
            // console.log('1000')
            let curr = 0
            let temp = [[], []]
            this.state.rawData.forEach((value) => {
                temp[curr].push({ info: value, key: value.id })
                curr = curr === 1 ? 0 : 1
            })
            this.setState({
                matrix: temp
            })
        } else {
            // console.log('>1000')
            let curr = 0
            let temp = [[], [], []]
            this.state.rawData.forEach((value) => {
                temp[curr].push({ info: value, key: value.id })
                curr = curr === 2 ? 0 : curr + 1
            })

            this.setState({
                matrix: temp
            })
        }
    }

    render() {
        return (
            <div>
                <h2 className={"total-count"}>{this.state.rawData.length} Articles</h2>
                <div className={"result"}>
                    {this.state.matrix.map((v, i) => <div className={"colume"} key={i.toString()}>{v.map(f => <Figure key={f.key} info={f.info}></Figure>)}</div>)}
                </div>
            </div>
        )
    }
}

// sort by frontend
export const Result = props => (
    <StaticQuery query={graphql`
    {
        allMarkdownRemark(
            sort: { fields: [frontmatter___create_date], order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        id
                        type
                        title
                        author
                        digest
                        create_date
                        update_date
                        reading_time
                        path
                        image
                        tags
                        image_height
                        image_width
                        palette {
                            Vibrant
                            DarkVibrant
                            LightVibrant
                            Muted
                            DarkMuted
                            LightMuted
                        }
                    }
                }
            }
        }
    }`} render={data => <PureResult {...props} data={data.allMarkdownRemark.edges.map(i => i.node.frontmatter)} />}
    />
)

export default Result