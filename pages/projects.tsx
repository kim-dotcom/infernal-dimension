import ProjectList from '../components/ProjectList';
import Header from '../components/snippets/header';

export default function Projects() {
  const title: string = (process.env.title as string);
  return (
    <div>
      <Header siteTitle={title} siteExtra={'Projects'} />

      <ProjectList />
    </div>
  )
}