import { getPostData } from '../lib/posts';

export default function Home({ post }) {
  const { data, content } = post;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

// This function runs on the server side at build time
export async function getStaticProps() {
  const post = getPostData();

  return {
    props: {
      post, // Pass the post data as a prop to the Home component
    },
  };
}
