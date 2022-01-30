import React,{useState} from 'react'
import { Icon } from 'react-icons-kit'


import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {instagram} from 'react-icons-kit/fa/instagram'
import {githubSquare} from 'react-icons-kit/fa/githubSquare'
import {codepen} from 'react-icons-kit/fa/codepen'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay'


const icons={
    "facebook":facebookSquare,
    "instagram":instagram,
    "youtube":youtubePlay,
    "git":githubSquare,
    "codepen":codepen
}
const LinkIcon = ({name, link,primaryColor,secondaryColor}) => {

    const [active, setActive] = useState(false);
    
    return (
    <a href={link}><Icon 
      size={40}
      icon={icons[name]}
      style={{color:active?secondaryColor:primaryColor}} 
      className="mr-2"
      onMouseOver={()=>{setActive(!active)}} 
      onMouseOut={()=>{setActive(!active)}}
      /></a>
    )
}

export default LinkIcon

