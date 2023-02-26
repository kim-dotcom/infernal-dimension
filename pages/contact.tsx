import ContactForm from '../components/ContactForm';
import Header from '../components/snippets/header';

export default function Contact() {
  const title: string = (process.env.title as string);
  return (
    <div>
      <Header siteTitle={title} siteExtra={'Contact'} />

      <ContactForm />
    </div>
  )
}