import React from "react";
import Layout from "../components/layout";
import {
  Button,
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Main,
  Section,
  SectionContent,
  SectionPanel,
  PeopleContainer,
  BackgroundInner,
  SectionText,
  Background,
  EmailLink,
  NavBar,
  NavLink,
} from "../components/common.styles";

import Person from "../components/person";

import adam from "../images/adam.jpg";
import agoston from "../images/agoston.jpg";
import attila from "../images/attila.jpg";
import balazs from "../images/balazs.jpg";
import { Controller, Scene } from "react-scrollmagic";

const people = [
  {
    name: "Pápai Attila",
    image: attila,
  },
  {
    name: "Varga Ádám",
    image: adam,
  },
];

const animate = (
  animation = "fade",
  delay = "0",
  easing = "ease-in-out",
  duration = "500"
) => {
  return {
    // "data-sal": animation,
    // "data-sal-delay": delay,
    // "data-sal-easing": easing,
    // "data-sal-duration": duration,
  };
};

const IndexPage = () => (
  <Layout>
    <Controller>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 578.632 396.434"
        style={{
          position: "absolute",
        }}
      >
        <clipPath id="logo-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0.291,0.457 c0.046,-0.045,0.077,-0.121,0.077,-0.208 c0,-0.137,-0.076,-0.249,-0.17,-0.249 S0.028,0.113,0.028,0.249 h0.052 c0,-0.093,0.053,-0.172,0.118,-0.172 s0.118,0.078,0.118,0.173 s-0.053,0.173,-0.118,0.173 v0.076 c0.081,0,0.146,0.096,0.146,0.213 s-0.065,0.213,-0.146,0.213 S0.052,0.83,0.052,0.711 H0 c0,0.162,0.089,0.29,0.198,0.29 s0.198,-0.129,0.198,-0.289 c0,-0.11,-0.043,-0.206,-0.105,-0.255 M0.696,0.003 L0.393,0.999 h0.056 L0.696,0.187 l0.248,0.812 h0.056" />
        </clipPath>
      </svg> */}
      <Scene classToggle="bg" triggerElement="#company" triggerHook={0.07}>
        <NavBar>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 578.632 396.434">
            <path d="M168.422 181.166c26.681-17.654 44.429-47.928 44.429-82.214 0-54.279-44.127-98.516-98.406-98.516S16.007 44.717 16.007 98.717h30c0-37 30.685-68.281 68.422-68.281s68.422 30.857 68.422 68.594-30.469 68.438-68.469 68.438v30.118c47 0 84.592 37.819 84.592 84.424s-37.847 84.425-84.452 84.425S30 328.717 30 281.717H0c0 64 51.374 114.717 114.521 114.717s114.452-51.278 114.452-114.425c.001-43.596-24.593-81.53-60.551-100.843zM402.889 1L227.146 395.717h32.502L402.889 74l143.24 321.717h32.503z" />
          </svg>
          <NavLink href="#company">A cégről</NavLink>
          <NavLink href="#what">Mit csinálunk</NavLink>
          <NavLink href="#how">Hogyan csináljuk</NavLink>
          <NavLink href="#who">Kik vagyunk</NavLink>
          <NavLink href="#contact">Kapcsolat</NavLink>
        </NavBar>
      </Scene>

      <Main>
        <Background>
          {/* <BackgroundInner></BackgroundInner> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 578.632 396.434">
            <path
              className="light"
              d="M168.422 181.166c26.681-17.654 44.429-47.928 44.429-82.214 0-54.279-44.127-98.516-98.406-98.516S16.007 44.717 16.007 98.717h30c0-37 30.685-68.281 68.422-68.281s68.422 30.857 68.422 68.594-30.469 68.438-68.469 68.438v30.118c47 0 84.592 37.819 84.592 84.424s-37.847 84.425-84.452 84.425S30 328.717 30 281.717H0c0 64 51.374 114.717 114.521 114.717s114.452-51.278 114.452-114.425c.001-43.596-24.593-81.53-60.551-100.843zM402.889 1L227.146 395.717h32.502L402.889 74l143.24 321.717h32.503z"
            />
            <path
              className="dark"
              d="M168.422 181.166c26.681-17.654 44.429-47.928 44.429-82.214 0-54.279-44.127-98.516-98.406-98.516S16.007 44.717 16.007 98.717h30c0-37 30.685-68.281 68.422-68.281s68.422 30.857 68.422 68.594-30.469 68.438-68.469 68.438v30.118c47 0 84.592 37.819 84.592 84.424s-37.847 84.425-84.452 84.425S30 328.717 30 281.717H0c0 64 51.374 114.717 114.521 114.717s114.452-51.278 114.452-114.425c.001-43.596-24.593-81.53-60.551-100.843zM402.889 1L227.146 395.717h32.502L402.889 74l143.24 321.717h32.503z"
            />
          </svg>
        </Background>
        <SectionContent>
          <SectionPanel column center>
            <div>
              <Heading1>
                <div>We don't see problems.</div>
                <div>We see solutions.</div>
              </Heading1>
              <SectionText>
                <Paragraph>
                  A 3A Solutions budapesti <b>szoftverfejlesztő ügynökség</b>{" "}
                  kiváló szaktudásával várja, hogy az Ön szoftveres
                  elképzeléseit digitális valósággá váltsa!
                </Paragraph>
                <Button href="#contact">Beszélgessünk projektjéről</Button>
              </SectionText>
            </div>
          </SectionPanel>
        </SectionContent>
      </Main>
      <Section light first id="company">
        <SectionContent>
          <SectionPanel>
            <Heading2 {...animate("slide-right", 200)} text="3A Solutions">
              <span>3A Solutions</span>
            </Heading2>
            <SectionText>
              <Paragraph {...animate("slide-up", 200)}>
                A szoftveres megoldások fejlesztésében tapasztalt és kreatív
                csapatunk az Ügyfelek egyedi igényeire szabott, teljeskörű
                megoldást nyújt a tervezéstől a megvalósításig. Ideológiánk,
                hogy minden esetben tudatosan megtervezett megoldással segítsük
                Partnereinket céljaik sikeres elérésében. Az eredményorientált
                fejlesztés kulcsa, hogy tapasztalataikat és kompetenciáikat az
                adott problémára összpontosítva alakítsuk ki az ideális
                megoldást.
              </Paragraph>
              <Paragraph {...animate("slide-up", 200)}>
                Rugalmas szervezeti felépítésünknek köszönhetően mindig az adott
                projekt igényeihez igazodó csapatot és működési metodológiát
                tudjuk biztosítani. A nagy szervezetekkel ellentétben képesek
                vagyunk gyorsan reagálni a változásokra, ami magában hordozza az
                azonnali fejlesztés lehetőségét is.
              </Paragraph>
            </SectionText>
          </SectionPanel>
        </SectionContent>
      </Section>
      <Section light id="what">
        <SectionContent>
          <SectionPanel>
            <Heading2 {...animate("slide-right", 200)} text="Mit csinálunk?">
              <span>Mit csinálunk?</span>
            </Heading2>
            <Heading3 center>
              <span>
                Klasszikus és agilis módszertanokon alapuló egyedi B2B és B2C
                szoftverfejlesztés
              </span>
            </Heading3>
            <div className="cards">
              <div className="card">
                <h3>Egyedi fejlesztések</h3>
                <Paragraph>
                  A speciális igények számunkra nem okoznak akadályt. Minden
                  ügyfelünk számára biztosítjuk a szoftverfejlesztés eszközeinek
                  széleskörű bevethetőségével az egyedi informatikai megoldások
                  fejlesztését és implementálását és integrációját.
                </Paragraph>
              </div>
              <div className="card">
                <h3>Szakértői támogatás, tanácsadás</h3>
                <Paragraph>
                  Kiemelkedő szoftvertervezési- és fejlesztési kompetenciákkal
                  rendelkező tanácsadóink biztosítják, hogy a leghatékonyabb
                  koncepcióval szolgáljunk Partnereink üzleti vagy informatikai
                  problémái megoldására.
                </Paragraph>
              </div>
              <div className="card">
                <h3>Agilis tervezés </h3>
                <Paragraph>
                  Sokéves szakmai tapasztalatunk és rugalmas, kreatív
                  informatikai megoldásainkkal alapozzuk meg a projekt sikerét.
                </Paragraph>
              </div>
            </div>
          </SectionPanel>
        </SectionContent>
      </Section>

      <Section id="how">
        <SectionContent>
          <SectionPanel>
            <Heading2 {...animate("slide-right", 200)} text="Hogyan csináljuk?">
              <span>Hogyan csináljuk?</span>
            </Heading2>
            <div className="cards">
              <div className="card">
                <h3>Agilis módszertanok</h3>
                <Paragraph>
                  Elvünk, hogy ahányan vagyunk, annyiféle sikeres út létezik egy
                  partneri együttműködésben. Ezért csapatunk a klasszikus agilis
                  módszertanokra alapozva, különös odafigyeléssel alakítja ki az
                  Ügyfelünk számára ideális, agilis módszertant.
                </Paragraph>
              </div>
              <div className="card">
                <h3>Tradicionális módszertanok</h3>
                <Paragraph>
                  Menedzsmentünk sokéves tapasztalatai alapján hatékony
                  eszközként tekint a klasszikus, vízesés modellekre épülő
                  módszertanokra is. Az együttműködés során kiemelkedő
                  proaktivitással és precízen előkészített információkkal
                  igyekszünk Ügyeleink számára egy folytonos transzparens
                  állapotot biztosítani.
                </Paragraph>
              </div>
            </div>
          </SectionPanel>
        </SectionContent>
      </Section>

      <Section light id="who">
        <SectionContent>
          <SectionPanel>
            <Heading2 {...animate("slide-right", 200)} text="Kik vagyunk?">
              <span>Kik vagyunk?</span>
            </Heading2>
            <SectionText>
              <Paragraph {...animate("slide-up", 200)}>
                A szoftverfejlesztés, mint iparág kivételes és kiemelkedő
                dinamizmussal fejlődik. Ezen napról napra változó világban
                komoly feladat tartani a lépést, mind know-how, mind a piaci
                pozíció tekintetében. A 3A Solutions csapata hisz abban, hogy a
                cég teljesítményét alapvetően az itt dolgozó kollégák szakmai
                teljesítménye határozza meg, ezért kiemelt figyelmet fordítunk
                munkatársaink szaktudásának folyamatos fejlesztésére.
              </Paragraph>
              <Paragraph {...animate("slide-up", 200)}>
                A vezetői körünk olyan elszánt tagokból áll, akik fiatalos
                lendületükkel képesek az iparági tapasztalataikat és
                kompetenciáikat felhasználva, azokat az adott problémára
                összpontosítva Partnerüket az ideális megoldáshoz segíteni. A
                piaci élvonal által definiált nívót rugalmas hozzállásunkkal,
                kreatív ötleteinkkel és magas színvonalú szakmai
                kompetenciánkkal szándékozzunk képviselni.
              </Paragraph>
              <Paragraph {...animate("slide-up", 200)}>
                Ezek azonban csupán szakmai tények. A 3A Solutions ennél többet
                nyújt ügyfeleinek, hiszen tudjuk, hogy a szaktudás mellett az
                emberi kvalitások is nagyon fontosak. Ebből kifolyólag
                kiemelkedő figyelmet szentelünk munkatársaink egyéni fejlődési
                lehetőségeinek biztosítására, mind szakmai, mind szellemi
                tekintetben. Továbbá fontosnak tartjuk csapatunk motivációjának
                gondozását, folytonosságát, illetve fontos célunk a családias,
                baráti hangulatú közeg megtartása és ápolása.
              </Paragraph>
            </SectionText>
          </SectionPanel>

          <SectionPanel spaceAround alignStart>
            <PeopleContainer>
              {people.map(person => (
                <Person
                  key={person.name}
                  {...person}
                  {...animate("slide-left", 200)}
                ></Person>
              ))}
            </PeopleContainer>
          </SectionPanel>
        </SectionContent>
      </Section>

      <Section type="contact" id="contact">
        <Heading3 {...animate("slide-up", 200)}>Kapcsolat</Heading3>
        <Heading2 {...animate("slide-up", 200)}>
          <span>Beszélgessünk projektjéről!</span>
        </Heading2>
        <EmailLink href="mailto:info@3asolutions.hu">
          info@3asolutions.hu
        </EmailLink>
      </Section>
    </Controller>
  </Layout>
);

export default IndexPage;
