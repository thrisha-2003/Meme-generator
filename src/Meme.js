
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import React from 'react';

export default function Memes(){
    let url;
    //const [getimg,setgetimage]=React.useState("http://i.imgflip.com/1bij.jpg");
    const [meme,getmeme]=React.useState({
        toptext:"",
        bottomtext:"",
        randomurl:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes]=React.useState([]);
    function getimage(){
        
        const ran=Math.floor(Math.random()*allMemes.length);
        url=allMemes[ran].url;
       // console.log(url);
        getmeme(prevdata=>({
            ...prevdata,
            randomurl:url
        }));
    }
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handledata(event){
        const {name,value}=event.target
        getmeme(prev=>({
            ...prev,
            [name]:value
        })
        )
    }
    return(
        <main>
            <div className="form">
                <div className="abc">
                    <div className="abcd">
                    <input 
                    type="text"  
                    onChange={handledata}
                    value={meme.toptext}

                    name="toptext"
                    className="form-control" 
                    style={{ width: '500px'}}  
                    placeholder='Top Text' aria-label="Username" aria-describedby="addon-wrapping" />
                    <input 
                    type="text" 
                    onChange={handledata}
                    value={meme.topbottom}
                    name="bottomtext"
                    className="form-control" 
                    style={{ width: '500px' }} 
                    placeholder='Bottom Text' aria-label="Username" aria-describedby="addon-wrapping" 
                    />
                    </div>
                <div>
                <button type="button"   onClick={getimage}  className="btn btn-dark">Get a new Meme Image</button>
                <div className="imagestyle" onClick={getimage}><img src={meme.randomurl} alt="imagememe" />
                <h2 className="meme--text top">
                {meme.toptext}</h2>
                <h2 className="meme--text bottom">
                {meme.bottomtext}</h2>
                </div>
                </div>
                </div>
                 
            </div>
        </main>
        
    );
}
