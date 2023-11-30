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
  return (
    <>
<div className="container">
<div className="mb-3">
<label htmlFor="exampleFormControlTextarea1" className="form-label">Text Below</label>
<textarea className="form-control" value={text} onChange={handleOnchange}   id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowclick}>Convert to Lowercase</button>
    </div>
<div className="container">
    <h3>Your Text Summary</h3>
    <p>{text.length} characters, {text.split(" ").length} words</p>
    <p>Time require to read the word:{0.008*text.split(" ").length} Minutes</p>
</div>
    </>
  )
}

export default Textform

