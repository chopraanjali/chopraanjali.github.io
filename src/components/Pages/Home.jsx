import WindowPane from '../Layout/WindowPane';
export default function Home() {
  return (
    <>
      <div className="card">
        <WindowPane
          title="Anjali Chopra"
          subtitle="/un-juh-lee cho-pra/"
          isIcon={true}
          detailsLink="About"
          isNavigationButtons={false}
          className="nameCard"
        />
        <WindowPane
          title="Front End Developer"
          subtitle="HTML, CSS, JS, React, Nodejs, Express, Bootstrap, Python, C"
          detailsLink="Projects"
          isNavigationButtons={true}
        />
      </div>
    </>
  );
}
