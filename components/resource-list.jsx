import React, { useContext } from "react";
import classNames from "classnames";

import { categories } from "../data/data";
import {
  DARK_THEME,
  ThemeContext,
  LanguageContext,
  SearchContext,
} from "./layout";
import { HorizontalCard } from "./horizontal-card";
import { slugify } from "../utils/string";
import { useRouter } from "next/router";
import Link from "next/link";
import { collectionGroup } from "firebase/firestore";

function ResourceList() {
  const { search = "" } = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const lowercaseSearch = search.toLowerCase();


  const router = useRouter();

  const {
    query: { resourceSlug },
  } = router;


  const foundCategories =categories.filter(
    (category)=>{
      if (!resourceSlug){
        return !category.parentId
      }else {
        const parentCategory = categories.find(
          (category) =>
          {
            const categoryTitle = category.title[language] || ""           
            if(categoryTitle.toLowerCase() === resourceSlug){
              return category
            }             
          }
        )
        return (category.parentId === parentCategory.id)
      }
  })
  const siblingsCategories =categories.filter(
    (category)=>{
      if (resourceSlug){
        const parentCategory = categories.find(
          (category) =>
          {
            const categoryTitle = category.title[language] || ""           
            if(categoryTitle.toLowerCase() === resourceSlug){
              return category
            }             
          }
        )
        return (category.parentId === parentCategory.parentId)
      }
  })





  return (
    <>
      {foundCategories.length ? (
        <div>
          {foundCategories.map(
            ({ id, title, content, thumbnail, showSubscription }) => (
              <div className="col mb-4" key={id}>
                <div><Link href={`/resources/${slugify(title[language])}`}>{title[language]}</Link></div>
              </div>
            )
          )}
        </div>
      ) : (
        <div>
          {siblingsCategories.map(
            ({ id, title, content, thumbnail, showSubscription }) => (
              <div className="col mb-4" key={id}>
               
                <div
                className={classNames({"active":resourceSlug==slugify(title[language])})}
                ><Link href={`/resources/${slugify(title[language])}`}>{title[language]}</Link></div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}

export default ResourceList;
