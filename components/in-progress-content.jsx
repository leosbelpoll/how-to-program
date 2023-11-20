import React from "react";

export function InProgressContent({ interestedUrl }) {
  return (
    <>
      <p className="text-center pt-5 display-6">Oops, contenido en progreso.</p>
      <p className="text-center">
        Estoy trabajando para brindarte éste contenido
      </p>
      <div className="text-center mt-5">
        <a
          className="btn btn-primary text-center"
          href="#"
          onClick={() => localStorage.setItem("linkToSubscribe", interestedUrl)}
          data-bs-toggle="modal"
          data-bs-target="#subscriptionModal"
        >
          <i class="bi bi-bell-fill"></i> Notifícame cuando esté listo
        </a>
      </div>
    </>
  );
}
