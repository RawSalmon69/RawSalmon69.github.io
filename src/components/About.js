import React, { Component } from "react";
import { Icon } from "@iconify/react";
import jsIcon from "@iconify/icons-logos/javascript";
import reactIcon from "@iconify/icons-logos/react";
import pgIcon from "@iconify/icons-logos/postgraphile";
import vueIcon from "@iconify/icons-logos/vue";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={jsIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={pgIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "150%",
                      lineHeight: "180%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {/* {about} */}
                    👋 I'm Phanthawas Jirakiattikun, a Computer Engineering student currently studying at <span style={{ color: "pink" }}>Chulalongkorn</span><span style={{ color: "lightgray" }}> University</span>. I have a burning passion for programming and a wide set of skills. I have great leadership and teamwork skill and a proficiency in English communication. I believe in changes and making a technological impact on the world. I am looking for an opportunity to prove myself, improve my skill and grow together with a company. - Thank you 👾 
                    <br />
                    <br />
                    My CV & Resume can be found
                    <a target="_blank" href="https://drive.google.com/file/d/1RglKDUEkKMtQTv8xsbuWA8dLH65UBKoR/view?usp=drive_link"> here</a>
                    <br />
                    <br />
                    My github can be found 
                    <a target="_blank" href="https://github.com/RawSalmon69"> here</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
