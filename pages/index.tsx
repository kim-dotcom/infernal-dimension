import Image from 'next/image'
import About from '../components/About'
import Main from '../components/Main'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Header from '../components/snippets/header';

export default function Home() {
  const title: string = (process.env.title as string);
  return (
    <div>
      <Header siteTitle={title} siteExtra='' />

      <Main />
      <About />
      <Skills />
      <Services />
    </div>
  )
}
