import React from 'react'

class ShowVideoDisplay extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount(prevProp){
    this.props.fetchVideo(this.props.videoId)
  }
  
  // componentDidUpdate(prevProp) {
  //   if(this.props.match.params.videoId !== prevProp.match.params.videoId){
  //      this.props.fetchVideo(this.props.match.params.videoId);
  //   }
  // }


  render(){
    const { video } = this.props;
    return(
      <div className='playing-video'>
        {
          video ? <video src={`/api/videos/stream/${video.file}`} controls autoPlay></video> : null
        }
      </div>
    )
  }
}

export default ShowVideoDisplay;