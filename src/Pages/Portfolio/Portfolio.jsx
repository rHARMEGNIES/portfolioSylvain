import { React, useState } from "react";
import "./style.scss";

function Portfolio() {
  // DEBUT TABLEAU D'OBJETS DES PROJETS
  const Projects = [
    {
      id: 1,
      name: "KASA - Location de biens",
      tech: ["javascript", "js", "react", "html", "css"],
      image: "kasa.png",
      link: "https://github.com/SylvainCdr/kasa",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 2,
      name: "Countries - API",
      tech: ["javascript", "js", "react", "html", "css", "api"],
      image: "countries.png",
      link: "https://github.com/SylvainCdr/countries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 3,
      name: "Portfolio architecte d'intérieur",
      tech: ["javascript", "js", "react", "node", "api", "html", "css"],
      image: "portfolio-architecte.png",
      link: "https://github.com/SylvainCdr/Portfolio-architecte-Frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 7,
      name: "Loc'Event - Location de salles",
      tech: [
        "javascript",
        "symfony",
        "php",
        "html",
        "css",
        "bootstrap",
        "mysql",
      ],
      image: "locEvent.png",
      link: "https://github.com/SylvainCdr/ecfHall/tree/STAGING",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 8,
      name: "Pokemons - Pokedex",
      tech: ["javascript", "js", "react", "api", "html", "css"],
      image: "pokemon.png",
      link: "https://github.com/SylvainCdr/pokemon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 4,
      name: "CodExpress - Gestion et partage de snippets",
      tech: ["symfony", "php", "html", "css", "mysql"],
      image: "codexpress.png",
      link: "https://github.com/SylvainCdr/codexpress ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 5,
      name: "BiblioApp - Interface de gestion de bibliothèque",
      tech: ["symfony", "php", "html", "css", "mysql"],
      image: "biblioapp.png",
      link: "https://github.com/SylvainCdr/biblioapp",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 6,
      name: "Site - e-commerce",
      tech: ["html", "css"],
      image: "e-com_2.png",
      link: "https://github.com/SylvainCdr/WEBSITE_INTERACTIF ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
    {
      id: 10,
      name: "Portfolio personnel",
      tech: ["React", "node", "html", "css"],
      image: "personalPortfolio.png",
      link: "https://github.com/SylvainCdr/PersonalPortfolio-Frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },

    {
      id: 9,
      name: "Gestionnaire de tâches",
      tech: ["php", "html", "css", "mysql"],
      image: "todolist.png",
      link: "https://github.com/SylvainCdr/toDoList ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus atque soluta vero labore fugit, nesciunt sapiente delectus? Dolorem commodi a autem! Distinctio exercitationem commodi asperiores labore mollitia, recusandae",
    },
  ];
  // FIN TABLEAU D'OBJETS DES PROJETS

  // FONCTIONNALITE DE RECHERCHE PAR TECHNO
  const [searchTechnos, setSearchTechnos] = useState("");
  // FONCTIONNALITE D'AGRANDISSEMENT DES IMAGES
  const [enlargedImage, setEnlargedImage] = useState(null);

  // FONCTIONNALITE DE RECHERCHE PAR TECHNO & AFFICHAGE EN TEMPS REEL
  const handleSearch = (e) => {
    setSearchTechnos(e.target.value);
    setEnlargedImage(null); // Réinitialiser l'image agrandie lors d'une nouvelle recherche
  };

  // FONCTION handleClick pour agrandir l'image
  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  // FONCTION POUR FILTRER LES PROJETS PAR TECHNO
  const filteredProjects = Projects.filter((project) => {
    const lowerCasedSearch = searchTechnos.toLowerCase();
    return project.tech.some((tech) =>
      tech.toLowerCase().includes(lowerCasedSearch)
    );
  });

  return (
    <div className="portfolio">
      <h1>Découvrez mes projets</h1>

      {/* DEBUT BARRE DE RECHERCHE */}
      <div className="portfolio_search">
        <input
          type="text"
          placeholder="Rechercher une techno (ex: react)"
          value={searchTechnos}
          onChange={handleSearch}
        />
      </div>
      {/* FIN BARRE DE RECHERCHE */}

      {/* DEBUT LISTE DES PROJETS FILTRES */}
      <div className="portfolio_container">
        {filteredProjects.map((project) => (
          <div className="portfolio__card" key={project.id}>
            <h2>{project.name}</h2>
            <img
              src={"media/portfolio/" + project.image}
              alt={project.name}
              onClick={() => handleImageClick(project.image)}
            />
            {/* <p>{project.tech.join(", ")}</p> */}
            <p>{project.description}</p>
            <button>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Voir le projet <i className="fa-brands fa-github"></i>
              </a>
            </button>
          </div>
          // FIN LISTE DES PROJETS FILTRES
        ))}
      </div>

      {/* DEBUT AFFICHAGE DE L IMAGE AU CLIC */}
      {enlargedImage && (
        <div className="enlarged_img" onClick={() => setEnlargedImage(null)}>
          <img
            src={"media/portfolio/" + enlargedImage}
            alt="Enlarged Project"
            className="enlarged_image"
          />
        </div>
      )}
      {/* FIN AFFICHAGE DE L IMAGE AU CLIC */}
    </div>
  );
}

export default Portfolio;
