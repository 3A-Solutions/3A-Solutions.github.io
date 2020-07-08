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
  BackgroundInner,
  SectionText,
  Background,
  EmailLink,
} from "../components/common.styles";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, SplitLetters } from "react-gsap";

import Person from "../components/person";
import BgImage from "../components/bgImage";
import { Link } from "gatsby";

const people = [
  {
    name: "Balázs Ágoston",
    title: "CEO of oparating management",
    image: null,
    description:
      "Eiusmod veniam ad adipisicing aliquip in cupidatat excepteur.",
  },
  {
    name: "Pápai Attila",
    title: "Lead Backend Engineer",
    image: null,
    description:
      "Non magna consequat duis labore eiusmod adipisicing irure deserunt duis est.",
  },
  {
    name: "Varga Ádám",
    title: "Lead Frontend Engineer",
    image: null,
    description:
      "Sit incididunt et proident adipisicing consequat ex non consectetur.",
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
      }}
    >
      <clipPath id="logo-clip-path" clipPathUnits="objectBoundingBox">
        <path d="M0.183,1 C0.082,1,0,0.879,0,0.731 h0.054 c0,0.103,0.058,0.19,0.13,0.19 c0.071,0,0.13,-0.086,0.13,-0.191 c0,-0.1,-0.054,-0.184,-0.12,-0.19 V0.461 c0.066,-0.007,0.121,-0.09,0.121,-0.19 c0,-0.105,-0.058,-0.191,-0.13,-0.191 C0.112,0.08,0.054,0.167,0.054,0.269 H0 C0,0.123,0.082,0,0.183,0 c0.101,0,0.183,0.121,0.183,0.27 c0,0.096,-0.035,0.182,-0.087,0.23 c0.052,0.048,0.087,0.133,0.087,0.23 c0,0.149,-0.082,0.27,-0.183,0.27 M0.682,0.18 L0.943,1 h0.057 L0.682,0.001,0.363,1 h0.057" />
      </clipPath>
    </svg>
    <Main>
      <Background>
        <BackgroundInner></BackgroundInner>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 575.803 390">
          <path
            className="light"
            d="M105.607 390.148C47.375 390.148 0 343 0 285h30.908c0 40 33.51 74.24 74.699 74.24 41.146 0 74.729-33.368 74.729-74.356 0-39.009-31.336-71.607-69.336-74.183V179.86c38-2.581 69.415-35.179 69.415-74.215 0-40.961-33.565-74.606-74.754-74.606C64.472 31.04 30.908 65 30.908 105H0C0 48 47.375.132 105.607.132c58.233 0 105.609 47.35 105.609 105.354 0 37.612-20.02 71.081-50.207 89.722 30.14 18.637 50.127 52.059 50.127 89.637 0 58.029-47.34 105.303-105.529 105.303zM392.473 70.245L542.877 390h32.926L392.473.245 209.144 390h32.926z"
          />
          <path
            className="dark"
            d="M105.607 390.148C47.375 390.148 0 343 0 285h30.908c0 40 33.51 74.24 74.699 74.24 41.146 0 74.729-33.368 74.729-74.356 0-39.009-31.336-71.607-69.336-74.183V179.86c38-2.581 69.415-35.179 69.415-74.215 0-40.961-33.565-74.606-74.754-74.606C64.472 31.04 30.908 65 30.908 105H0C0 48 47.375.132 105.607.132c58.233 0 105.609 47.35 105.609 105.354 0 37.612-20.02 71.081-50.207 89.722 30.14 18.637 50.127 52.059 50.127 89.637 0 58.029-47.34 105.303-105.529 105.303zM392.473 70.245L542.877 390h32.926L392.473.245 209.144 390h32.926z"
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
                A 3A Solutions Budapesti <b>szoftverfejlesztő ügynökség</b>{" "}
                magas szaktudásával várja, hogy az Ön szoftveres elképzeléseit
                digitális valósággá váltsa!
              </Paragraph>
              <Button href='#contact'>Beszélgessünk projektjéről</Button>
            </SectionText>
          </div>
        </SectionPanel>
      </SectionContent>
    </Main>
    <Section light first>
      <SectionContent>
        <SectionPanel>
          <Heading2 {...animate("slide-right", 200)} text="3A Solutions">
            <span>3A Solutions</span>
          </Heading2>
          <SectionText>
            <Paragraph {...animate("slide-up", 200)}>
              A szoftverfejlesztés, mint iparág kivételes és kiemelkedő
              dinamizmussal fejlődik. Ezen napról napra változó világban komoly
              feladat tartani a lépést, mind know-how, mind a piaci pozíció
              tekintetében. A 3A Solutions csapata hisz abban, hogy a cég
              teljesítményét alapvetően az itt dolgozó kollégák szakmai
              teljesítménye határozza meg, ezért kiemelt figyelmet fordítunk
              munkatársaink szaktudásának folyamatos fejlesztésére.
            </Paragraph>
            <Paragraph {...animate("slide-up", 200)}>
              A vezetői körünk olyan elszánt tagokból áll, akik fiatalos
              lendületükkel képesek az iparági tapasztalataikat és
              kompetenciáikat felhasználva, azokat az adott problémára
              összpontosítva Partnerüket az ideális megoldáshoz segíteni. A
              piaci élvonal által definiált nívót rugalmas hozzállásunkkal,
              kreatív ötleteinkkel és magas színvonalú szakmai kompetenciánkkal
              szándékozzunk képviselni.
            </Paragraph>
            <Paragraph {...animate("slide-up", 200)}>
              Ezek azonban csupán szakmai tények. A 3A Solutions ennél többet
              nyújt ügyfeleinek, hiszen tudjuk, hogy a szaktudás mellett az
              emberi kvalitások is nagyon fontosak. Ebből kifolyólag kiemelkedő
              figyelmet szentelünk munkatársaink egyéni fejlődési lehetőségeinek
              biztosítására, mind szakmai, mind szellemi tekintetben. Továbbá
              fontosnak tartjuk csapatunk motivációjának gondozását,
              folytonosságát, illetve fontos célunk a családias, baráti
              hangulatú közeg megtartása és ápolása.
            </Paragraph>
          </SectionText>
        </SectionPanel>
      </SectionContent>
    </Section>
    <Section light>
      <SectionContent>
        <SectionPanel>
          <Heading2 {...animate("slide-right", 200)} text="Mit csinálunk?">
            <span>Mit csinálunk?</span>
          </Heading2>
          <Heading3 center>
            <span>
              Klasszikus és agilis módszertanokon alapúló egyedi B2B és B2C
              szoftverfejlesztés
            </span>
          </Heading3>
          <div className="cards">
            <div className="card">
              <h3>Egyedi fejlesztések</h3>
              <Paragraph>
                A speciális igények számunkra nem okoznak akadályt. Minden
                ügyfelünk számára biztosítjuk a szoftverfejlesztés eszközeinek
                széleskörű bevethetőségével (ide jöhetne a link a full
                skillsethez) az egyedi informatikai megoldások fejlesztését és
                implementálását és integrációját.
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
                Sokéves szakmai tapasztalatunk és rugalmas, kreatív informatikai
                megoldásainkkal alapozzuk meg a projekt sikerét.
              </Paragraph>
            </div>
          </div>
        </SectionPanel>
      </SectionContent>
    </Section>

    <Section>
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
                módszertanokra alapozva, különös odafigyelést szentelve (vagy
                csak simán” különös odafigyeléssel”) alakítja ki az Ügyfelünk
                számára ideális, agilis módszertant.
              </Paragraph>
            </div>
            <div className="card">
              <h3>Tradicionális módszertanok</h3>
              <Paragraph>
                Menedzsmentünk sokéves tapasztalatai alapján hatékony eszközként
                tekint a klasszikus, vízesés modellekre épülő módszertanokra is.
                Az együttműködés során kiemelkedő proaktivitással és precízen
                előkészített információkkal igyekszünk Ügyeleink számára egy
                folytonos transzparens állapotot biztosítani.
              </Paragraph>
            </div>
          </div>
        </SectionPanel>
      </SectionContent>
    </Section>

    <Section light>
      <SectionContent>
        <SectionPanel>
          <Heading2 {...animate("slide-right", 200)} text="Kik vagyunk?">
            <span>Kik vagyunk?</span>
          </Heading2>
          <SectionText>
            <Paragraph {...animate("slide-up", 200)}>
              A szoftverfejlesztés, mint iparág kivételes és kiemelkedő
              dinamizmussal fejlődik. Ezen napról napra változó világban komoly
              feladat tartani a lépést, mind know-how, mind a piaci pozíció
              tekintetében. A 3A Solutions csapata hisz abban, hogy a cég
              teljesítményét alapvetően az itt dolgozó kollégák szakmai
              teljesítménye határozza meg, ezért kiemelt figyelmet fordítunk
              munkatársaink szaktudásának folyamatos fejlesztésére.
            </Paragraph>
            <Paragraph {...animate("slide-up", 200)}>
              A vezetői körünk olyan elszánt tagokból áll, akik fiatalos
              lendületükkel képesek az iparági tapasztalataikat és
              kompetenciáikat felhasználva, azokat az adott problémára
              összpontosítva Partnerüket az ideális megoldáshoz segíteni. A
              piaci élvonal által definiált nívót rugalmas hozzállásunkkal,
              kreatív ötleteinkkel és magas színvonalú szakmai kompetenciánkkal
              szándékozzunk képviselni.
            </Paragraph>
            <Paragraph {...animate("slide-up", 200)}>
              Ezek azonban csupán szakmai tények. A 3A Solutions ennél többet
              nyújt ügyfeleinek, hiszen tudjuk, hogy a szaktudás mellett az
              emberi kvalitások is nagyon fontosak. Ebből kifolyólag kiemelkedő
              figyelmet szentelünk munkatársaink egyéni fejlődési lehetőségeinek
              biztosítására, mind szakmai, mind szellemi tekintetben. Továbbá
              fontosnak tartjuk csapatunk motivációjának gondozását,
              folytonosságát, illetve fontos célunk a családias, baráti
              hangulatú közeg megtartása és ápolása.
            </Paragraph>
          </SectionText>
        </SectionPanel>

        <SectionPanel spaceAround alignStart>
          {people.map(person => (
            <Person
              key={person.name}
              {...person}
              {...animate("slide-left", 200)}
            ></Person>
          ))}
        </SectionPanel>
      </SectionContent>
    </Section>

    <Section type="contact" id="contact">
      <SectionContent justifyCenter>
        <SectionPanel>
          <Heading3 {...animate("slide-up", 200)}>
            <span>Kapcsolat</span>
          </Heading3>
          <Heading2 {...animate("slide-up", 200)}>
            <span>Beszélgessünk projektjéről</span>
          </Heading2>
          <EmailLink>info@3asolutions.hu</EmailLink>
        </SectionPanel>
      </SectionContent>
    </Section>
  </Layout>
);

export default IndexPage;
