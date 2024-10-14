import { Card } from "./Card";
import imageMusic from '../public/tumusico.png'
import imageDev from '../public/devtoClon.png'
import imageK from '../public/chanllegek.png'

const data = [
  {
    title: "TuMusAh",
    urlImg: imageMusic,
    url: "https://music-app-front-end.vercel.app",
    urlGithub: "https://github.com/Kodemia-MusicApp/MusicApp-FrontEnd",
  },
  {
    title: "Clon DevTo",
    urlImg: imageDev,
    url: "https://react-devto-clon.vercel.app",
    urlGithub: "https://github.com/2112miguel/ReactDevtoClon/tree/master",
  },
  {
    title: "Chanllege K",
    urlImg: imageK,
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
          {data.map((card, index) => {
            return (
              <div className="col-12 col-md-7 col-lg-4" key={index}>
                <Card
                  key={index}
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
