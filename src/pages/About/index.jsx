import React from "react";
import { StyledAbout } from "./styledAbout.js";
import section1img from "../../assets/About/about-section-1-img.png";
import section2img from "../../assets/About/about-section-2-img.png";

import Footer from "../../components/Footer/index.jsx";
import Header from "../../components/Header/index.jsx";

export default function AboutUs() {
  return (
    <>
      <Header />
      <StyledAbout>
        <div className="container">
          <div className="hero-section">
            <div className="title-container">
              <h2>
                Oblikujemo prostor <br /> gradimo <br />  vrijednost
              </h2>
            </div>
          </div>
          <section className="about-section">
            <div className="section-one">
              <div className="left-container">
                <div className="section-one-title">
                  <h2>O nama</h2>
                </div>
                <div className="section-one-description">
                  <p>
                    Mi smo arhitektonski studio posvećen stvaranju promišljenih,
                    funkcionalnih i trajnih prostora koji odgovaraju stvarnim
                    potrebama ljudi. Naš pristup temelji se na razumijevanju
                    konteksta, pažljivom slušanju klijenata i dubokom poštovanju
                    prostora, materijala i okruženja. Vjerujemo da dobra
                    arhitektura nadilazi estetiku. Ona oblikuje način na koji
                    živimo, radimo i doživljavamo prostor. Svaki projekt
                    doživljavamo kao jedinstvenu priliku za stvaranje ravnoteže
                    između funkcionalnosti, suvremenog dizajna i dugoročne
                    održivosti. Naš rad obuhvaća sve faze projektiranja – od
                    početne ideje i koncepta do izvedbenih rješenja i praćenja
                    realizacije. Posebnu pažnju posvećujemo detaljima, jasnoći
                    prostora i kvaliteti izvedbe, uz stalnu suradnju s
                    investitorima i stručnim timovima. Kroz otvoren dijalog i
                    istraživački pristup težimo arhitekturi koja je iskrena,
                    smislena i prilagođena svom okruženju. Naš cilj nije samo
                    projektirati objekte, već stvarati prostore koji imaju
                    trajnu vrijednost i ostavljaju pozitivan trag.
                  </p>
                </div>
              </div>
              <div className="right-container">
                <img src={section1img} alt="slika" />
              </div>
            </div>
            <div className="section-two">
              <div className="section-two-container">
                <h2 style={{ color: "white" }}>Naš pristup</h2>
                <p>
                  Naš proces započinje analizom – prostora, konteksta i potreba
                  korisnika. Svakom projektu pristupamo s uvjerenjem da
                  arhitektura mora biti rezultat jasne ideje i promišljene
                  odluke, a ne slučajnog oblika. Kroz istraživanje i dijalog
                  oblikujemo rješenja koja su funkcionalna, racionalna i
                  estetski uravnotežena. Posebnu važnost pridajemo odnosu između
                  prostora i njegovog okruženja. Bilo da se radi o urbanom ili
                  prirodnom kontekstu, nastojimo stvoriti arhitekturu koja se
                  nadovezuje na postojeće vrijednosti i suptilno ih
                  reinterpretira kroz suvremeni izraz. Tijekom cijelog procesa
                  njegujemo blisku suradnju s klijentima, vjerujući da je
                  povjerenje temelj kvalitetnog projekta. Jasna komunikacija,
                  preciznost u planiranju i kontrola kvalitete ključni su
                  elementi našeg rada, od prve skice do realizacije. Naš cilj je
                  arhitektura koja je dugoročno održiva, prostorno jasna i
                  prilagođena svakodnevnom životu – arhitektura koja traje.
                </p>
              </div>
            </div>
            <div className="section-three">
              <div className="left-container">
                <img src={section2img} alt="slika" />
              </div>
              <div className="right-container">
                <div className="section-three-title">
                  <p>
                    Filozofija dizajna - Našu filozofiju dizajna definiraju
                    jasnoća, suzdržanost i svrha. Smatramo da arhitektura treba
                    biti razumljiva, logična i oslobođena suvišnih elemenata.
                    Forma proizlazi iz funkcije, ali istovremeno odgovara na
                    emocionalni i prostorni doživljaj korisnika. Kroz pažljiv
                    odabir materijala, proporcija i svjetla stvaramo prostore
                    koji su mirni, uravnoteženi i trajni. Ne težimo trendovima,
                    već arhitekturi koja s vremenom dobiva na vrijednosti i
                    prirodno stari zajedno sa svojim korisnicima.
                  </p>
                </div>
                <div className="section-three-description">
                  <p>
                    {" "}
                    Suradnja i proces - Vjerujemo da je kvalitetna arhitektura rezultat timskog
                    rada. Tijekom cijelog projekta usko surađujemo s
                    investitorima, inženjerima i izvođačima kako bismo osigurali
                    jasnoću u svakoj fazi – od idejnog rješenja do završne
                    realizacije. Naš proces temelji se na preciznosti,
                    odgovornosti i kontinuiranom nadzoru. Svaki korak promatramo
                    kao priliku za poboljšanje ukupne kvalitete prostora, uz
                    stalno poštovanje budžeta, rokova i tehničkih zahtjeva.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </StyledAbout>
      <Footer />
    </>
  );
}
