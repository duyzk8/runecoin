import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
<>
      <header className="text-withe-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/tcs">
              <span className="mr-5 hover:text-gray-900">Tibia Coins</span>
            </Link>
            <Link href="/precios">
              <span className="mr-5 hover:text-gray-900">Precios</span>
            </Link>
            <Link href="/contacto">
              <span className="mr-5 hover:text-gray-900">Contacto</span>
            </Link>
            
          </nav>
        </div>
      </header>
    </>  )
}

export default Navbar