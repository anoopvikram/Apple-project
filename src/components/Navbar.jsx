import React from 'react'
import {navLinks} from '../constants'
export const Navbar = () => {
  return (
    <header>
        <nav>
            <img src="logo.svg"/>
            <ul>
                {navLinks.map(({label}) => (
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex-center gap-3'>
                <button>
                    <img src="/search.svg"/>
                </button>
                <button>
                    <img src="/cart.svg"/>
                </button>
            </div>
        </nav>
    </header>
  )
}
