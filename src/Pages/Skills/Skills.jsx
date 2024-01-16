import { React, useState } from "react";
import "./style.scss";

function Competences() {
  // DEBUT TABLEAU D'OBJETS DES COMPETENCES
  const techSkills = [
    {
      name: "HTML",
      category: "Frontend",
      img: "https://img.icons8.com/?size=80&id=rgWYRCafcInr&format=png",
    },

    {
      name: "CSS",
      category: "Frontend",
      img: "https://img.icons8.com/?size=64&id=107497&format=png",
    },
    {
      name: "UI / UX",
      category: "Frontend",
      img: "https://img.icons8.com/?size=80&id=7rimLou8lu9W&format=png",
    },
    {
      name: "PHP",
      category: "Backend",
      img: "https://img.icons8.com/?size=80&id=ew8X3wM9rXiK&format=png",
    },
    {
      name: "Symfony",
      category: "Framework",
      img: "https://img.icons8.com/?size=80&id=tzQnYsj2vAdh&format=png",
    },
    {
      name: "MySQL",
      category: "BDD",
      img: "https://img.icons8.com/?size=80&id=rgPSE6nAB766&format=png",
    },
    {
      name: "MongoDB",
      category: "BDD",
      img: "https://img.icons8.com/?size=80&id=8rKdRqZFLurS&format=png",
    },
    {
      name: "PostgreSQL",
      category: "BDD",
      img: "https://img.icons8.com/?size=80&id=LwQEs9KnDgIo&format=png",
    },

    {
      name: "JavaScript",
      category: "Frontend",
      img: "https://img.icons8.com/?size=64&id=1ZSHk8m9bk4p&format=png",
    },
    {
      name: "React",
      category: "Framework",
      img: "https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png",
    },
    {
      name: "Node",
      category: "Backend",
      img: "https://img.icons8.com/?size=64&id=ouWtcsgDBiwO&format=png",
    },

    {
      name: "GitHub",
      category: "Tools",
      img: "https://img.icons8.com/?size=80&id=1kYzi9NIypqq&format=png",
    },
    {
      name: "VS Code",
      category: "Outils",
      img: "https://img.icons8.com/?size=64&id=iFPHC1KfnoxC&format=png",
    },
    {
      name: "Figma",
      category: "Outils",
      img: "https://img.icons8.com/?size=80&id=P5ROoX4rxKSE&format=png",
    },
    {
      name: "Adobe XD",
      category: "Outils",
      img: "https://img.icons8.com/?size=80&id=DkZbcrYZGKru&format=png",
    },
    {
      name: "Trello",
      category: "Outils",
      img: "https://img.icons8.com/?size=80&id=HxCJ3JvA06ml&format=png",
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      img: "https://img.icons8.com/?size=80&id=BASPRdx1MrMq&format=png",
    },
    {
      name: "WordPress",
      category: "CMS",
      img: "https://img.icons8.com/?size=80&id=aMLZmDlq6SvC&format=png",
    },
  ];
  // FIN TABLEAU D'OBJETS DES COMPETENCES

  // DEBUT FILTRE DES COMPETENCES
  const [currentCategory, setCurrentCategory] = useState(0);
  const [displayedSkills, setDisplayedSkills] = useState(techSkills);
  const categories = [
    "Toutes",
    "Frontend",
    "Backend",
    "Framework",
    "BDD",
    "Outils",
    "CMS",
  ];
  // FIN FILTRE DES COMPETENCES

  // DEBUT FONCTION DE FILTRE
  const filter = (category, index) => {
    setCurrentCategory(index);
    if (category === "Toutes") {
      setDisplayedSkills(techSkills);
    } else {
      const filtered = techSkills.filter(
        (skill) => skill.category === category
      );
      setDisplayedSkills(filtered);
    }
  };
  // FIN FONCTION DE FILTRE

  return (
    <div className="skills_container">
      <h1>Compétences</h1>
      {/* DEBUT BOUTONS DE FILTRE */}
      <div className="skills_buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={currentCategory === index ? "active" : ""}
            onClick={() => filter(category, index)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* FIN BOUTONS DE FILTRE */}

      {/* DEBUT LISTE DES COMPETENCES */}
      <div className="skills_list">
        {displayedSkills.map((skill, index) => (
          <div key={index} className="skills_card">
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      {/* FIN LISTE DES COMPETENCES */}

      {/* DEBUT DETAIL EXPERIENCE */}
      <h1>Expériences</h1>

      <div className="skills_experience">
        <div className="skills_experience_details">
          <p>
            Ma transition vers le développement web s'inspire directement de mon
            parcours de gestionnaire. Mes compétences acquises dans le commerce
            sont des atouts précieux que je transpose dans le monde du code :{" "}
          </p>
          <li>Gestion stratégique et opérationnelle </li>
          <li>Planification efficace et respect des délais </li>
          <li> Communication claire et adaptée à différents interlocuteurs </li>
          <li>Capacité à résoudre des problèmes complexes </li>
          <li>Adaptabilité et prise de décision rapide </li>
          <li>
            Compétences en design & merchandising, alliant esthétique et
            expérience utilisateur
          </li>
          <p>
            Chaque jour en tant que directeur adjoint m'a appris à gérer des
            équipes, à répondre aux besoins des clients et à assurer le bon
            déroulement des opérations. Ces compétences, combinées à ma passion
            pour le développement web, font de moi un professionnel déterminé,
            prêt à contribuer à des projets web passionnants.
          </p>
          <p>🚀💻 #CodeAndCommerce" </p>
          <p>
            Pour en savoir plus sur mon parcours, vous pouvez télécharger mon CV
            :{" "}
            <button className="Skills_cv_button">
              <a href="/media/CV_Cadoret-Sylvain.pdf" download>
                Cliquez ici
              </a>
            </button>
          </p>
        </div>

        <div className="skills_experience_img">
          <img src="./media/clipboard.svg" alt="clipboard img" />
        </div>
      </div>
      {/* FIN DETAIL EXPERIENCE */}

      {/* DEBUT DETAIL HOBBIES */}
      <h1>Au-delà du Professionnel</h1>
      <div className="skills_hobbies">
        <div className="skills_hobbies_img">
          <img src="./media/target.svg" alt="target img" />
        </div>
        <div className="skills_hobbies_details">
          <p>
            En parralèle de ma passion pour le développement web, je trouve un
            équilibre dans ma vie à travers diverses activités qui nourrissent
            ma créativité et mon bien-être.
          </p>
          <p>
            Ces expériences non seulement élargissent mes horizons, mais
            renforcent également ma perspective innovante dans le monde du
            développement.
          </p>

          <p>
            Chaque centre d'intérêt apporte sa propre nuance à mon parcours,
            créant une toile unique qui reflète ma personnalité polyvalente et
            ma passion pour l'apprentissage continu.
          </p>
          <p>Mes loisirs sont :</p>

          <li>L'aquariophilie & la terrariophilie</li>
          <li>La photographie</li>
          <li>La botanique</li>
          <li>La plongée</li>
          <li>Le voyage</li>
          <li>La cuisine</li>
        </div>
      </div>
      {/* FIN DETAIL HOBBIES */}
    </div>
  );
}

export default Competences;
