import React, { useContext } from 'react'
import classNames from 'classnames';
import Link from 'next/link';

import { SearchContext } from './index';
import courses from '../data/courses.json'
import { DARK_THEME, ThemeContext } from '../components/layout';

function CourseList() {
    const { search } = useContext(SearchContext);
    const { theme } = useContext(ThemeContext);
    const lowercaseSearch = search.toLowerCase();

    const foundCourses = courses.filter(({ title, description, tags }) => title.toLowerCase().includes(lowercaseSearch) || description.toLocaleLowerCase().includes(lowercaseSearch) || tags.some(tag => tag.toLowerCase().includes(lowercaseSearch)))

    return (
        <>
            {foundCourses.length ? (
                <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {foundCourses.map(({ id, title, description, thumbnail, background, textColor }, index) => (
                        <div className="col mb-4" key={index}>
                            <div className={classNames("card h-100", {
                                "bg-dark": theme === DARK_THEME,
                                "border-light": theme === DARK_THEME,
                                "text-white": theme === DARK_THEME,
                            })}>
                                <img src={`/images/courses/${thumbnail}-thumbnail.jpg`} className="card-img-top" alt="..." />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div className="mb-4">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{description}</p>
                                    </div>
                                    <div className="d-grid">
                                        <Link href="#" className="btn btn-primary" type="button">Ir al curso</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (<div className={classNames("alert", {
                "alert-dark": theme === DARK_THEME
            })} role="alert">
                No se ha encontrado ningún curso para: <strong>{search}</strong>
            </div>)
            }
        </>
    )
}

export default CourseList