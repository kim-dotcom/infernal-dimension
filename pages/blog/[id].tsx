import Header from '../../components/snippets/header';
import BlogId from '../../components/BlogId';
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const title: string = (process.env.title as string);

  return (
    <div>
    <Header siteTitle={title} siteExtra={'Blog ID: ' + id} />

    <BlogId entryId={id as string} />
  </div>
  );
}

export default Post