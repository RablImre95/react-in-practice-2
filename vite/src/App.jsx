import { useEffect, useState } from "react";
import fileData from './data.json'
import './App.css'

function App() {
  // fetch("http://tools.lawandtranslation.com/align/martaricsi/32016R0679/HU/EN")
  // .then(res => res.json())
  // .then(data => console.log(data))

const [data, setData] = useState(null);
const [lang, setLang] = useState("EN")


useEffect(() => {
  setData(fileData);
},[]) //Data should come from fetch, could not get it because of CORS

const handleClick = () => {
  // lang === "HU" ? setLang("EN") : setLang("HU");
  setLang(lang === "HU" ? "EN" : "HU")
}

  return (
    <>
    {data 
      ? <>
      < div className="lang" onClick={handleClick}>
      <span className={lang === "HU" ? "selected" : ""}>HU</span>
      /
      <span className={lang === "EN" ? "selected" : ""}>EN</span>
      </div>
      {data.TUs.map((obj,index) => <p key={index}>{obj[lang]}</p>)}
        </>
      : "loading"
    }
    </>
  )
}

export default App;
