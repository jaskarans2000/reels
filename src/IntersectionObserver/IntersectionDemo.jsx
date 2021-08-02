import React,{useEffect} from 'react';
import v1 from './vid1.mp4'
import v2 from  './vid2.mp4'
import v3 from './vid3.mp4'
import v4 from './vid4.mp4'
import './inter.css';


function IntersectionDemo() {

    const callBack=(enteries)=>{
        enteries.forEach((entry)=>{
            let child=entry.target.children[0];
            console.log(child.id)
            if(entry.isIntersecting){
                child.play();
            }else{
                child.pause();
            }
        })
    }

    useEffect(() => {
        let conditionObject={
            root:null,
            threshold:'0.8'
        }
        let observer=new IntersectionObserver(callBack,conditionObject);
        let elements=document.querySelectorAll(".video-container");
        elements.forEach((ele)=>{
            observer.observe(ele);
        })
    }, [])

    return (
        <div>
            <div className="video-container">
                <Video src={v1} id="a"></Video>
            </div>
            <div className="video-container">
                <Video src={v2} id="b"></Video>
            </div>
            <div className="video-container">
                <Video src={v3} id="c"></Video>
            </div>
            <div className="video-container">
                <Video src={v4} id="d"></Video>
            </div>
        </div>
    )
}

export default IntersectionDemo



function Video(props){
        
    return(
        <video className="video-styles" controls muted="true" id={props.id}>
            <source src={props.src}  type="video/mp4" >
            </source>
        </video>
    )
}
