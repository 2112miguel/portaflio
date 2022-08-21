export const About = () => {
  return (
    <section className="row py-5" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-5 text-center">
            <Image src="../../profile.png" className="img-circle" />
          </div>
          <article className="col-md-7">
            <h1 className="fw-bold">About</h1>
            <p>
              Experienced web developer whith 2 years of experience, strong
              background as engineer support and network for the last 4 years.I
              studied a bootcamp through 1000+hours, learning javaScript,
              Node.js, React and MongoDB.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
