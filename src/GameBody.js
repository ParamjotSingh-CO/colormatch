import './GameBody/style.css'
import './GameBody'
import ColorBand from './ColorBand';
import { useState } from 'react';

function GameBody(){    

    const [result, setResult] = useState({msg: ""});    
    const [shouldShowGameHelp, setShouldShowGameHelp] = useState(true);

    let northBandColor = "";
    let northBandColorLabel = "";
    let southBandColor = "";
    let southBandColorLabel = "";   

    function handleNorthBandColor(data){
        northBandColor = data;
    }
    function handleNorthBandColorLabel(data){
        northBandColorLabel= data;
    }
    function handleSouthBandColor(data){
        southBandColor = data;
    }
    function handleSouthBandColorLabel(data){
        southBandColorLabel = data;
    }

    function handleClick(answer){

        if((northBandColorLabel === southBandColor && answer === 1) ||
            (northBandColorLabel !== southBandColor && answer === 0)){
            setResult({msg: "passed"}); 
            setShouldShowGameHelp(false);           
        }
        else{
            setResult({msg: "failed"});
            setShouldShowGameHelp(true);
        }
    }
    return(
        <>
        <div className="container p-2">
            <div className="row justify-content-center gameBodyRow">
                <div className="col">
                </div>
                <div className="col-6">
                    <div className="container p-1 m-1">
                        <ColorBand setBandColor={handleNorthBandColor} setBandColorLabel={handleNorthBandColorLabel} ></ColorBand>
                        <ColorBand setBandColor={handleSouthBandColor} setBandColorLabel={handleSouthBandColorLabel} ></ColorBand>
                    </div>
                </div>
                <div className="col">                             
                </div>
            </div>
            <div className="row justify-content-center gameBodyRow">
                <div className="col">
                </div>
                <div className="col-6">
                    <button className="btn btn-primary" onClick={() =>handleClick(1)}>Yes</button>         
                    <button className="btn btn-secondary" onClick={() =>handleClick(0)}>No</button> 
                </div>
                <div className="col">
                    <p>{result.msg}</p>
                </div>
            </div>            
        </div>
        </>
    )
}

export default GameBody;