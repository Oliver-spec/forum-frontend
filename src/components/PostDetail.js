function PostDetail({ post }) {
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.authorName}</div>
      <div>{post.content}</div>
    </div>
  );
}

export default PostDetail;
