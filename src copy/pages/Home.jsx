import "./home.css"; // Ensure your styles are imported
import { useSearchParams } from "react-router";
import { Link, Form } from "react-router";
import Cookies from "js-cookie";


export default function Home() {
  const [searchParams] = useSearchParams();
  const loginModalOpen = searchParams.get("login") === "true";
  const jwtToken = Cookies.get("jwtToken");

  if (loginModalOpen) {
    setTimeout(() => {
      document.querySelector(".home__dialog").showModal();
    }, 100);
  }

  if (jwtToken) {
    // User is logged in, show overview only
    return (
      <div className="home_online">
        <h1>Roskilde Tekniske Skole</h1>
        <p>Skole Oplærings Centret</p>
        {/* Add more overview content here */}
        <p>Dashboard Oversigt</p>
      </div>
    );
  }

  return (
    <div className="home_offline">

      <section className="hero-image">
        <h1>Home</h1>
        <Link to="/about">Go to About</Link>
        <div className='utinsils'>
          <LogoutButton />
          <div className='img-frame'>
            <img src="src/assets/Vector.svg" alt="" />
          </div>
        </div>

      </section>
      <section className="activities">
        <h2>Vores Holdtyper</h2>
        <div className='activity-cards'>
          <h2>Boernedans</h2>
          <div className="img-frame">
            <img src="src/assets/boernedans.jpg" alt="" />
          </div>
          <p>På børneholdene leger vi os ind i dansens verden gennem musik, bevægelse og fantasi. Undervisningen styrker motorik, rytme og kropsbevidsthed i trygge rammer. Fokus er på danseglæde, fællesskab og aktiv bevægelse, hvor alle kan være med.</p>
        </div>
        <div className='activity-cards'>
          <h2>Selskabs-og seniodans</h2>
          <div className="img-frame">
            <img src="src/assets/seniordans.jpg" alt="" />
          </div>
          <p>Selskabs- og seniordans kombinerer hyggeligt samvær med skånsom motion. Vi danser klassiske pardanse i et tempo, hvor alle kan følge med. Undervisningen styrker balance, koordination og kondition, samtidig med at fællesskabet og danseglæden er i centrum.</p>
        </div>
        <div className='activity-cards'>
          <h2>Morderne dans og ballet</h2>
          <div className="img-frame">
            <img src="src/assets/modernedans.JPG" alt="" />
          </div>
          <p> "Moderne dans og ballet forener teknik, kropskontrol og musikalsk udtryk. Træningen forbedrer styrke, smidighed og holdning gennem varierede øvelser. Undervisningen foregår i en positiv atmosfære, hvor bevægelsesglæde og koncentration skaber både fordybelse og effektiv motion.</p>
        </div>
        <div className='activity-cards'>
          <h2>Streetdance og hiphop</h2>
          <div className="img-frame">
            <img src="src/assets/streethiphop.jpg" alt="" />
          </div>
          <p>"Streetdance og hiphop er energifyldt træning med fokus på rytme, attitude og fællesskab. Vi arbejder med grooves, koreografier og grundtrin, der styrker kondition og koordination. Stemningen er uformel og motiverende, så motion og danseglæde går hånd i hånd.</p>
        </div>
      </section>
      <section className="newsletter">

      </section>
      <section className="ratings">

      </section>
      <footer className="contact">
        <Contact />
      </footer>
    </div>
  );
}

