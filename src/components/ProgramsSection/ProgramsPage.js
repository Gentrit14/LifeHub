// ProgramsPage.js
import React from "react";
import "./Programs.scss";

const programs = [
  {
    id: 1,
    title: "Orari dhe Eventet Lokale",
    description:
      "Menaxhoni orarin tuaj ditor dhe ndiqni eventet në qytet si koncerte, punëtori dhe gara me integrim të plotë në kalendarin lokal.",
  },
  {
    id: 2,
    title: "Mundësi Punësimi dhe Internship",
    description:
      "Aplikoni shpejt dhe lehtë për pozicione të ndryshme me sistem rekomandimesh bazuar në aftësitë dhe përvojën tuaj.",
  },
  {
    id: 3,
    title: "Mirëqenie dhe Mental Health",
    description:
      "Access artikuj, video dhe ushtrime mindfulness që ndryshojnë çdo javë, plus chat me psikologë ose vullnetarë për mbështetje të avancuar.",
  },
  {
    id: 4,
    title: "Bashkëpunim dhe Rrjetëzim",
    description:
      "Krijoni grupe pune, bashkëpunoni në kohë reale dhe zgjeroni rrjetin tuaj profesional brenda komunitetit të të rinjve.",
  },
  {
    id: 5,
    title: "Menaxhimi i Buxhetit Personal",
    description:
      "Planifikoni dhe kontrolloni buxhetin tuaj mujor, merrni paralajmërime për pagesa dhe mbani financat në rregull.",
  },
];

const benefits = [
  "Një platformë gjithëpërfshirëse që mbulon nevojat e të rinjve në një vend",
  "Përvoja interaktive dhe personalizim bazuar në preferencat tuaja",
  "Mbështetje dhe mentorim nga profesionistë dhe komuniteti",
  "Funksionalitete moderne si chat realtime dhe rekomandime inteligjente",
];

const ProgramsPage = () => {
  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="container">
          <h1 className="hero-title">
            LifeHub – Aplikacion gjithëpërfshirës për menaxhimin e jetës së të rinjve në Kosovë
          </h1>
          <p className="hero-subtitle">
            LifeHub është një dashboard inteligjent që bashkon në një vend orarin tuaj, eventet lokale, mundësitë e punësimit, mirëqenien mendore, rrjetëzimin dhe menaxhimin e buxhetit personal.
          </p>
        </div>
      </section>

      {/* Programs Cards Section */}
      <section className="programs-list-section">
        <div className="container">
          <h2 className="section-title">Funksionalitetet Kryesore</h2>
          <div className="programs-grid">
            {programs.map(({ id, title, description }) => (
              <div key={id} className="program-card">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="program-benefits">
        <div className="container">
          <h2 className="section-title">Përfitimet e Përdorimit të LifeHub</h2>
          <ul className="benefits-list">
            {benefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
