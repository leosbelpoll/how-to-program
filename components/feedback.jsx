import React, { useContext, useEffect, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { Modal } from "./modal";
import { db } from "../utils/firebase";
import { isToday } from "date-fns";
import { getIpAddress } from "../utils/ip";
import { getTranslations } from "../utils/i18n.utils";
import { DARK_THEME, LanguageContext, ThemeContext } from "./layout";

export function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [lastFeedbackDate, setLastFeedbackDate] = useState();
  const [loading, setLoading] = useState(false);

  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setLastFeedbackDate(
      new Date(JSON.parse(localStorage.getItem("lastFeedbackDate")))
    );
  }, []);

  const onFeedbackButtonClick = async () => {
    setLoading(true);

    const feedbackDate = new Date();

    const ipAddress = await getIpAddress();

    const feedbackInfo = {
      message: feedback,
      ipAddress,
      createdAt: Timestamp.fromDate(feedbackDate),
    };

    try {
      await addDoc(collection(db, "feedbacks"), feedbackInfo);

      setLastFeedbackDate(feedbackDate);
      localStorage.setItem("lastFeedbackDate", JSON.stringify(feedbackDate));
    } catch {
      alert(
        "Estamos teniendo un error. Es probable que tengas algun bloqueador en tu navegador. Deshabilitalo e intenta otra vez. Gracias!"
      );
    }

    setLoading(false);
  };

  return (
    <Modal
      title={getTranslations("MENU_FEEDBACK", language)}
      id="feedbackModal"
    >
      <div className="mb-3">
        {!isToday(lastFeedbackDate) ? (
          <>
            <small className="mb-3">
              ¡Hola! Estoy trabajando para brindarte la mejor experiencia
              posible. Pero soy humano y cometo errores. Te pido que me ayudes a
              mejorar la plataforma. Ten en cuenta que para evitar bots
              automáticos se puede enviar solo un comentario al día. Puedes enviar varias ideas a la vez sin problemas{" "}
              <p className="mt-4">
                <strong>¡Gracias por tu interés y colaboración!</strong>
              </p>
            </small>
            <textarea
              rows={5}
              className="form-control rounded-start"
              placeholder="Entre comentario ..."
              aria-label="Feedback"
              aria-describedby="feedback"
              value={feedback}
              onChange={(event) => {
                setFeedback(event.target.value);
              }}
              data-bs-theme={theme === DARK_THEME ? "dark" : "light"}
            />
            <button
              className="input-group-text btn btn-primary rounded-end mt-3 w-100"
              id="feedback"
              onClick={onFeedbackButtonClick}
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
              Se envió correctamente su comentario. A partir de mañana podrás
              enviar otro para evitar bots automáticos.
              <p className="mt-4">
                <strong>¡Gracias por tu interés y colaboración!</strong>
              </p>
            </small>
          </>
        )}
      </div>
    </Modal>
  );
}
