

const Category = ({category}) => {
    const {image_url,name,published_date,author} = category || {}
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{author.name}!</h2>
    <p>{author.published_date}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Category;