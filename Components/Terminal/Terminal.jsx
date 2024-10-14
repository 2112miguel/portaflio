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
      <div>
        <div className="fakeMenu">
          <div className="fakeButtons fakeClose"></div>
          <div className="fakeButtons fakeMinimize"></div>
          <div className="fakeButtons fakeZoom"></div>
        </div>
        <article className="fakeScreen">
          <div className="line1">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("> portafolio@name:~$ Miguel Angel")
                  .changeDelay(1)
                  .start();
              }}
              options={{
                delay: 50,
                cursor: ''
              }}
            /> 
          </div>
          <div className="line1">
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
                  cursor: ''
                }}
              />
          </div>
          <div className="line1">
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
                cursor: ''
              }}
            />
          </div>
          <div className="line1">
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
                  cursor: ''
                }}
              />
          </div>
        </article>
      </div>
    </section>
  );
};
