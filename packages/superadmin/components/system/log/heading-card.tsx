const LogHeading = () => {
  return (
    <>
      <div className="card border-1 font-lg mt-3 rounded p-3">
        <div className="card-body">
          <p className="card-text">
            Have questions or need help? Get dedicated support from the BS
            Commerce team with a guaranteed response within 24 hours. Please
            find more about our premium support services
            <a
              href="#"
              className="text-primary"
              style={{ textDecoration: 'none ' }}
            >
              {' '}
              here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogHeading;
