import { Card } from "./Card";

const data = [
  {
    title: "TuMusAh",
    urlImg: "https://storage.googleapis.com/kodemia17js2-ma/tumusico.png",
    url: "https://music-app-front-end.vercel.app",
    urlGithub: "https://github.com/Kodemia-MusicApp/MusicApp-FrontEnd",
  },
  {
    title: "Clon DevTo",
    urlImg: "https://storage.googleapis.com/kodemia17js2-ma/devtoClon.png",
    url: "https://react-devto-clon.vercel.app",
    urlGithub: "https://github.com/2112miguel/ReactDevtoClon/tree/master",
  },
  {
    title: "Chanllege K",
    urlImg: "https://storage.googleapis.com/kodemia17js2-ma/chanllegek.png",
    url: "https://challenge-k.vercel.app/",
    urlGithub: "https://github.com/2112miguel/challengeK",
  },
];

export const Main = () => {
  return (
    <section className="" id="proyects">
      <article className="container">
        <div className="text-center my-5">
          <h1>Projects</h1>
        </div>
        <div className="row">
          {data.map((card) => {
            return (
              <div className="col-12 col-md-7 col-lg-4">
                <Card
                  title={card.title}
                  urlImg={card.urlImg}
                  url={card.url}
                  urlGithub={card.urlGithub}
                />
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
