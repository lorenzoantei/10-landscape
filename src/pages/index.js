import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout >
    <SEO title="Lorenzo Antei" />
      <div className="bg-black text-white">
        <div className="container mx-auto pt-12 w-1/4 space-y-24 flex flex-col ">

            <div id="titolo">
              <h1 className="text-4xl pb-24">Vedute del Novecento</h1>
            </div>
            <div id="1">
              <StaticImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg/2880px-Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg"
                aspectRatio="constrained"
                alt=""
              />
              <div className=""iv>Vincent van Gogh, <em>Campo di girasoli con corvi</em>, 1890, olio su tela, 50.2x103 cm, Van Gogh Museum (Amsterdam), Foto di pubblico dominio</div>
            </div>
            <div id="2">
              <StaticImage
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Montagne_Sainte-Victoire%2C_par_Paul_C%C3%A9zanne_110.jpg"
                aspectRatio="constrained"
                alt=""
              />
              <div className="">Paul Cézanne, <em>Montagne Sainte-Victoire</em>, 1904-1906, olio su tela, 63.5x83 cm, Kunsthaus Zürich, Foto di pubblico dominio</div>
            </div>
            <div id="3">
              <StaticImage
                src="https://i.redd.it/wpu90vybsl471.jpg"
                aspectRatio="constrained"
                alt=""/>
              <div className="">Charles Sheeler, <em>American Landscape</em>, 1930, olio su tela, 61 × 78.8 cm , MoMA (New York), Foto diritti riservati</div>
            </div>
            <div id="4">
              <StaticImage
                src="https://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=fdc1ab6baa7f5400"
                aspectRatio="constrained"
                alt=""/>
              <div className="">Salvador Dalì, <em>La persistenza della memoria</em>, 1931, olio su tela, 24.1 x 33 cm, MoMA (New York), Foto diritti riservati</div>
            </div>
            <div id="5">
              <StaticImage
                src="https://upload.wikimedia.org/wikipedia/commons/3/30/Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg"
                aspectRatio="constrained"
                alt=""/>
              <div className="">Piet Mondrian, <em>Broadway Boogie-Woogie</em>, 1942-1943, dipinto, 50x50 cm, MoMA (New York), Foto di pubblico dominio</div>
            </div>
            <div id="6">
              <StaticImage
                src="https://live.staticflickr.com/8376/8445775225_ebd9f7482c_b.jpg"
                aspectRatio="constrained"
                alt=""
              />
              <div className="">Marcel Duchamp, <em>Étant donnés: 1° la chute d'eau / 2° le gaz d'éclairage (vista interna dell'installazione')</em>, 1946-1966, installazione sito-specifica, 242.6 x 177.8 x 124.5 cm, Philadelphia Museum of Art, Philadelphia, Fair use tout-fait.com</div>
            </div>
            <div id="7">
              <StaticImage
                src="https://www.mark-rothko.org/images/paintings/blue-green-and-brown.jpg"
                aspectRatio="constrained"
                alt=""/>
              <div className="">Mark Rothko, <em>Blue Cher Road</em>, 1953, Olio su tela, 292.74 × 233.68 cm, MOCA ,Los Angeles, Foto diritti riservati</div>
            </div>
            <div id="8">
              <StaticImage
                src="https://www.travelglobe.it/wp-content/uploads/2019/06/Morlotti-Paesaggio-a-Imbersago-1957.-Ph.-Studio-Da-Re-Bergamo.jpg"
                aspectRatio="constrained"
                alt=""
              />
              <div className="">Ennio Morlotti, <em>Paesaggio</em>, 1953, dipinto, 77.5 x 71 cm, GAMeC, Bergamo, Foto diritti riservati</div>
            </div>
            <div id="9">
              <StaticImage
                src="../images/spiral jetty.jpg"
                aspectRatio="constrained"
                alt=""/>
              <div className="">Robert Smithson, <em>Spiral Jetty</em>, 1970, <a href="https://earth.google.com/web/search/spiral+jetty/@41.43761995,-112.66855446,1278.83083369a,552.42088296d,35y,79.98963933h,0.85750921t,0r/data=CigiJgokCanK-H1gkTdAEaPK-H1gkTfAGUhG3PigBENAISzPita0DVHA">veduta Google Earth</a>, luglio 2017, 41.4376°N 112.6685°W</div>
            </div>
            <div id="10">
              <img src="https://i.pinimg.com/originals/c3/58/59/c35859271222c5cb059115bc87f1f1e3.gif" />
              <div className="">Cory Arcangel, <a href="https://coryarcangel.com/things-i-made/2002-001-super-mario-clouds"><em>Super Mario Clouds</em></a>, 2002, Cartuccia modificata di Super Mario Bros., dimensione variabile </div>
            </div>
            <div id="11">
              <StaticImage
                src="https://lorenzoantei.gatsbyjs.io/static/47ae5fe0f931de04adaf8b1c48d2b955/2de93/sb_omen_v20034.webp"
                aspectRatio="constrained"
                alt=""/>
                <div className="">Lorenzo Antei, <em>il terzo luogo</em>, 2020, Immagine digitale, Garry's Mod (2017) 3000x3000 px, </div>
            </div>
            <div id="titolo" className="pb-24">
              <h1 className="text-3xl pb-12">Bibliografia</h1>
              <ul>
                <li>Francesco Arcangeli,<em> Gli ultimi naturalisti</em>, PARAGONE. ARTE. n. 59 (1954), p. 29-43, tav. 7.</li>
                <li>Angelo Capasso, <em>Naturans. Il paesaggio nell'arte contemporanea</em>, 2019, Skira, Ginevra-Milano 2003</li>
                <li>Domenico Quaranta, <em>Deep Surfing</em>, Selfpublishing, 2016</li>
                <li>https://www.ibs.it/arte-contemporanea-ricerche-internazionali-dalla-libro-vari/e/9788837037062?gclid=Cj0KCQiAosmPBhCPARIsAHOen-NZ95MM-zrLe5vqSHLmvBsKv1KYrsxZMKIaxjf_7n_kIaOKiN9kR5waArEtEALw_wcB</li>
                <li>https://www.amazon.it/secolo-oltre-Movimenti-tendenze-illustrata/dp/8857214036</li>
                
              </ul>
            </div>
            </div>
          </div>
          

  </Layout>
)

export default IndexPage
