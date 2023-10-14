import React, { useContext, useEffect, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { Modal } from "./modal";
import { db } from "../utils/firebase";
import { getIpAddress } from "../utils/ip";
import { DARK_THEME, ThemeContext } from "./layout";

export function Subscription() {
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [loading, setLoading] = useState(false);

  const { theme } = useContext(ThemeContext);

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

    const ipAddress = await getIpAddress();

    const subscriptionInfo = {
      email,
      linkToSubscribe: localStorage.getItem("linkToSubscribe"),
      ipAddress,
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
      <div className="input-group mb-3">
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
              className="form-control rounded-start"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setIsInvalidEmail(false);
              }}
              data-bs-theme={theme === DARK_THEME ? "dark" : "light"}
            />
            <button
              className="input-group-text btn btn-primary rounded-end"
              id="email"
              onClick={onSubsciptionButtonClick}
              disabled={loading}
            >
              {!loading ? (
                <>Enviar</>
              ) : (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
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
        <div className="invalid-email text-danger">Entre un email válido</div>
      )}
    </Modal>
  );
}
