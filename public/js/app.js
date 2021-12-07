class ProductList extends React.Component {
  render() {
    const product = Seed.products[0];
    return (
      <div className="ui unstackable items">
        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          producImageUrl={product.producImageUrl}
        />
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src="images/products/image-aqua.png"></img>
        </div>
        <div className="middle aligned content">
          <div className="description">
            <a>Fort Knight</a>
            <p>Authentic renaissance actor, delivered in just two week's</p>
          </div>
          <div>
            <span>Submitted by:</span>
            <img
              className="ui avatar image"
              src="images/avatars/daniel.jpg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ProductList />, document.getElementById("content"));
