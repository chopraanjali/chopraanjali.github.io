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

  const arr = [nameCard, professionCard];
  return (
    <>
      <div className="card">
        <WindowPane cards={arr[0]} />
        <WindowPane cards={arr[1]} />
      </div>
    </>
  );
}
