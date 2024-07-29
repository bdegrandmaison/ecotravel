import { Typography } from "antd";
import { formatRoute } from "../utils";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Title level={2}>À propos de EcoTravel</Title>
      <Paragraph>
        Bienvenue sur EcoTravel, une plateforme dédiée à promouvoir des voyages
        écologiques et des actions bénéfiques pour l'environnement. Notre
        mission est de permettre aux voyageurs de découvrir de magnifiques
        destinations tout en contribuant à des initiatives écologiques comme le
        nettoyage des plages, la plantation d'arbres, et la protection des
        animaux en voie de disparition.
      </Paragraph>
      <Title level={3}>Technologies Utilisées</Title>
      <Paragraph>
        <ul>
          <li>
            <b>React</b> : Une bibliothèque JavaScript pour construire des
            interfaces utilisateur.
          </li>
          <li>
            <b>Vite</b> : Un outil de build rapide et moderne pour les projets
            web.
          </li>
          <li>
            <b>React Router</b> : Une bibliothèque pour gérer la navigation dans
            l'application.
          </li>
          <li>
            <b>Ant Design</b> : Un framework de composants UI pour React.
          </li>
          <li>
            <b>MSW (Mock Service Worker)</b> : Un outil pour simuler des API en
            local pendant le développement.
          </li>
          <li>
            <b>Dayjs</b> : Une bibliothèque pour manipuler les dates.
          </li>
          <li>
            <b>React Query</b> : Une bibliothèque pour gérer les requêtes de
            données et le cache.
          </li>
          <li>
            <b>TypeScript</b> : Un sur-ensemble de JavaScript qui ajoute des
            types statiques.
          </li>
        </ul>
      </Paragraph>
      <Title level={3}>Objectifs des destinations écologiques</Title>
      <Paragraph>
        <ol>
          <li>
            <b>Sensibilisation</b> : Promouvoir l'importance de l'écotourisme et
            des actions écologiques.
          </li>
          <li>
            <b>Participation Active</b> : Offrir des opportunités aux voyageurs
            de participer à des actions écologiques.
          </li>
          <li>
            <b>Éducation</b> : Informer sur les impacts environnementaux et les
            mesures pour les atténuer.
          </li>
        </ol>
      </Paragraph>
      <Paragraph>
        Merci de faire partie de cette aventure écologique avec nous !
      </Paragraph>
      <img
        loading="lazy"
        src={`${formatRoute()}/images/pandas2.jpg`}
        alt="panda"
        style={{ display: "block", margin: "0 auto" }}
      />
    </div>
  );
};

export default About;
