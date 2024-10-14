import { Terminal } from "./Terminal/Terminal";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div>
      <section className="my-5 py-5" id="home">
        <section className="container ">
          <div className="m-5 p-5">
            <h1>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(500)
                    .typeString("Welcome to my ")
                    .pauseFor(300)

                    .typeString(
                      "<strong>Portafolio</strong> I'm Miguel Angel"
                    )
                    .deleteChars(33)
                    .typeString(
                      "<strong>I'm</strong> Web Developer"
                    )
                    .pauseFor(1000)
                    .start();
                }}
                options={{
                  delay: 90,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <Terminal />
        </section>
      </section>
    </div>
  );
}
