import React, { Component } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss' 

const playlist = [
  { name: 'newsletter  (31 May - 4 June) ', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3' },
  { name: 'newsletter  (7 June - 11 june)', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3' },
  { name: 'newsletter  (14 June - 18 June)', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3' },
  { name: 'newsletter  (21 June - 25 June)', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3' },
  { name: 'newsletter  (28 june - 2 July)', src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/yonghengdegangwan.mp3' },
]

class PlayList extends Component{
  state = {
    currentMusicIndex: 0,
    windowWidth: window.innerWidth,
    height: window.innerHeight
  }

  handleClickPrevious = () => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
    }))
  }

  handleClickNext = () => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
    }))
  }

  playSelected = (index) => {
    this.setState(() => ({
        currentMusicIndex: index
      }))
  }

  downloadFile = (url) =>{
      window.open(url)
  }

  render(){
    const { currentMusicIndex, windowWidth, height } = this.state
    return (
      <div style={{width:windowWidth , height:height, maxHeight: height, overflow:"none"}}>
        <div>
            {
                playlist.map((e, index) =>(
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div onClick={() => this.playSelected(index)}>{e.name}</div>
                        <button onClick={()=> this.downloadFile(e.src)}>Download</button>
                    </div>
                ))
            }
        </div>
        <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxWidth: windowWidth
}}>
        <AudioPlayer
          autoPlayAfterSrcChange={true}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          showSkipControls={true}
          showJumpControls={false}
          src={playlist[currentMusicIndex].src}
          onClickPrevious={this.handleClickPrevious}
          onClickNext={this.handleClickNext}
          autoPlay={false}
        />
        </div>
      </div>
    )
  }
}

export default PlayList