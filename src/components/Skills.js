import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        {/* skills items */}
        <div className="skills circles content-box">
          <ul>
            <li>
              <div className="name">React / MERN</div>
              <div className="progress p90">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage">
                  <span className="percent">90%</span>
                </div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">WordPress</div>
              <div className="progress p95">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage">
                  <span className="percent">95%</span>
                </div>
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Drupal</div>
              <div className="progress p85">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage">
                  <span className="percent">85%</span>
                </div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">PHP / MYSQL</div>
              <div className="progress p80">
                {" "}
                {/* p80 = 80% circle fill color */}
                <div className="percentage">
                  <span className="percent">80%</span>
                </div>
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>

            <li>
              <div className="name">HTML / CSS / JS</div>
              <div className="progress p95">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">95%</span>
                </div>
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Node / Express</div>
              <div className="progress p80">
                {" "}
                {/* p80 = 80% circle fill color */}
                <div className="percentage">
                  <span className="percent">80%</span>
                </div>
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">APIs</div>
              <div className="progress p80">
                {" "}
                {/* p80 = 80% circle fill color */}
                <div className="percentage">
                  <span className="percent">80%</span>
                </div>
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">React Native</div>
              <div className="progress p70">
                {" "}
                {/* p70 = 70% circle fill color */}
                <div className="percentage">
                  <span className="percent">70%</span>
                </div>
                <span>70%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Three-React-Fiber</div>
              <div className="progress p85">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage">
                  <span className="percent">85%</span>
                </div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const KnowledgeSkills = () => {
  return (
    <div className="section skills" id="section-skills-know">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Conocimientos</div>
        </div>
        {/* skills */}
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Website hosting</div>
            </li>
            <li>
              <div className="name">3d Blender y three.js</div>
            </li>
            <li>
              <div className="name">movil apps Multiplatform</div>
            </li>
            <li>
              <div className="name">Diseño grafico UI/UX </div>
            </li>
            <li>
              <div className="name">Photoshop, After effects, premiere</div>
            </li>
            <li>
              <div className="name">Figma, Adobe xd, Ilustrator</div>
            </li>
            <li>
              <div className="name">Modern and mobile-first</div>
            </li>
            <li>
              <div className="name">Analytics and heatmap</div>
            </li>
            <li>
              <div className="name">Graphics and animations</div>
            </li>
            <li>
              <div className="name">SEO tecnico</div>
            </li>
            <li>
              <div className="name">SEO tecnico</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
