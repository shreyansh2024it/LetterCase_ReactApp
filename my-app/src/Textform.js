import React,{useState} from 'react'


export default function 
() {
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
    const [text, setText] = useState("Enter Text Here");
  return (
    <div>
<div class="mb-3">
<label htmlFor="exampleFormControlTextarea1" className="form-label">Text Below</label>
<textarea className="form-control" value={text} onChange={handleOnchange}   id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary" onClick={handleLowclick}>Convert to Lowercase</button>
    </div>
  )
}
