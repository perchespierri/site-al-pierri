import React from 'react'

const Header = () => {
  return (
      <header>
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200" aria-label="Menu principal">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Engenharia Logística
            </div>
            <ul className="hidden md:flex gap-8" role="menubar">
              <li role="none">
                <a href="#sobre" className="text-slate-700 hover:text-blue-600 transition-colors cursor-pointer" role="menuitem">Sobre</a>
              </li>
              <li role="none">
                <a href="#servicos" className="text-slate-700 hover:text-blue-600 transition-colors cursor-pointer" role="menuitem">Serviços</a>
              </li>
              <li role="none">
                <a href="#experiencia" className="text-slate-700 hover:text-blue-600 transition-colors cursor-pointer" role="menuitem">Experiência</a>
              </li>
              <li role="none">
                <a href="#contato" className="text-slate-700 hover:text-blue-600 transition-colors cursor-pointer" role="menuitem">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

  )
}

export default Header