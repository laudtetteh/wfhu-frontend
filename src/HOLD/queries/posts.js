import { gql, useQuery } from '@apollo/client';

function Posts() {
  const { loading, error, data } = useQuery(gql`
    query Posts {
      posts {
        id
        name
        description
        categories {
          name
        }
      }
    }
  `);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.posts.map(post => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
}
