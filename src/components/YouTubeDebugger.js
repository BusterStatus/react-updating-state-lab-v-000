import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super();

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    bitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    resolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        });
    }

    render () {
        return (
            <div>
                <button className='bitrate' onClick={this.bitrate}>bitrate</button>
                <button className='resolution' onClick={this.resolution}>resolution</button>
            </div>
        );
    }
}

export default YouTubeDebugger;
