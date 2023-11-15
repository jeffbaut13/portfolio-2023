import dynamic from "next/dynamic";
import { useEffect } from "react";
import { CodingSkills, KnowledgeSkills } from "../src/components/Skills";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});
const IndexOnePage = () => {
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <Layout noHeader>
      <header className="header">
        <div className="head-top">
          {/* menu button */}
          <a href="#" className="menu-btn">
            <span />
          </a>
          {/* logo */}
          <div className="logo hover-masks-logo">
            <a href="#">
              <span className="mask-lnk">
                Jefersson <strong>Bautista</strong>
              </span>
              <span className="mask-lnk mask-lnk-hover">
                Web <strong>Developer</strong>
              </span>
            </a>
          </div>
          {/* top menu */}
          <div className="top-menu hover-masks">
            <div className="top-menu-nav">
              <div className="menu-topmenu-container">
                <ul className="menu">
                  <li className="menu-item current-menu-item">
                    <a href="#section-started">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-about">Resumen</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-portfolio">Trabajos</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-contacts">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Wrapper */}
      <div className="wrapper">
        {/* Section Started */}
        <div className="section started" id="section-started">
          {/* background */}
          <div className="video-bg jarallax">
            <div className="video-bg-mask" />
            <div className="video-bg-texture" id="grained_container" />
          </div>
          {/* started content */}
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="started-content">
                <h1 className="h-title">
                  ¡Hola!, Soy <strong>Jefersson Bautista</strong>,
                  <br />
                  Desarrollador frontend de Bogotá - Colombia.
                </h1>
                <TypingAnimation extraClassName={"typed-subtitle"} />
                <span className="typed-subtitle" />
              </div>
            </div>
          </div>
          {/* mosue button */}
          <a href="#" className="mouse_btn" style={{ display: "none" }}>
            <span className="icon fas fa-chevron-down" />
          </a>
        </div>
        {/* Section About */}
        <div className="section about" id="section-about">
          {/* title */}
          <div className="title">
            <div className="title_inner">Sobre mí</div>
          </div>
          <div className="content content-box">
            {/* image */}
            <div className="image">
              <img src="images/img-perfil.jpg" alt="" />
            </div>
            {/* desc */}
            <div className="desc">
              <p>
                Soy desarrollador web frontend, mi camino empezo sobre 2017
                siendo autodidacta, mis habilidades y mi experiencia se
                desarrollaron en wordpress y en javascript desde 2020, hoy en
                dia me especializo en React, y node con el stack MERN y
                Wordpress. soy una persona responsable que ama lo que hace, muy
                dedicado y autodidacta, mi enfoque permite responder ante
                cualquier reto.
              </p>
              <div className="info-list">
                <ul>
                  <li>
                    <strong>Edad:</strong> 36
                  </li>
                  <li>
                    <strong>Pais:</strong> Colombia
                  </li>
                  <li>
                    <strong>Ubicación:</strong> Bogotá
                  </li>
                  <li>
                    <strong>Celular:</strong> +57 305 777 93 24
                  </li>
                  <li>
                    <strong>E-mail:</strong> jeferssonabv@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        {/* Section Service */}
        <div className="section service" id="section-services">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Servicios</div>
            </div>
            {/* service items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="name">Aplicaciones Web</div>
                  <div className="text">
                    Desarrollo de soluciones digitales adaptativas y centradas
                    en el usuario, para proporcionar experiencias óptimas en
                    todos los dispositivos.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="name">Consumo de APIs</div>
                  <div className="text">
                    Integración experta de APIs para potenciar la funcionalidad
                    y la conectividad de las aplicaciones.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="name">Creación de Landing Pages</div>
                  <div className="text">
                    Diseño y desarrollo de páginas de aterrizaje que capturan la
                    esencia de la marca y optimizan la conversión.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="name">
                    Plataformas CMS (WordPress, Drupal, etc.)
                  </div>
                  <div className="text">
                    Experiencia sólida en la personalización y optimización de
                    sitios basados en CMS populares, asegurando un rendimiento
                    eficiente y una administración fácil.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="name">Backend con Express y Strapi</div>
                  <div className="text">
                    Creación de backends sencillos y eficientes utilizando
                    tecnologías como Express y Strapi para garantizar un
                    rendimiento robusto y una gestión de datos efectiva.
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="name">
                    Aplicaciones moviles multiplataforma
                  </div>
                  <div className="text">
                    Experiencia práctica en la creación de aplicaciones móviles
                    eficientes con React Native, priorizando la funcionalidad y
                    la experiencia del usuario.
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>

        {/* Section Resume */}
        <div className="section resume" id="section-history">
          <div className="content">
            <div className="cols">
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Experiencia</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box active">
                    <div className="date">Oct-2022 - Present</div>
                    <div className="name">
                      Coordinador web - Inter rapidisimo
                    </div>
                    <div className="text">
                      <p>
                        Creacion de aplicaciones web con React y Webmaster
                        portal Inter rapidisimo, Alcarrito.com, mundo sin
                        plastico entre otras aplicaciones
                      </p>
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2022 - 2023</div>
                    <div className="name">Web Developer - Kioka</div>
                    <div className="text">
                      <p>
                        Desarrollador web agosto de 2022 - marzo de 2023 (8
                        meses) Bogotá, Distrito Capital, Colombia Desarrollo de
                        sitios web en drupal, wordpress y nativo con js (React)
                      </p>
                    </div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2009 - 2010</div>
                    <div className="name">Web Master - Digitek CO</div>
                    <div className="text">
                      Manejo de cuentas corporativas de desarollo web con
                      wordpress, woocommerce, elementor, plugins personalizados,
                      manejo de wordpress
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-md">
                {/* title */}
                <div className="title">
                  <div className="title_inner">Educación</div>
                </div>
                {/* resume items */}
                <div className="resume-items">
                  <div className="resume-item content-box">
                    <div className="date">2022</div>
                    <div className="name">Udemy</div>
                    <div className="text">Master en React y Stack MERN</div>
                  </div>
                  <div className="resume-item content-box">
                    <div className="date">2022</div>
                    <div className="name">Cursos intensivos Platzi</div>
                    <div className="text">
                      +300 horas en: Git, Linux, manejo de servidores, CMS
                      WordPress, Durpal, Magento, html, Javascript, CSS, Consumo
                      y creacion de APIs, backend, css, preprocesadores, UI/UX.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Design Skills */}
        <div className="section skills" id="section-skills">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Design Skills</div>
            </div>
            {/* skills items */}
            <div className="skills percent content-box">
              <ul>
                <li>
                  <div className="name">Frontend</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "100%" }}>
                      <span className="percent">100%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Backend</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "70%" }}>
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Diseño e ilustraciones</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "85%" }}>
                      <span className="percent">85%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section Languages Skills */}
        <div className="section skills" id="section-skills-lang">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">English Skills</div>
            </div>
            {/* skills items */}
            <div className="skills percent content-box">
              <ul>
                <li>
                  <div className="name">Reading</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "80%" }}>
                      <span className="percent">80%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Speak</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "60%" }}>
                      <span className="percent">60%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Listen</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "60%" }}>
                      <span className="percent">50%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Section Coding Skills */}
        <CodingSkills />
        {/* Section Knowladge Skills */}
        <KnowledgeSkills />

        {/* Works */}
        <div className="section works" id="section-portfolio">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Portfolio</div>
            </div>
            <ItemIsotope />
            <div className="clear" />
          </div>
        </div>
        {/* Section Contacts Info */}
        <div className="section contacts" id="section-contacts">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Contacts</div>
            </div>
            {/* contacts items */}
            <div className="service-items">
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-phone" />
                  </div>
                  <div className="name">Contacto</div>
                  <div className="text">+57 (305) 777 93 24</div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="name">Email</div>
                  <div className="text">
                    <a href="mailto:steve-pearson@gmail.com">
                      jeferssonabv@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="name">Ubicación</div>
                  <div className="text">Bogotá -Colombia</div>
                </div>
              </div>
              <div className="service-col">
                <div className="service-item content-box">
                  <div className="icon">
                    <span className="fas fa-user-tie" />
                  </div>
                  <div className="name">Freelance disponible</div>
                  <div className="text">
                    Siempre abierto a nuevas oportunidades
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default IndexOnePage;
