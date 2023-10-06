import React, { useState } from "react";
import { Modal } from "./modal";

export function Subscription() {
  const [email, setEmail] = useState("");

  const isEmailValid = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;
    return regex.test(email);
  };

  const onSubsciptionButtonClick = () => {
    console.log("lets go");

    // if (!isEmailValid(email)) {
    //   alert("Entre un correo electrónico válido");
    // }

    // alert("lets go");
  };

  return (
    <Modal
      title={{
        es: "Actualizaciones y comunicaciones",
        en: "I'll keep you updated",
      }}
      id="subscriptionModal"
    >
      <div class="input-group mb-3">
        <small className="mb-3">
          ¡Hola! Estoy trabajando en la entrega del contenido
          que deseas. Para mantenerte informado sobre el progreso y las
          entregas, te invito a proporcionarme tu correo electrónico. Así,
          podrás recibir actualizaciones importantes directamente en tu bandeja
          de entrada. <strong>¡Gracias por tu interés y colaboración!</strong>
        </small>
        <input
          type="text"
          class="form-control rounded-start"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          class="input-group-text btn btn-primary rounded-end"
          id="email"
          onClick={onSubsciptionButtonClick}
        >
          Enviar
        </button>
        {/* <div class="invalid-feedback">Entre un email válido 🙏</div> */}
      </div>
    </Modal>
  );
}
