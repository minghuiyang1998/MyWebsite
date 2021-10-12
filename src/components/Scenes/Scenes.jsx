import React from "react"
import './Scenes.scss'


class Scenes extends React.Component {
    constructor(props) {
        super(props)

        this.travelScene = React.createRef();
        this.developScene = React.createRef();
        this.dailyScene = React.createRef();

        this.handleScroll = this.handleScroll.bind(this)

        this.state = {
            current: '',
            transPosTravel: [0, 0, 0, 0, 0],
            transPosDevelop: [0, 0, 0, 0, 0],
            transPosDaily: [0, 0, 0, 0, 0], // 每个block每层一个基于当前scrolltop的transform
            initBlockPos: {}, // 页面初始化的时候每个block的上边距位置用于判断是否visible
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const travelOffsetTop = this.travelScene.current.offsetTop
        const developOffsetTop = this.developScene.current.offsetTop
        const dailyOffsetTop = this.dailyScene.current.offsetTop

        let scrollTop = window.pageYOffset + window.innerHeight - 400
        console.log("TCL: Scenes -> handleScroll -> scrollTop", scrollTop)
        let currentBlock = ''
        if (scrollTop >= travelOffsetTop && scrollTop < developOffsetTop) {
            currentBlock = 'Travel'
        }
        if (scrollTop >= developOffsetTop && scrollTop < dailyOffsetTop) {
            currentBlock = 'Develop'
        }
        if (scrollTop >= dailyOffsetTop) {
            currentBlock = 'Daily'
        }

        const v = [0, -0.6, -1.2, -1.2, -1.3]
        if (currentBlock.length) {
            let offset = scrollTop - this.state.initBlockPos[`${currentBlock}OffsetTop`]
            this.setState({
                [`transPos${currentBlock}`]: [0, offset * v[1], offset * v[2], offset * v[3], offset * v[4]],
                current: currentBlock
            })
            // console.log(this.state[`transPos${currentBlock}`], this.state.initBlockPos)
        }


    }

    render() {
        return (
            // <div style={{ backgroundColor: 'rgb(240, 142, 142)' }}>
            <div className={"position-relative"}>
                <div id="travel-scene" className={"scene"} ref={this.travelScene}>
                    <div className={"scene-header"} style={{ backgroundImage: `url(http://blog.minghuiyang1998.com/nz_3.jpeg)` }}>
                        <div className={"title-wrap"}>
                            <h1 className={"title"}>Travel</h1>
                        </div>
                    </div>
                    <div className={"photos"}>
                        <div className={"square-text"} >
                            <span>New Zealand,<br /> Thailand,<br />Japan, Korea, <br /> Singapore ...</span>
                            <div className={"square-anim"} visible={this.state.current}>
                                <div className={"top-line"}></div>
                                <div className={"right-line"}></div>
                                <div className={"bot-line"}></div>
                                <div className={"left-line"}></div>
                            </div>
                        </div>
                        <div id="img-1" className={"photo-wrapper"}>
                            <img alt="" className={"img-m"} src="http://blog.minghuiyang1998.com/9461558419052_.pic_hd.jpg" ></img>
                            <div className={"img-background"}></div>
                        </div>
                        <div id="img-2" className={"photo-wrapper"}>
                            <img alt="" className={"img-m"} src="http://blog.minghuiyang1998.com/9471558420106_.pic_hd.jpg" ></img>
                            <div className={"img-background"}></div>
                        </div>
                        <div id="img-3" className={"photo-wrapper"}>
                            <img alt="" src="http://blog.minghuiyang1998.com/9481558420897_.pic_hd.jpg"></img>
                            <div className={"img-background"}></div>
                        </div>
                    </div>
                </div>

                <div id="develop-scene" className={"scene"} ref={this.developScene}>
                    <div className={"scene-header"} style={{ backgroundImage: `url(http://blog.minghuiyang1998.com/laptop.jpg)` }}>
                        <div className={"title-wrap"}>
                            <h1 className={"title"}>Develop</h1>
                        </div>
                    </div>
                    <div className={"photos"}>
                        <div className={"square-text"}>
                            <span>JavaScript, CSS, Html, <br /> OS, Internet, Algorithm ...</span>
                            <div className={"square-anim"}  visible={this.state.current}>
                                <div className={"top-line"}></div>
                                <div className={"right-line"}></div>
                                <div className={"bot-line"}></div>
                                <div className={"left-line"}></div>
                            </div>
                        </div>
                        <div id="img-1" className={"photo-wrapper"}>
                            <img alt="" className={"img-m"} src="http://blog.minghuiyang1998.com/something-about-css.jpg" ></img>
                            <div className={"img-background"}></div>
                        </div>
                        <div id="img-2" className={"photo-wrapper"}>
                            <img alt="" className={"img-m"} src="http://blog.minghuiyang1998.com/vue-react-wxminiapp.jpg" ></img>
                            <div className={"img-background"}></div>
                        </div>
                        <div id="img-3" className={"photo-wrapper"}>
                            <img alt="" src="http://blog.minghuiyang1998.com/browser-render-blog.jpg"></img>
                            <div className={"img-background"}></div>
                        </div>
                    </div>
                </div>

                <div id="daily-scene" className={"scene"} ref={this.dailyScene}>
                    <div className={"scene-header"} style={{ backgroundImage: `url(http://blog.minghuiyang1998.com/tongji.jpeg)` }}>
                        <div className={"title-wrap"}>
                            <h1 className={"title"}>Daily</h1>
                        </div>
                    </div>
                    <div className={"photos"}>
                        <div id="img-1" className={"photo-wrapper"}>
                            <img alt="" src="http://blog.minghuiyang1998.com/run.jpg"></img>
                            <div className={"img-background"}></div>
                        </div>
                        <div id="img-2" className={"photo-wrapper"}>
                            <img alt="" className={"img-m"} src="http://blog.minghuiyang1998.com/tj-1.jpeg" ></img>
                            <div className={"img-background"}></div>
                        </div>
                        <div className={"square-text"}>
                            <span>running,<br /> tongji sse,<br />thinking ...</span>
                            <div className={"square-anim"}  visible={this.state.current}>
                                <div className={"top-line"}></div>
                                <div className={"right-line"}></div>
                                <div className={"bot-line"}></div>
                                <div className={"left-line"}></div>
                            </div>
                        </div>
                        <div id="img-3" className={"photo-wrapper"}>
                            <img alt="" className={"img-m"} src="http://blog.minghuiyang1998.com/project.jpeg" ></img>
                            <div className={"img-background"}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Scenes