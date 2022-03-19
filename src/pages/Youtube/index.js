const Youtube = () => {
  return (
    <section class="row container-fluid">
      <div class="col-md-2 border-right">
        <div class="m-5">
          <img
            src="https://1000marcas.net/wp-content/uploads/2020/02/YouTube-logo.png"
            class="img-fluid img-logo"
            alt="logo"
          />
          <div class="mt-5">
            <h6>MENU</h6>
            <ul>
              <li>
                <a href="">
                  <i class="fa-solid fa-house"></i>&nbsp;Home
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-solid fa-fire"></i>&nbsp;Trending
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-youtube"></i>&nbsp;Subscriptions
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-solid fa-podcast"></i>&nbsp;Live
                </a>
              </li>
            </ul>
            <h6 class="mt-5">LIBRARY</h6>
            <ul>
              <li>
                <a href="">
                  <i class="fa-solid fa-clock"></i>&nbsp;History
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-solid fa-barcode"></i>&nbsp;Queue
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-solid fa-heart"></i>&nbsp;Likes
                </a>
              </li>
            </ul>

            <h6 class="mt-5">EXTRA</h6>
            <ul>
              <li>
                <a href="">
                  <i class="fa-solid fa-circle-question"></i>&nbsp;Settings
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-solid fa-gear"></i>&nbsp;Help
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-solid fa-comments"></i>&nbsp;Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-10">
        <div class="row m-5">
          <div class="col-md-12">
            <div class="row d-flex align-items-center">
              <div class="col-md-6">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div class="col-md-6 d-flex justify-content-end">
                <img
                  src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png"
                  class="img-fluid img-profile"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div id="container-videos"></div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
