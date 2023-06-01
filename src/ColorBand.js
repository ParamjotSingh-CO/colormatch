
import { solidColor } from "./SolidColor";

function ColorBand() {

    let bandBackgroundName;
    let bandColorLabel;    
    var colorNameLabelFontColor = "white";

    selectRandomSolidColorName();      
    selectRandomSolidColorLabel();

    function selectRandomSolidColorName() {
        var randomInt = getRandomInt(solidColor.size);
        if(randomInt > 4)
            colorNameLabelFontColor = "black";

        console.log(`font color: ${colorNameLabelFontColor}`);
        console.log(`HexCode: ${solidColor.get(randomInt).HexCode}`);
        console.log(`Color Name: ${solidColor.get(randomInt).ColorName}`)
        
        bandBackgroundName = solidColor.get(randomInt).HexCode;
    }

    function selectRandomSolidColorLabel(){
        var randomInt = getRandomInt(solidColor.size);
        
        console.log(`Color name label: ${solidColor.get(randomInt).ColorName}`);

        bandColorLabel = solidColor.get(randomInt).ColorName;
    }

    function getRandomInt(max) {
        var val = Math.floor(Math.random() * max);
        if(val === 0)
            val  = 1;
        return val;
    }

    return (
        <>
            <div className="row colorBar align-items-center" style={{backgroundColor: `#${bandBackgroundName}`}}>
                <div className="col text-center" style={{color: colorNameLabelFontColor}}>
                    <p>{bandColorLabel}</p>
                </div>                
            </div>
        </>
    )
}

export default ColorBand;