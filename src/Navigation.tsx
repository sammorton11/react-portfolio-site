import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link className="navigation__link" to="/contact">
                        Contact
                    </Link>
                </li>
                {/*<li className="navigation__item">*/}
                {/*    <Link className="navigation__link" to="/projects">*/}
                {/*        Projects*/}
                {/*    </Link>*/}
                {/*</li>*/}
                <li className="navigation__item">
                    <Link className="navigation__link" to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
