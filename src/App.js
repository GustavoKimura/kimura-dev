import React from "react";

import AppContainer from './component/AppContainer'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.INITIAL_HEADER_OPACITY = 0
        this.INITIAL_HEADER_PADDING = 35

        this.FINAL_HEADER_OPACITY = 0.9
        this.FINAL_HEADER_PADDING = 24

        this.state = {
            headerOpacity: this.INITIAL_HEADER_OPACITY,
            headerPadding: this.INITIAL_HEADER_PADDING
        }
    }

    componentDidMount() {
        window.onscroll = () => {
            const Y_PIXELS_TO_ANIMATE_HEADER = 50

            const animateHeader = window.scrollY >= Y_PIXELS_TO_ANIMATE_HEADER

            this.setState({
                headerOpacity: animateHeader ? this.FINAL_HEADER_OPACITY: this.INITIAL_HEADER_OPACITY,
                headerPadding: animateHeader ? this.FINAL_HEADER_PADDING: this.INITIAL_HEADER_PADDING
            })
        }
    }

    render() {
        return (
            <AppContainer
                headerOpacity={this.state.headerOpacity}
                headerPadding={this.state.headerPadding}
            />
        )
    }
}

export default App;
