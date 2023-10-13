import React, { useEffect, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { Modal } from "./modal";
import { db } from "../utils/firebase";
import { isToday } from "date-fns";

export function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [lastFeedbackDate, setLastFeedbackDate] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLastFeedbackDate(new Date(JSON.parse(localStorage.getItem("lastFeedbackDate"))));
  }, []);

  const onFeedbackButtonClick = async () => {
    setLoading(true);

    const feedbackDate = new Date();

    const feedbackInfo = {
      message: feedback,
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
      title={{
        es: "Sugerir cambios",
        en: "Give feedback",
      }}
      id="feedbackModal"
    >
      <div class="mb-3">
        {!isToday(lastFeedbackDate) ? (
          <>
            <small className="mb-3">
              ¡Hola! Estoy trabajando para brindarte la mejor experiencia
              posible. Pero soy humano y cometo errores. Te pido que me ayudes a
              mejorar la plataforma. Ten en cuenta que para evitar bots automáticos se puede enviar solo un comentario al día.{" "}
              <p className="mt-4">
                <strong>¡Gracias por tu interés y colaboración!</strong>
              </p>
            </small>
            <textarea
              rows={5}
              class="form-control rounded-start"
              placeholder="Entre comentario ..."
              aria-label="Feedback"
              aria-describedby="feedback"
              value={feedback}
              onChange={(event) => {
                setFeedback(event.target.value);
              }}
            />
            <button
              class="input-group-text btn btn-primary rounded-end mt-3 w-100"
              id="feedback"
              onClick={onFeedbackButtonClick}
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
              Se envió correctamente su comentario. A partir de mañana podrás enviar otro para evitar bots automáticos.
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
