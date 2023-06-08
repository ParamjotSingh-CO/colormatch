
import { solidColor } from "./SolidColor";

function ColorBand({setBandColor, setBandColorLabel}) {

    var colorNameLabelTextColorCode;
    var bandColorLabel;


    selectRandomSolidColorName();      
    selectRandomSolidColorLabel();       

    function selectRandomSolidColorName() {
        var randomInt = getRandomInt(solidColor.size);
        
        console.log(`HexCode: ${solidColor.get(randomInt).HexCode}`);        
        colorNameLabelTextColorCode = solidColor.get(randomInt).HexCode;        
        console.log(`font color: ${colorNameLabelTextColorCode}`); 

        setBandColor(solidColor.get(randomInt).ColorName);        
        console.log(`Color Name: ${solidColor.get(randomInt).ColorName}`);
    }

    function selectRandomSolidColorLabel(){
        var randomInt = getRandomInt(solidColor.size);
        
        bandColorLabel = solidColor.get(randomInt).ColorName;
        console.log(`Color name label: ${bandColorLabel}`);
        setBandColorLabel(bandColorLabel);
    }

    function getRandomInt(max) {
        var val = Math.floor(Math.random() * max);
        if(val === 0)
            val  = 1;
        return val;
    }

    return (
        <>
            <div className="row colorBar align-items-center" style={{backgroundColor: `white`}}>
                <div className="col text-center" style={{color: `#${colorNameLabelTextColorCode}`}}>
                    <h1 className="colorLabel">{bandColorLabel}</h1>
                </div>                
            </div>
        </>
    )
}

export default ColorBand;