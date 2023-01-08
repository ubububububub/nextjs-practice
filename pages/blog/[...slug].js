import { useRouter } from "next/router";

function BlogPosts() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h2>BlogPostsPage</h2>
    </div>
  );
}

export default BlogPosts;
