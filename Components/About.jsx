import Image from "next/image";

export const About = () => {
  return (
    <section className="py-5" id="about">
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
          <article className="col-md-5 col-10">
            <h1 className="fw-bold"> {">"} About</h1>
            <p>
              {">"} Hi I&apos;m Miguel, .NET professional with over 4 years of experience in .NET full-stack web programming. Proficient in ASP.NET, C#, and SQL Server, with a strong foundation in Angular, NoSQL, SOLID Principles, Object-Oriented Programming (OOP),microservices and relational databases. Adept at managing Windows Server environments and implementing API's. With a background in network engineering, I utilize cloud platforms such as Azure, AWS, and GCP. Holds a Bachelor's degree and a bootcamp certification.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
