import Header from '../../components/snippets/header';
import BlogMain from '../../components/BlogMain';

export default function Blog() {
  const title: string = (process.env.title as string);
  return (
    <div>
      <Header siteTitle={title} siteExtra={'Blog'} />

      <BlogMain />
    </div>
  )
}