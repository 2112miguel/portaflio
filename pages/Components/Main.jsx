import { Card } from "./Card";

export const Main = () => {
  return (
    <section className="" id="proyects">
      <article className="container">
        <h1>Projects</h1>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <Card
              title="TuMusAh"
              urlImg="https://storage.googleapis.com/kodemia17js2-ma/tumusico.png"
              url="https://music-app-front-end.vercel.app"
              urlGithub="https://github.com/Kodemia-MusicApp/MusicApp-FrontEnd"
            />
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <Card
              title="Clon DevTo"
              urlImg="https://storage.googleapis.com/kodemia17js2-ma/devtoClon.png"
              url="https://react-devto-clon.vercel.app"
              urlGithub="https://github.com/2112miguel/ReactDevtoClon/tree/master"
            />
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <Card
              title="Chanllege K"
              urlImg="https://storage.googleapis.com/kodemia17js2-ma/chanllegek.png"
              url="https://challenge-k.vercel.app/"
              urlGithub="https://github.com/2112miguel/challengeK"
            />
          </div>
        </div>
      </article>
    </section>
  );
};
