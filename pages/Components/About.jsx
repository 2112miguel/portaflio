import Image from "next/image";
import Styles from "../../styles/Home.module.css";
export const About = () => {
  return (
    <section className="row py-5" id="about">
      <div className="container pt-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 text-center">
            <Image
              src="/profile.png"
              width={300}
              height={300}
              className="rounded-circle"
            />
          </div>
          <article className="col-md-5">
            <h1 className="fw-bold">About</h1>
            <p className="">
              Hi I'm Miguel, Experienced web developer whith 2 years of
              experience, strong background as engineer support and network for
              the last 4 years.I studied a bootcamp through 1000+hours, learning
              javaScript, Node.js, React and MongoDB.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
