import React, { useEffect, useState,useRef} from 'react';
import './Quote.css'
import './Footer'
import Footer from './Footer';
const Quote = () => {
  
    const [quotes, setQuotes] = useState({});
    const textRef = useRef();
    let colors =["#ffff00", "#90ee90","#ffa500" ,"#ff68ff" , "#a9a9e7"];
    const getQuote = () => {
      fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
          let randomNum = Math.floor(Math.random() * data.length);
          setQuotes(data[randomNum]);
        });
    };
    useEffect(() => {
      getQuote();
    }, []);
    useEffect(() => {
      textRef.current.style.color =colors[Math.floor(Math.random() * colors.length)];
    }, [quotes]);
    return (
        <>
          <div className="quote">
            <p ref={textRef}>{quotes.text}</p>
            <p>Author: {quotes.author}</p>
            <div className="btnContainer">
              <button onClick={getQuote} className="btn">Get quote</button>
              < a 
              href={`https://twitter.com/intent/tweet?text=${quotes.text}`} 
              target="blank"
              rel="noopener noreferrer"
              className="btn">
                Tweet
              </a>
            </div>
          </div>       
      </>
  
      );
    };
    
    export default Quote;