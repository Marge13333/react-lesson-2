import React from 'react';
import {DefaultPlayer as Video} from 'react-html5video';
import introVideo from "./video/gtfh.mp4"
import 'react-html5video/dist/styles.css'

const player = () =>{
    return (
            <Video autoPlay loop
            >
                <source src={introVideo} type='video/webn'/>

            </Video>
    )
}
export default player;