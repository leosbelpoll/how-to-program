import React, { useContext, useEffect, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { Modal } from "./modal";
import { db } from "../utils/firebase";
import { isToday } from "date-fns";
import { getIpAddress } from "../utils/ip";
import { getTranslations } from "../utils/i18n.utils";
import { DARK_THEME, LanguageContext, ThemeContext } from "./layout";

export function Iframe({ videoUrl }) {
  return (
    <iframe
      className="rounded"
      width={600}
      height={330}
      src={videoUrl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
