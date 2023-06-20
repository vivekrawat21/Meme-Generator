import React from 'react';

export default function Hero_meme() {
  const [allmeme, setAllmeme] = React.useState([]);
  const [formData ,setFormData] = React.useState({
  
  topText : '',
  bottomText : ''
  
  })
  const [memeImage ,setMemeImage] = React.useState([])
  React.useEffect(()=>{

  fetch("https://api.imgflip.com/get_memes")
.then(res => res.json())
.then (data => setAllmeme(data.data.memes))
},[])
  // console.log(allmeme)
  console.log(memeImage)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  function getMemeImage() {
    const random = Math.floor(Math.random() * allmeme.length);
    setMemeImage(allmeme[random].url);
  }

  return (
    <>
      <div className="border-[3px] border-gray-300 mx-auto w-[60vw] my-9 h-[70vh] rounded-lg pt-5 bg-blue-100">
        <div className="flex justify-center">
          <input
          name='topText'
            type="text"
            placeholder="top-Text"
            id="top-text"
            className="border-4 mx-8 w-[30vw] h-[5vh] border-gray-400 px-5 font-bold"
            value={formData.topText}
            onChange={handleChange}
          />
          <input
          name='bottomText'
            type="text"
            placeholder="bottom-Text"
            id="bottom-text"
            className="border-4 w-[30vw] h-[5vh] border-gray-400 px-5 font-bold mx-6"
            value={formData.bottomText}
           onChange={handleChange}
          />
        </div>
        <div className=" flex justify-center mt-6">
          <button
            onClick={getMemeImage}
            className="border-[3px] w-[62vw] h-[6vh] bg-purple-400 text-2xl mx-8 font-extrabold border-white cursor-pointer"
          >
            Get Image 💀
          </button>
        </div>
        <div className="  flex relative justify-center mt-5 border-4">
          <div>
            <img src={memeImage}  className="w-[40vw] h-[50vh]  my-1 relative" alt="meme" />
          <span className="absolute  text-[70px] top-0 left-[40%]  text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold">
              {formData.topText || 'Enter text'}
            </span>
      
      
            <span className="absolute text-[70px] bottom-0 left-[40%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold">
              {formData.bottomText || 'Enter text'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
