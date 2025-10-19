const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-400">
          © {currentYear} Engenharia Logística. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
