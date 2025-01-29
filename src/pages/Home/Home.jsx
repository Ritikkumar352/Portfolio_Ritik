import "./Home.css";

function Home() {
  return (
    <>
      <div className="main">
        <div className="introDiv">
          <div className="intro">
            <h1>
              Intro Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis dolorum voluptate itaque ipsum accusantium
              consequuntur! Unde minus totam possimus et quasi aperiam omnis ex,
              in eos dolore quod, iste reiciendis tenetur aliquam, corrupti
              doloribus provident rem. Inventore commodi a sed optio, id animi
              voluptatum molestiae, sit accusamus, sequi consequuntur fugiat.
            </h1>
            <h1>Intro </h1>
          </div>
          <div className="imgDiv">
            {/* <h1>ritik photo</h1> */}
            {/* <h1>Pic Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem aperiam provident doloribus dolore. Debitis error consequatur, magnam fugit, quasi laboriosam, possimus unde sed doloremque tempore tenetur natus qui quo. Suscipit illum fugit est dolorem itaque, laudantium sunt delectus unde, veniam nesciunt eligendi, voluptatibus a fuga iure ullam nobis voluptatem recusandae.</h1> */}
            <img src="public/Ritik.jpg" alt="my lit pic" className="image" />
            {/* <img src="" alt="aonf" /> */}

            {/* <div className="buttons">
              <div className="btn1">
                <button>click me</button>
              </div>

              <div className="btn2">
                <button>click me again</button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="nameDiv">
          <h1 className="name">Ritik Kumar</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
