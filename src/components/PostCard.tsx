import { formatPostDate } from "../helper/utils";
import Post from "../entities/Post";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <div className="col-sm-6 col-md-3 mb-4" key={post.id}>
      <article className="card h-100">
        <img src={post.image} className="card-img-top p-4" alt={post.author} />
        <div className="card-body">
          <h5 className="card-title">
            {post.author}
            <span className="badge badge-pill badge-primary date-badge">
              {formatPostDate(post.date)}
            </span>
          </h5>
          <p className="card-text">{post.message}</p>
        </div>
      </article>
    </div>
  );
}

export default PostCard;
