import NavbarMeme from './components/navbar_meme';
import  HeroMeme  from './components/hero_meme';
import FooterMeme from './components/footer_meme';
function App() {
  return (
   <>
   <div className= "bg-black h-[100vh] ">
  <NavbarMeme />
  <HeroMeme />
  <FooterMeme />

  </div>
   </>
  );
}

export default App;
