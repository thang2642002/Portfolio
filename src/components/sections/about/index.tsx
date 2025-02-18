import { Col, Row } from "react-bootstrap";
import AnimationLottie from "components/share/animation-lottie";
import codingJSON from "assets/lottie/coding.json";
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";

import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { useTranslation } from "react-i18next";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            {t("about.title1")}{" "}
            <span className="brand-red">{t("about.title2")}</span>{" "}
          </h3>
          <div>
            <div>
              <p> {t("about.heading1")}</p>

              <p> {t("about.heading2")}</p>

              <p>{t("about.heading3")}</p>
            </div>
          </div>
          <div>
            <p>{t("about.heading4")}</p>
            <ul>
              <li>{t("about.interest1")}</li>
              <li>{t("about.interest2")}</li>
              <li>{t("about.interest3")}</li>
            </ul>
          </div>
          <div>
            <p className="text-center brand-red">"{t("about.heading5")} ~.~"</p>
            <p className="text-center brand-red">--Jimmy O Yang</p>
          </div>
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>

      <Row>
        <Col
          md={6}
          xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie
            width="50%"
            //animation with rp => convert sang text
            // https://github.com/airbnb/lottie-web/issues/2070
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <div>
              <h4 className="text-center brand-red">{t("about.title3")}</h4>
            </div>
            <div>
              <GlowCard identifier={`experience-5`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>{t("about.year")}</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">{t("about.heading6")}</p>
                        <p className="company">{t("about.heading7")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col md={6} xs={12} className=" mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">{t("about.title4")}</h3>
          <SocialMedia
            youtube={APP_DATA.YOUTUBE_URL}
            facebook={APP_DATA.FACEBOOK_URL}
            tiktok={APP_DATA.TIKTOK_URL}
            github={APP_DATA.GITHUB_URL}
          />
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <AnimationLottie
            width="50%"
            //animation with rp => convert sang text
            // https://github.com/airbnb/lottie-web/issues/2070
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />
          <h4 className="text-center">{t("about.title5")}</h4>
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  );
};

export default About;
