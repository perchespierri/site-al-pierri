'use client';

import Footer from '@/components/Footer/Footer';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const text = `
  Olá, me chamo ${name}.
  E-mail: ${email}
  Telefone: ${phone}

  ${message}
    `.trim();

    const whatsappNumber = '5516997114630'; 
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <header>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200" aria-label="Menu principal">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            AL PIERRI
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
              <a href="#formacao" className="text-slate-700 hover:text-blue-600 transition-colors cursor-pointer" role="menuitem">Formação</a>
            </li>
            <li role="none">
              <a href="#depoimentos" className="text-slate-700 hover:text-blue-600 transition-colors cursor-pointer" role="menuitem">Depoimentos</a>
            </li>
            <li role="none">
              <a href="#contato" className="text-slate-700 hover:text-blue-600 transition-colors cursor-pointer" role="menuitem">Contato</a>
            </li>
          </ul>
        </div>
      </nav>

      </header>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <section className="pt-32 pb-20 px-6" aria-labelledby="hero-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 id="hero-title" className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
                Engenharia de Produção
              </h1>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">com foco em produtividade, melhoria contínua e logística</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                Soluções estratégicas para otimização de processos, redução de custos e eficiência operacional
              </p>
              <a
                href="#contato"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
                aria-label="Entre em contato conosco"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20 px-6 bg-white" aria-labelledby="sobre-title">
          <div className="max-w-5xl mx-auto">
            <h2 id="sobre-title" className="text-4xl font-bold text-slate-900 mb-12 text-center">Sobre Mim</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <article>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Engenheiro de Produção com sólida experiência em logística e gestão da cadeia de suprimentos. 
                  Especializado em otimização de processos, redução de custos operacionais e implementação de 
                  sistemas de gestão eficientes.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Minha abordagem combina análise técnica rigorosa com visão estratégica de negócios, 
                  sempre focando em resultados mensuráveis e sustentáveis para as organizações.
                </p>
              </article>
              <aside className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Especialidades</h3>
                <ul className="space-y-3" role="list">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3" aria-hidden="true">✓</span>
                    <span className="text-slate-700">Gestão de Cadeia de Suprimentos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3" aria-hidden="true">✓</span>
                    <span className="text-slate-700">Otimização de Processos Logísticos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3" aria-hidden="true">✓</span>
                    <span className="text-slate-700">Planejamento e Controle de Produção</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3" aria-hidden="true">✓</span>
                    <span className="text-slate-700">Gestão de Estoques e Armazenagem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3" aria-hidden="true">✓</span>
                    <span className="text-slate-700">Análise de Custos Logísticos</span>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20 px-6" aria-labelledby="servicos-title">
          <div className="max-w-7xl mx-auto">
            <h2 id="servicos-title" className="text-4xl font-bold text-slate-900 mb-4 text-center">Serviços</h2>
            <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
              Soluções personalizadas para transformar sua operação logística
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Consultoria Logística</h3>
                <p className="text-slate-600 leading-relaxed">
                  Diagnóstico completo da operação, identificação de gargalos e desenvolvimento de 
                  estratégias para otimização do fluxo logístico e redução de custos.
                </p>
              </article>

              <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Otimização de Processos</h3>
                <p className="text-slate-600 leading-relaxed">
                  Análise e redesenho de processos produtivos e logísticos, implementação de 
                  metodologias Lean e Six Sigma para máxima eficiência operacional.
                </p>
              </article>

              <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Gestão de Estoques</h3>
                <p className="text-slate-600 leading-relaxed">
                  Planejamento e controle de inventário, implementação de sistemas de gestão de 
                  estoques e desenvolvimento de políticas de reposição otimizadas.
                </p>
              </article>

              <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Gestão de Projetos</h3>
                <p className="text-slate-600 leading-relaxed">
                  Planejamento e execução de projetos de melhoria contínua, implementação de novos 
                  sistemas e acompanhamento de indicadores de desempenho.
                </p>
              </article>

              <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Supply Chain</h3>
                <p className="text-slate-600 leading-relaxed">
                  Gestão integrada da cadeia de suprimentos, otimização de fornecedores, análise 
                  de rotas de distribuição e implementação de tecnologias logísticas.
                </p>
              </article>

              <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Redução de Custos</h3>
                <p className="text-slate-600 leading-relaxed">
                  Análise detalhada de custos operacionais, identificação de oportunidades de economia 
                  e implementação de ações para redução sustentável de despesas.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="experiencia" className="py-20 px-6 bg-white" aria-labelledby="experiencia-title">
          <div className="max-w-5xl mx-auto">
            <h2 id="experiencia-title" className="text-4xl font-bold text-slate-900 mb-4 text-center">
              Experiência Profissional
            </h2>
            <p className="text-slate-600 text-center mb-16">
              Trajetória consolidada na engenharia de produção, atuando em grandes empresas nacionais e multinacionais
            </p>

            <div className="space-y-8">
              <article className="border-l-4 border-blue-600 pl-8 py-4">
                <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">Gerente de Logística</h3>
                  <time className="text-slate-500 font-semibold" dateTime="2017/presente">2017 – presente</time>
                </header>
                <p className="text-blue-600 font-semibold mb-3">Villa Fonte</p>
                <p className="text-slate-700 leading-relaxed">
                  Gerente de logística da empresa Villa Fonte, fornecedora de água mineral na região de Araraquara-SP.
                </p>
              </article>

              <article className="border-l-4 border-blue-600 pl-8 py-4">
                <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">Professor de Ensino Superior</h3>
                  <time className="text-slate-500 font-semibold" dateTime="2016/presente">2016 – presente</time>
                </header>
                <p className="text-blue-600 font-semibold mb-3">Fatec Taquaritinga</p>
                <p className="text-slate-700 leading-relaxed">
                  Atuação como docente em disciplinas da área de Engenharia de Produção, com foco em processos industriais, 
                  planejamento e controle da produção, gestão da qualidade e logística.
                </p>
              </article>

              <article className="border-l-4 border-blue-600 pl-8 py-4">
                <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">Gerente de Produção</h3>
                  <time className="text-slate-500 font-semibold" dateTime="2013/2015">2013 – 2015</time>
                </header>
                <p className="text-blue-600 font-semibold mb-3">Antoniosi Tecnologia AgroIndustrial</p>
                <p className="text-slate-700 leading-relaxed">
                  Responsável pela gestão das operações produtivas, coordenação de equipes e implementação de melhorias 
                  em processos industriais, garantindo eficiência e cumprimento de metas de produção.
                </p>
              </article>

              <article className="border-l-4 border-blue-600 pl-8 py-4">
                <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">Engenheiro Especialista</h3>
                  <time className="text-slate-500 font-semibold" dateTime="2008/2013">2008 – 2013</time>
                </header>
                <p className="text-blue-600 font-semibold mb-3">IESA Projetos, Equipamentos e Montagens S/A</p>
                <p className="text-slate-700 leading-relaxed">
                  Coordenação da montagem de trens e truques para o Metrô de São Paulo em parceria com a Alstom. 
                  Liderança das áreas de produção e PCP, controle de materiais e armazenamento, além de gestão direta 
                  de cerca de 75 colaboradores.
                </p>
              </article>

              <article className="border-l-4 border-blue-600 pl-8 py-4">
                <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">Coordenador de Produção</h3>
                  <time className="text-slate-500 font-semibold" dateTime="2006/2008">2006 – 2008</time>
                </header>
                <p className="text-blue-600 font-semibold mb-3">Embraer</p>
                <p className="text-slate-700 leading-relaxed">
                  Coordenação da montagem final da asa do avião Embraer ERJ 190, gestão de equipe de 40 pessoas e 
                  participação na implementação do sistema Lean Manufacturing. Responsável por treinamentos e 
                  melhorias contínuas na linha de montagem.
                </p>
              </article>

              <article className="border-l-4 border-blue-600 pl-8 py-4">
                <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">Gerente de Produção</h3>
                  <time className="text-slate-500 font-semibold" dateTime="2002/2006">2002 – 2006</time>
                </header>
                <p className="text-blue-600 font-semibold mb-3">Kawasaki Heavy Industries</p>
                <p className="text-slate-700 leading-relaxed">
                  Participação no start-up da montagem da asa do avião ERJ 190 (Embraer), aplicação do 
                  Kawasaki Production System e coordenação dos setores de logística, manutenção e suprimentos. 
                  Experiência em cronogramas de produção (MS Project) e gestão integrada de processos.
                </p>
              </article>

              <article className="border-l-4 border-blue-600 pl-8 py-4">
                <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">Coordenador de Produção</h3>
                  <time className="text-slate-500 font-semibold" dateTime="1998/2002">1998 – 2002</time>
                </header>
                <p className="text-blue-600 font-semibold mb-3">ZF Friedrichshafen</p>
                <p className="text-slate-700 leading-relaxed">
                  Coordenação da produção em três turnos para montagem de platôs e discos de embreagem, 
                  atendendo montadoras como Ford, Volkswagen e GM. Implementação de práticas de melhoria contínua 
                  (5S, Kaizen, TPM, Six Sigma) e participação em certificações ISO 9001, TS 16949, ISO 14000 e VDA 6.
                </p>
              </article>
            </div>

            <aside id="formacao" className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Formação Acadêmica</h3>
              <div className="grid md:grid-cols-1 gap-6 text-center">

                <article>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">
                    Engenharia de Produção - Química
                  </h4>
                  <p className="text-slate-700">Universidade Federal de São Carlos (UFSCar)</p>
                  <time className="text-slate-500 font-medium">1990 – 1995</time>
                </article>

                <article>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">
                    Pós-Graduação Lato Sensu em Gestão da Produção
                  </h4>
                  <p className="text-slate-700">Universidade Federal de São Carlos (UFSCar)</p>
                  <time className="text-slate-500 font-medium">2002 – 2003</time>
                </article>

                <article>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">
                    Mestrado em Engenharia de Produção – Produção, Qualidade e Melhoria Contínua
                  </h4>
                  <p className="text-slate-700">Universidade de Araraquara (UNIARA)</p>
                  <time className="text-slate-500 font-medium">2015 – 2017</time>
                </article>

              </div>
            </aside>

          </div>
        </section>

        <section id="depoimentos" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-cyan-50" aria-labelledby="depoimentos-title">
          <div className="max-w-6xl mx-auto">
            <h2 id="depoimentos-title" className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Depoimentos
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Marcio Santos */}
              <article className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <p className="text-slate-700 italic leading-relaxed mb-6">
                  “André me ensinou o verdadeiro significado de liderança e motivação. Sua energia, entusiasmo e capacidade
                  de inspirar as pessoas são únicos. Um profissional que absorve a pressão e transforma desafios em resultados,
                  mantendo sempre um clima positivo e de equipe.”
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">Marcio Santos</p>
                  <p className="text-slate-500 text-sm">Gestão da Produção Lean / Seis Sigma</p>
                </div>
              </article>

              {/* Wilson Rafael Delavia */}
              <article className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <p className="text-slate-700 italic leading-relaxed mb-6">
                  “Profissional extremamente competente, com foco total em resultados. André possui grande experiência em gestão
                  de pessoas e processos, além de uma visão estratégica muito aguçada.”
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">Wilson Rafael Delavia</p>
                  <p className="text-slate-500 text-sm">Gestor de Processos e Pessoas</p>
                </div>
              </article>

              {/* Fernando Henrique Dias */}
              <article className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <p className="text-slate-700 italic leading-relaxed mb-6">
                  “Tive a oportunidade de atuar ao lado de André. Ele possui profundos conhecimentos em custos, qualidade e
                  sistemas flexíveis de manufatura. Excelente engenheiro e parceiro de trabalho.”
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">Fernando Henrique Dias</p>
                  <p className="text-slate-500 text-sm">Especialista em Planejamento Estratégico e Cultura Operacional</p>
                </div>
              </article>

              {/* Edgar Bergo Coroa */}
              <article className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <p className="text-slate-700 italic leading-relaxed mb-6">
                  “Tive o privilégio de trabalhar com André na IESA Equipamentos e Projetos. Um profissional sincero, líder
                  e sempre pronto para ajudar. Excelente relacionamento com todos os colegas.”
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">Edgar Bergo Coroa, MSc</p>
                  <p className="text-slate-500 text-sm">Engenheiro de Projetos Mecânicos</p>
                </div>
              </article>

              {/* Paulo Roberto dos Santos */}
              <article className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <p className="text-slate-700 italic leading-relaxed mb-6">
                  “Recomendo André Pierri por ser um profissional qualificado, ótimo orientador, conhecedor de ferramentas
                  de produção e com domínio técnico notável.”
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">Paulo Roberto dos Santos</p>
                  <p className="text-slate-500 text-sm">Mecânico Montador Pleno A / Chapeador</p>
                </div>
              </article>

              {/* Willian Correa da Silva */}
              <article className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <p className="text-slate-700 italic leading-relaxed mb-6">
                  “André sempre demonstrou responsabilidade, dedicação e competência. Excelente relacionamento com a produção
                  e domínio de diversos processos de fabricação. Recomendo sem ressalvas.”
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">Willian Corrêa da Silva</p>
                  <p className="text-slate-500 text-sm">Supervisor de Engenharia de Confiabilidade – Engefaz</p>
                </div>
              </article>
            </div>
          </div>
        </section>



        <section id="contato" className="py-20 px-6" aria-labelledby="contato-title">
          <div className="max-w-4xl mx-auto">
            <h2 id="contato-title" className="text-4xl font-bold text-slate-900 mb-4 text-center">Entre em Contato</h2>
            <p className="text-slate-600 text-center mb-12">
              Vamos conversar sobre como posso ajudar sua empresa
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulário de contato">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    placeholder="Conte-me sobre seu projeto ou desafio..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
                  aria-label="Enviar formulário de contato"
                >
                  Enviar Mensagem
                </button>
              </form>

              <address className="mt-10 pt-10 border-t border-slate-200 not-italic">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-blue-600 text-2xl mb-2" aria-hidden="true">📧</div>
                    <p className="text-sm text-slate-500 mb-1">E-mail</p>
                    <a href="mailto:apierri@uol.com.br" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors">
                      apierri@uol.com.br
                    </a>
                  </div>
                  <div>
                    <div className="text-blue-600 text-2xl mb-2" aria-hidden="true">📱</div>
                    <p className="text-sm text-slate-500 mb-1">Telefone</p>
                    <a href="tel:+5516997114630" className="text-slate-700 font-semibold hover:text-blue-600 transition-colors">
                      (16)99711-4630
                    </a>
                  </div>
                  <div>
                    <div className="text-blue-600 text-2xl mb-2" aria-hidden="true">📍</div>
                    <p className="text-sm text-slate-500 mb-1">Localização</p>
                    <p className="text-slate-700 font-semibold">Araraquara, SP</p>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}