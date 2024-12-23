import { useState } from "react";
import usePosts from "../hooks/usePosts";
import Post from "../entities/Post";
import moment from "moment";
import PostCard from "./PostCard";
import Pagination from "./Pagination";
import PostExplorer from "./PostExplorer";
import "../assets/sass/post-list.scss";
import Loder from "./Loder";

function PostList() {
  const { data: posts = [], isLoading, isError } = usePosts();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  // Filter posts based on search input
  const filteredPosts = posts.filter((post: Post) =>
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort posts by date (newest first)
  const sortedPosts = filteredPosts.sort(
    (a, b) => moment(b.date).valueOf() - moment(a.date).valueOf()
  );

  // Pagination Logic
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const paginatedPosts = sortedPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <Loder spinner={true} />;
  }
  if (isError) {
    return <Loder error={true} />;
  }
  return (
    <section className="post-list-area py-5">
      <div className="container">
        <PostExplorer
          title="Our Latest Update"
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
        />

        <div className="row">
          {paginatedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </section>
  );
}

export default PostList;
