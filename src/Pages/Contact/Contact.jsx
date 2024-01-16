import React, { useState } from "react";
import "./style.scss";
import Swal from "sweetalert2";

function Contact() {
  // DECLARATION DES VARIABLES D'ETAT POUR LES CHAMPS DU FORMULAIRE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // DECLARATION DES VARIABLES D'ETAT POUR LES MESSAGES D'ERREURS DES CHAMPS DU FORMULAIRE
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  // MISE EN PLACE DES REGEX POUR VERIFIER LES CHAMPS DU FORMULAIRE
  const isValidName = (name) => /^[a-zA-Z\s]{2,}$/.test(name);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidMessage = (message) => message.length >= 10;

  // FONCTIONS POUR VERIFIER LES CHAMPS DU FORMULAIRE (name,email,message)
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(
      isValidName(value)
        ? ""
        : "Nom invalide (au moins 2 caractères alphabétiques)"
    );
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(isValidEmail(value) ? "" : "Email invalide");
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setMessageError(
      isValidMessage(value) ? "" : "Message invalide (au moins 10 caractères)"
    );
  };

  // FONCTION POUR ENVOYER LE FORMULAIRE
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // CONTROLE DES CHAMPS DU FORMULAIRE, SI ERREUR, AFFICHAGE D'UNE MODAL EPHEMERE SweetAlert2
    if (
      !isValidName(name) ||
      !isValidEmail(email) ||
      !isValidMessage(message)
    ) {
      Swal.fire({
        title: "Erreur",
        text: "Veuillez renseigner tous les champs correctement",
        icon: "error",
        timer: 1800,
      });
      return;
    }

    // AFFICHAGE DES DONNEES DU FORMULAIRE DANS LA CONSOLE
    console.log("Nom:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // ENVOI DES DONNEES DU FORMULAIRE VERS LE BACKEND
    const response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    // SI REPONSE DU BACKEND Ok ALORS...
    if (response.ok) {
      // AFFICHAGE D'UNE MODAL EPHEMERE SweetAlert2 POUR CONFIRMER L'ENVOI DU FORMULAIRE
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Message envoyé avec succès",
        showConfirmButton: false,
        timer: 1800,
      });

      // REINITIALISATION DES CHAMPS DU FORMULAIRE
      setName("");
      setEmail("");
      setMessage("");
      setNameError("");
      setEmailError("");
      setMessageError("");
    } else {
      // EN CAS D'ERREUR
      Swal.fire({
        title: "Erreur",
        text: "Une erreur s'est produite. Veuillez réessayer.",
        icon: "error",
        timer: 1800,
      });
    }
  };

  return (
    <div className="contact-container">
      <h1>Contactez-moi</h1>

      {/* CARTE DE VISITE/CONTACT  */}
      <div className="card">
        <p>
          <i className="fa-solid fa-user"></i>Sylvain CADORET
        </p>
        <p>
          {" "}
          <i className="fa-solid fa-phone"></i>07 81 84 68 33
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:sylvaincadoret@hotmail.com">
            sylvaincadoret@hotmail.com
          </a>
        </p>
        <p>
          <i className="fa-brands fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/sylvain-cadoret">Linkedin</a>
        </p>
        <p>
          <i className="fa-solid fa-location-dot"></i>Localisation : Pontoise
          (95000)
        </p>
      </div>

      {/* CARTE GOOGLE MAPS */}
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d334542.05257285957!2d1.7722439214952184!3d49.07505159097983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f59ac710fac3%3A0x30b82c3688b2b70!2sVal-d&#39;Oise!5e0!3m2!1sen!2sfr!4v1704737380035!5m2!1sen!2sfr"
        allowFullScreen=""
        aria-hidden="false"
      ></iframe>

      {/* DEBUT FORMULAIRE DE CONTACT  */}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={handleNameChange}
        />
        {/* AFFICHAGE DU MESSAGE D'ERREUR EN LIVE SI LE CHAMP EST INCORRECT */}
        {nameError && <span className="error-message">{nameError}</span>}

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <span className="error-message">{emailError}</span>}

        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          value={message}
          onChange={handleMessageChange}
        />
        {messageError && <span className="error-message">{messageError}</span>}

        <input type="submit" value="Envoyer" className="submitButton" />
      </form>
      {/* FIN FORMULAIRE DE CONTACT  */}
    </div>
  );
}

export default Contact;
