import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";
const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        console.log(
          m.pageY,
          e.offsetParent.offsetParent.offsetParent.offsetParent.offsetLeft,
          e.offsetTop
        );
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
          // span.style.height = `${e.clientHeight}px`;
          // span.style.width = `${e.clientWidth}px`;
          // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
          // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      {/* portfolio filter */}
      <div className="filter-menu content-box">
        <div className="filters">
          <div className="btn-group">
            <label
              data-text="All"
              className={`c-pointer ${activeBtn("box-item")}`}
              onClick={handleFilterKeyChange("box-item")}
            >
              <input type="radio" name="fl_radio" defaultValue=".box-item" />
              Todos
            </label>
          </div>

          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-inter")}`}
              onClick={handleFilterKeyChange("f-inter")}
              data-text="inter"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-inter" />
              Inter rapidisimo
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-kioka")}`}
              onClick={handleFilterKeyChange("f-kioka")}
              data-text="kioka"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-kioka" />
              Kioka
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-digitek")}`}
              onClick={handleFilterKeyChange("f-digitek")}
              data-text="digitek"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-digitek" />
              Digitek
            </label>
          </div>
        </div>
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        <div className="box-item f-inter">
          <div className="image">
            <a
              href="https://interrapidisimo.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/inter.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Wordpress</span>
                      <span className="name">Inter rapidisimo</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-kioka">
          <div className="image">
            <a
              href="https://www.fiducoldex.com.co/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/fiducoldex.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Drupal</span>
                      <span className="name">Fiducoldex</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-digitek">
          <div className="image">
            <a
              href="https://illariskin.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/illariskin.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Shopify</span>
                      <span className="name">Illari skin</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-kioka">
          <div className="image">
            <a
              href="https://figofg.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/figo.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Wordpress</span>
                      <span className="name">Figo</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-inter">
          <div className="image">
            <a
              href="https://mundosinplastico.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/mundisinplastico.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Wordpress</span>
                      <span className="name">Mundo sin plástico</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-kioka">
          <div className="image">
            <a
              href="https://tarqstudio.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/tarq.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Wordpress</span>
                      <span className="name">TARQ</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-inter">
          <div className="image">
            <a
              href="https://www.alcarrito.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/alcarrito.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Magento</span>
                      <span className="name">Alcarrito.com</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-kioka">
          <div className="image">
            <a
              href="https://centraldearrendamientos.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/central.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Wordpress</span>
                      <span className="name">Central de Arrendamientos</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-inter">
          <div className="image">
            <a
              href="https://incrementatusventas.co/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/incrementa-tus-ventas.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">React-three-fiber</span>
                      <span className="name">Incrementa tus ventas</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-kioka">
          <div className="image">
            <a
              href="https://wearealerta.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/alerta.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Angular</span>
                      <span className="name">We are Alerta</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-kioka">
          <div className="image">
            <a
              href="https://www.intartheatre.org/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/intar.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Wordpress</span>
                      <span className="name">Intar theatre</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-kioka">
          <div className="image">
            <a
              href="https://zuinmobiliaria.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/zu-inmobiliaria.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Wordpress</span>
                      <span className="name">Zu Inmobiliaria</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="box-item f-kioka">
          <div className="image">
            <a
              href="https://www.badranmarket.co/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/grupo-madero.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Wordpress</span>
                      <span className="name">Grupo madero</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="box-item f-inter">
          <div className="image">
            <a
              href="https://recogidasencasa.interrapidisimo.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/recogidas-en-casa.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Angular-Express</span>
                      <span className="name">Recogida en casa</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="box-item f-kioka">
          <div className="image">
            <a
              href="https://bosquesdeyerbabuena.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/works/bosques.jpg"
                className="wp-post-image"
                alt=""
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Wordpress</span>
                      <span className="name">Bosques de yerbabuena</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotope;
