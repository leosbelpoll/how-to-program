import { useRouter } from "next/router";
import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { resources, categories } from "../data/data";
import { LanguageContext } from "./layout";
import Link from "next/link";
import { slugify, normalizeStringLiteral } from "../utils/string";
import { Iframe } from "./iframe";
import { CodeBlock } from "./code-block";
import { AutoScrollTop } from "./auto-scroll-top";
import { InProgressContent } from "./in-progress-content";
import Head from "next/head";
import { getVideoThumbnailFromEmbedUrl } from "../utils/youtube";
import { SelectConcept } from "./SelectConcept";

export function ResourceDetails({ resource }) {
  const router = useRouter();
  const { language } = useContext(LanguageContext);

  const {
    query: { resourceSlug },
  } = router;

  const resourcesList = resources.filter(
    (resource) => {
      const category =  categories.find(
        (category) =>
        {
          const categoryTitle = category.title[language] || ""           
          if(categoryTitle.toLowerCase() === resourceSlug){
            return category          
          }             
        }
      )
       if(category) {
        if(resource.categoryId === category.id) {
          return resource
        }
      }           
    }
  );

  if (!resourcesList) return <SelectConcept text="Seleccione otra categoría" />;


  return <div>
  {resourcesList.map(
    ({ id, title,url }) => (
      <div className="col mb-4" key={id}>
        <div><Link href={`${url}`}>{title[language]}</Link></div>
      </div>
    )
  )}
</div>;
}
