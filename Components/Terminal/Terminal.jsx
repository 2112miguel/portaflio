import Typewriter from "typewriter-effect";

const data = [
  "> portafolio@name:~$ Miguel Angel",
  "> portafolio@title:~$ Full Stack Developer",
  "> portafolio@github:~$ 2112miguel",
  "> portafolio@linkedin:~$ miguelanmorenocontreras",
  "> portafolio@email:~$ miguel.moreno.angel@gmail.com",
];

export const Terminal = () => {
  return (
    <section>
      <div className="console">
        <header>
          <p>miguel@portafolio</p>
        </header>
        <article className="consolebody">
          <div className="my-2">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("> portafolio@name:~$ Miguel Angel")
                  .changeDelay(1)
                  .start();
              }}
              options={{
                delay: 50,
              }}
            />
          </div>
          <div className="my-2">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(3500)
                  .typeString("> portafolio@title:~$ Full Stack Developer")
                  .changeDelay(1)
                  .start();
              }}
              options={{
                delay: 50,
              }}
            />
          </div>
          <div className="my-2">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(7000)
                  .typeString("> portafolio@github:~$ 2112miguel")
                  .changeDelay(1)
                  .start();
              }}
              options={{
                delay: 50,
              }}
            />
          </div>
          <div className="my-2">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(10350)
                  .typeString(
                    "> portafolio@linkedin:~$ miguelanmorenocontreras"
                  )
                  .changeDelay(1)
                  .start();
              }}
              options={{
                delay: 50,
              }}
            />
          </div>
          <div className="my-2">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(14000)
                  .typeString(
                    "> portafolio@email:~$ miguel.moreno.angel@gmail.com"
                  )
                  .changeDelay(1)
                  .start();
              }}
              options={{
                delay: 50,
              }}
            />
          </div>
        </article>
      </div>
    </section>
  );
};
