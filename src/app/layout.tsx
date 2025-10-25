import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Engenharia Logística | Consultoria e Otimização de Processos',
  description: 'Consultoria especializada em logística, supply chain e engenharia de produção. Otimização de processos, redução de custos e gestão da cadeia de suprimentos em Araraquara, SP.',
  keywords: 'engenharia de produção, logística, supply chain, otimização de processos, consultoria logística, gestão de estoques, redução de custos, Araraquara, São Paulo',
  authors: [{ name: 'Engenharia Logística' }],
  creator: 'Engenharia Logística',
  publisher: 'Engenharia Logística',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seudominio.com',
    title: 'Engenharia Logística | Consultoria e Otimização',
    description: 'Soluções estratégicas em logística e engenharia de produção. Consultoria especializada em otimização de processos e redução de custos.',
    siteName: 'Engenharia Logística',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engenharia Logística | Consultoria e Otimização',
    description: 'Soluções estratégicas em logística e engenharia de produção.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'seu-codigo-google-search-console',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Engenharia Logística',
  description: 'Consultoria especializada em logística, supply chain e engenharia de produção',
  url: 'https://seudominio.com',
  telephone: '+55-00-00000-0000',
  email: 'apierri@uol.com.br',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Araraquara',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -21.7944,
    longitude: -48.1758,
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  serviceType: [
    'Consultoria Logística',
    'Otimização de Processos',
    'Gestão de Estoques',
    'Supply Chain',
    'Redução de Custos',
    'Gestão de Projetos',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Engenharia Logística',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultoria Logística',
          description: 'Diagnóstico completo da operação e otimização do fluxo logístico',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Otimização de Processos',
          description: 'Implementação de metodologias Lean e Six Sigma',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gestão de Estoques',
          description: 'Planejamento e controle de inventário',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}