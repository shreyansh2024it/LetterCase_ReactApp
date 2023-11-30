import React,{useState} from 'react'

const Textform = () => {
    const [text, setText] = useState("");
    const handleUpclick=()=>{
        console.log("Uppercase Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)

    }

    const handleOnchange=(event)=>{
        console.log("On Click");
        setText(event.target.value)

    }
    const handleLowclick=()=>{
        console.log("Lowercase Clicked");
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleCapitalize=()=>{
        console.log("Capitalize Clicked");
        let newText=text.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");;
        setText(newText)

    }

    const handleAlternate=()=>{
        console.log("Alternate clicked");
        const ch=text.split("");
        for(let i=1;i<ch.length;i+=2){
            ch[i]=ch[i].toUpperCase();

        }
        let newText=ch.join("");
        setText(newText)
        
    }
    const handleToggle=()=>{
        console.log("Toggle Clicked");
        let toggle=text.split("").map(char=>char===char.toUpperCase()?char.toLowerCase():char.toUpperCase()).join("");
        setText(toggle)
    }
    

    
  return (
    <>
<div className="container">
<div className="mb-3">
<label htmlFor="exampleFormControlTextarea1" className="form-label">Text Below</label>
<textarea className="form-control" value={text} onChange={handleOnchange}   id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpclick}>UPPERCASE</button>
<button className="btn btn-primary mx-2" onClick={handleLowclick}>lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize Word</button>
<button className="btn btn-primary mx-2" onClick={handleAlternate}>aLtErNaTe CaSe</button>
<button className="btn btn-primary mx-2" onClick={handleToggle}>tOGGLE cASE</button>

    </div>
<div className="container">
    <h3>Your Text Summary</h3>
    <p>{text.length} characters, {text.split(" ").length} words</p>
   
</div>



    </>
  )
}

export default Textform

