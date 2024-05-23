import WindowPane from '../Layout/WindowPane';
export default function Home() {
  const nameCard = {
    title: 'Anjali Chopra',
    subtitle: '/un-juh-lee cho-pra/',
    isIcon: true,
    detailsName: 'About',
    isNavigationButtons: false,
    className: 'nameCard',
    isView: false,
  };

  const professionCard = {
    title: 'Front End Developer',
    subtitle: 'HTML, CSS, JS, React, Nodejs, Express, Bootstrap, Python, C',
    isIcon: false,
    detailsName: 'Projects',
    isNavigationButtons: true,
    className: 'professionCard',
    isView: true,
  };

  const artistCard = {
    title: 'Visual Artist',
    subtitle: 'Digital, Aquarell, Acrylic, Sketches',
    isIcon: false,
    detailsName: 'Art',
    isNavigationButtons: true,
    className: 'professionCard',
    isView: true,
  };
  return (
    <>
      <div className="card">
        <WindowPane {...nameCard} />
        <WindowPane {...professionCard} />
      </div>
    </>
  );
}
