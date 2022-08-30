import React from 'react'
import { Link } from 'react-router-dom'
import S from "./Menu.module.css"

const Menu = () => {
    return (
        <div className={S.menulateral}>
            <nav>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/cliente">Cliente</Link>
            </nav>
        </div>
    )
}

export default Menu