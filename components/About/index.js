import Image from "next/image";
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../../utils/htmlSerializer";

function About({ home }) {
  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <div className="about_content">
            <h1 className="text-2xl font-bold mb-4">
              {RichText.asText(home.about_title)}
            </h1>
            <RichText
              render={home.about_description}
              htmlSerializer={htmlSerializer}
            />
          </div>
          <div className="about_img">
            <Image src="/svg/about.svg" width="600" height="400" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
