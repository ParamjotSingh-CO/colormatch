import './GameBody/style.css'
import './GameBody'
import ColorBand from './ColorBand';

function GameBody(){
    return(
        <>
        <div className="container p-2">
            <div className="row justify-content-center">
                <div className="col">
                </div>
                <div className="col-6">
                    <div className="container p-1 m-1">
                        <ColorBand></ColorBand>
                        <ColorBand></ColorBand>
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
        </>
    )
}

export default GameBody;