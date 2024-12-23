interface PostSearchPanel {
  title: string;
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
}

function PostExplorer({
  title,
  searchTerm,
  onSearchTermChange,
}: PostSearchPanel) {
  return (
    <div className="row mb-4">
      <div className="col-md-8 mb-4">
        <h2 className="post-title">{title}</h2>
      </div>
      <div className="col-md-4">
        <div className="search">
          <input
            type="text"
            className="form-control"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default PostExplorer;
