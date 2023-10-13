import React, { useEffect, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { Modal } from "./modal";
import { db } from "../utils/firebase";

export function Subscription() {
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSubscription(JSON.parse(localStorage.getItem("subscription")));
  }, []);

  const isEmailValid = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;
    return regex.test(email);
  };

  const onSubsciptionButtonClick = async () => {
    if (!isEmailValid(email)) {
      setIsInvalidEmail(true);
      return;
    }

    setLoading(true);

    const subscriptionInfo = {
      email,
      linkToSubscribe: localStorage.getItem("linkToSubscribe"),
      createdAt: Timestamp.fromDate(new Date()),
    };

    try {
      await addDoc(collection(db, "subscriptions"), subscriptionInfo);

      setSubscription(subscriptionInfo);
      localStorage.setItem("subscription", JSON.stringify(subscriptionInfo));
    } catch {
      alert(
        "Estamos teniendo un error. Es probable que tengas algun bloqueador en tu navegador. Deshabilitalo e intenta otra vez. Gracias!"
      );
    }

    setLoading(false);
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
        {!subscription ? (
          <>
            <small className="mb-3">
              ¡Hola! Estoy trabajando en la entrega del contenido que deseas.
              Para mantenerte informado sobre el progreso y las entregas, te
              invito a proporcionarme tu correo electrónico. Así, podrás recibir
              actualizaciones importantes directamente en tu bandeja de entrada.{" "}
              <p className="mt-4">
                <strong>¡Gracias por tu interés y colaboración!</strong>
              </p>
            </small>
            <input
              type="text"
              class="form-control rounded-start"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setIsInvalidEmail(false);
              }}
            />
            <button
              class="input-group-text btn btn-primary rounded-end"
              id="email"
              onClick={onSubsciptionButtonClick}
              disabled={loading}
            >
              {!loading ? (
                <>Enviar</>
              ) : (
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              )}
            </button>
          </>
        ) : (
          <>
            <small>
              ¡Hola! Estoy trabajando en la entrega del contenido que deseas. A
              penas vaya sacando contenido recibirás las actualizaciones
              directamente en tu bandeja de entrada.{" "}
              <p className="mt-4">
                <strong>¡Gracias por tu interés y colaboración!</strong>
              </p>
            </small>
          </>
        )}
      </div>
      {!subscription && isInvalidEmail && (
        <div class="invalid-email text-danger">Entre un email válido</div>
      )}
    </Modal>
  );
}
