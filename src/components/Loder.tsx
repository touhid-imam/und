interface LoderProps {
  spinner?: boolean;
  error?: boolean;
}

function Loder({ spinner, error }: LoderProps) {
  return (
    <div className="loader">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {spinner && (
              <div className="spinner-border text-success" role="status"></div>
            )}
            {error && (
              <div className="alert alert-danger" role="alert">
                Error loading posts. Please try again later.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loder;
