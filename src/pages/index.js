import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout >
    <SEO title="Lorenzo Antei" />
      <div className="bg-black">
        <div className="container mx-auto py-24">
          <div className="w-1/2 md:w-2/3 mx-auto space-y-6 flex flex-col text-white">
            
            <StaticImage
              src="https://files.spazioweb.it/e6/02/e602fdea-5c01-44e4-a308-ce38bc09208e.jpg"
              alt="Leonardo da Vinci - Paesaggio sull'Arno"
            />
            <div className="pb-12">Leonardo da Vinci, <em>Paesaggio sull'Arno</em>, 1473, disegno su carta, 19x28,5 cm, Galleria degli Uffizi, Foto di pubblico dominio</div>



            <StaticImage
              src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Caspar_David_Friedrich_-_Das_Eismeer_-_Hamburger_Kunsthalle_-_02.jpg"
              alt="Caspar David Friedrich - The Sea of Ice"
            />
            <div className="pb-12">Caspar David Friedrich, <em>The Sea of Ice </em>, 1823-1824, pittura, 96,7x126,9 cm, Hamburger Kunsthalle, Foto di pubblico dominio</div>
            <div> alternativa turner tempesta di neve 1942</div>
            


            <div> Hokusai - La grande onda di Kanagawa - 1830</div>
           



            <StaticImage
              src="https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg"
              alt=""
            />
            <div className="pb-12"iv>Claude Monet, <em>Impression soleil levant</em>, 1872, pittura ad olio, 48×63 cm , Musée Marmottan Monet, Parigi, Foto di pubblico dominio</div>



            <StaticImage
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg/2880px-Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg"
              aspectRatio="constrained"
              alt=""
            />
            <div className="pb-12"iv>Vincent van Gogh, <em>Campo di girasoli con corvi</em>, 1890, olio su tela, 50.2x103 cm, Van Gogh Museum (Amsterdam), Foto di pubblico dominio</div>



            <StaticImage
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Montagne_Sainte-Victoire%2C_par_Paul_C%C3%A9zanne_110.jpg"
              aspectRatio="constrained"
              alt=""
            />
            <div className="pb-12"iv>Paul Cézanne, <em>Montagne Sainte-Victoire</em>, 1904-1906, olio su tela, 63.5x83 cm, Kunsthaus Zürich, Foto di pubblico dominio</div>



            <div>The Persistence of Memory 1931</div>
            <div>Sheeler Charles    - American Landscape - 1930 (Fabbriche Ford di Detroit)</div>
            



            <StaticImage
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg"
              aspectRatio="constrained"
              alt=""
            />
            <div className="pb-12"iv>Piet Mondrian, <em>Broadway Boogie-Woogie</em>, 1942-1943, dipinto, 50x50 cm, MoMA (New York), Foto di pubblico dominio</div>



            <StaticImage
              src="https://upload.wikimedia.org/wikipedia/en/2/25/Etant_donnes.jpg"
              aspectRatio="constrained"
              alt=""
            />
            <div className="pb-12"iv>Marcel Duchamp, <em>Étant donnés: 1° la chute d'eau / 2° le gaz d'éclairage (vista interna dell'installazione')</em>, 1946-1966, Installazione, ??x?? cm, Philadelphia Museum of Art, Philadelphia, Fair use tout-fait.com</div>


            
            <div>Mark Rothko - Blue Cher Road - 1953</div>

            <div>Ennio Morlotti, Paesaggio (1955) https://www.artribune.com/attualita/2014/09/inpratica-francesco-arcangeli-un-omaggio/attachment/ennio-morlotti-paesaggio-1955_maga-gallarate//div>
            
            <StaticImage
              src="hhttps://lorenzoantei.gatsbyjs.io/static/47ae5fe0f931de04adaf8b1c48d2b955/2de93/sb_omen_v20034.webp"
              aspectRatio="constrained"
              alt=""
            />
            <div className="pb-12"iv>Lorenzo Antei, <em>(il terzo luogo (ricerca)</em>, 2020, Immagine digitale, 3000x3000 px, </div>
            
          </div>
        </div>
    </div>
    </div>

    <div><a href="https://lorenzoantei.gatsbyjs.io/">Lorenzo Antei</a></div>
  </Layout>
)

export default IndexPage
