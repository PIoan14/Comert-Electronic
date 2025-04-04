<template>
  <div>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Hai la sport!</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Optiuni
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link class="r-link" to="/">Acasa</router-link>
                  </li>
                  <li>
                    <router-link class="r-link" to="/Barbati"
                      >Barbati</router-link
                    >
                  </li>
                  <li>
                    <router-link class="r-link" to="/Femei">Femei</router-link>
                  </li>
                  <li>
                    <router-link class="r-link" to="/Universale"
                      >Universale</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <router-link class="r-link" to="/cos">
              <svg
                class="w-6 h-6 text-gray-800 white:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
            </router-link>
            <span id="cos" style="color: wheat">{{ cart }}</span>
            <div style="padding-left: 10px">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                @click="set"
              >
                <path
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <section id="home">
    <div class="home_page">
      <div class="home_img">
        <img
          class=""
          src="./i2.jpeg"
          alt="img "
          style="max-height: 600px; image-rendering: high-quality"
        />
      </div>

      <div class="home_txt">
        <div class="container-fluid" style="width: 100%">
          <div class="home_label">
            <div class="row">
              <div class="main-content col-md-8 col-sm-8">
                <h3
                  class="collectio"
                  style="color: red; font-size: 15px; font-weight: bold"
                >
                  COLECTIE CUSTOMIZATA
                </h3>
                <div style="padding-top: 20px"></div>
                <h3 class="header3" style="font-size: 35px; font-weight: bold">
                  ATICOLE PENTRU SPORT, COLECTIE 2025
                </h3>
                <div style="padding-top: 40px"></div>

                <h3 style="font-size: 15px">
                  „În sport, omul își reia drepturile. Recucerește disciplina,
                  singura libertate dulce.” <br />
                  – Pierre Drieux La Rochelle.
                </h3>
              </div>
              <!-- <div class="main-content col-md-4 col-sm-4">
                <img
          class=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFGBlhY65uRqD6YGWMPoCO-9wtTtaivn-jA&s"
          alt="img "
          style="max-height: 100%; image-rendering: high-quality; "
        />

              </div> -->
              <div class="row"></div>
            </div>
            <div class="row"></div>
          </div>
        </div>

        <button>
          <a href="#sellers">SHOP NOW</a><i class="bx bx-right-arrow-alt"></i>
        </button>

        <div class="home_social_icons">
          <a href="#"><i class="bx bxl-facebook"></i></a>
          <a href="#"><i class="bx bxl-twitter"></i></a>
          <a href="#"><i class="bx bxl-pinterest"></i></a>
          <a href="#"><i class="bx bxl-instagram"></i></a>
        </div>
      </div>
    </div>
  </section>
  

  <section id="collection">
    <div class="collections container">
      <div class="content">
        <img
          src="https://media.istockphoto.com/id/1420515189/ro/fotografie/exerci%C8%9Bii-fizice-antrenamente-%C8%99i-antrenamente-cu-un-om-s%C4%83n%C4%83tos-care-se-antreneaz%C4%83-pentru.jpg?s=612x612&w=0&k=20&c=D41q_t7tDvAQVh68DgKvOTgA8H5SXxnmLksOsZRMhMo="
          alt="img"
        />
        <div class="img-content">
          <p>Articole pentru barbati</p>
          <router-link to="/Barbati">
            <button><a href="#sellers">SHOP NOW</a></button>
          </router-link>
        </div>
      </div>
      <div class="content2">
        <img
          src="https://media.newyorker.com/photos/5d323dcb58d95300082987d3/master/pass/SundayReading-Primary.jpg"
          alt="img"
        />
        <div class="img-content2">
          <p>Articole pentru femei</p>
          <router-link to="/Femei">
            <button><a href="#sellers">SHOP NOW</a></button>
          </router-link>
        </div>
      </div>
      <div class="content3">
        <img
          src="https://static.glami.ro/img/800x800bt/445458959-jordan-minge-playground-2-0-8p-footballs-barbati-accesorii-echipament-sport-j1008255049-multicolor.jpg"
          alt="img"
        />
        <div class="img-content3">
          <router-link to="/Universale">
            <p>Accessories</p>
            <button><a href="#sellers">SHOP NOW</a></button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <section id="sellers">
    <div class="seller container">
      <h2 style="font-family:  Ink Free, cursive;">O parte din stoc</h2>
      
      <div class="best-seller">
        <div class="best-p1">
          <img
            src="https://s13emagst.akamaized.net/products/44188/44187107/images/res_5c6b2892fccf44296a868150e69a082c.jpg"
            alt="img"
          />
          <div class="best-p1-txt">
            <div class="name-of-p">
              <p>Tricou Puma Orange</p>
            </div>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
              <i class="bx bx-star"></i>
            </div>
            <div class="price">
              {{ Haus }}

              <div class="colors">
                <i class="bx bxs-circle red"></i>
                <i class="bx bxs-circle blue"></i>
                <i class="bx bxs-circle white"></i>
              </div>
            </div>
            <div class="buy-now">
              <button>
                <router-link to="/Barbati">
                  <a href="https://codepen.io/sanketbodke/full/mdprZOq"
                    >Vezi Sectiunea barbati</a
                  >
                </router-link>
              </button>
            </div>
            <!-- <div class="add-cart">
                            <button>Add To Cart</button>
                        </div> -->
          </div>
        </div>
        <div class="best-p1">
          <img
            src="data:image/jpeg;base64,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"
            alt="img"
          />
          <div class="best-p1-txt">
            <div class="name-of-p">
              <p>Tricou Zeus</p>
            </div>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
              <i class="bx bx-star"></i>
              <i class="bx bx-star"></i>
            </div>
            <div class="price">
              <div class="colors">
                <i class="bx bxs-circle green"></i>
                <i class="bx bxs-circle grey"></i>
                <i class="bx bxs-circle brown"></i>
              </div>
            </div>
            <div class="buy-now">
              <router-link to="/Universale">
              <button>
                <a href="https://codepen.io/sanketbodke/full/mdprZOq"
                  >Sectiunea de universale</a
                >
              </button></router-link>
            </div>
          </div>
        </div>
        <div class="best-p1">
          <img
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSvi6eidbTLfmLQSXjMRdrhX99wK5IW6bm7X-Y3BBlD3zKL13nR-qnecrs5_k2IjmhfIH2Z__891tLnEtaYyknc_yeliIdfQgIKTy46O8ihj8pMUoioPA3Ncu2-8lAr&usqp=CAc"
            alt="img"
          />
          <div class="best-p1-txt">
            <div class="name-of-p">
              <p>Tricou Multicolor Romania</p>
            </div>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
            </div>
            <div class="price">
              <div class="colors">
                <i class="bx bxs-circle brown"></i>
                <i class="bx bxs-circle green"></i>
                <i class="bx bxs-circle blue"></i>
              </div>
            </div>
            <div class="buy-now">
              <router-link to="/Barbati">
                <button>
                  <a href="https://codepen.io/sanketbodke/full/mdprZOq"
                    >Vezi sectiune Barbati</a
                  >
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="best-p1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVods39_w0DuoJ_RXySeSpZ1IeK5pa3pUp7A&s"
            alt="img"
          />
          <div class="best-p1-txt">
            <div class="name-of-p">
              <p>Tricou Simplu Dama</p>
            </div>
            <div class="rating">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </div>
            <div class="price">
              <div class="colors">
                <i class="bx bxs-circle red"></i>
                <i class="bx bxs-circle grey"></i>
                <i class="bx bxs-circle blue"></i>
              </div>
            </div>
            <div class="buy-now">
              <router-link to="/Femei">
              <button>
                <a href="https://codepen.io/sanketbodke/full/mdprZOq"
                  >Vezi sectiunea Femei</a
                >
              </button></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="seller container">
      <h2 style="font-family:  Ink Free, cursive;">Alatura-te starurilor</h2>
      
      <div class="best-seller">
        <div class="card" style="width: 18rem">
          <img
            src="data:image/jpeg;base64,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"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Cristiano Ronaldo</h5>
            <p class="card-text">
              Cristiano Ronaldo este unul dintre cei mai mari fotbaliști din istorie, de cinci ori câștigător al Balonului de Aur și golgheter all-time al Ligii Campionilor.
            </p>
           
            <a href="https://www.cristianoronaldo.com/#cr7" class="btn btn-primary">Viziteaza</a>
        
          </div>
        </div>

        <!-- <div class="best-p1">
            <img src="https://i.postimg.cc/fbnB2yfj/na1.png" alt="img" />
            <div class="best-p1-txt">
              <div class="name-of-p">
                <p>PS England T-Shirt</p>
              </div>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
              <div class="price">
                &dollar;10.23
                <div class="colors">
                  <i class="bx bxs-circle blank"></i>
                  <i class="bx bxs-circle blue"></i>
                  <i class="bx bxs-circle brown"></i>
                </div>
              </div>
              <div class="buy-now">
                <button>
                  <a href="https://codepen.io/sanketbodke/full/mdprZOq"
                    >Buy Now</a
                  >
                </button>
              </div>
            </div>
          </div> -->
        <div class="card" style="width: 18rem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2enzgkWMqCQnQQ_QhD8f9MEVD89-t3i3Jjg&s"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Serena Williams</h5>
            <p class="card-text">
               Este una dintre cele mai mari jucătoare de tenis din istorie. Cu o longevitate remarcabilă, a fost un lider pe teren și rămâne o adevărată legendă a sportului.
            </p>
           
            <a href="https://www.serenawilliams.com/" class="btn btn-primary">Viziteaza</a>
         
          </div>
        </div>
        <!-- <div class="best-p1">
            <img src="https://i.postimg.cc/zD02zJq8/na2.png" alt="img" />
            <div class="best-p1-txt">
              <div class="name-of-p">
                <p>PS England Bag</p>
              </div>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
                <i class="bx bx-star"></i>
              </div>
              <div class="price">
                &dollar;09.28
                <div class="colors">
                  <i class="bx bxs-circle brown"></i>
                  <i class="bx bxs-circle red"></i>
                  <i class="bx bxs-circle green"></i>
                </div>
              </div>
              <div class="buy-now">
                <button>
                  <a href="https://codepen.io/sanketbodke/full/mdprZOq"
                    >Buy Now</a
                  >
                </button>
              </div>
            </div>
          </div> -->
        <div class="card" style="width: 18rem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdkY9xR7akIUWOTfDj0M1jYZuGFqs_k_bsw&s"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">LeBron James</h5>
            <p class="card-text">
              LeBron James este o legendă a baschetului american, fiind de patru ori campion NBA și cel mai bun marcator din istoria ligii.Un adevarat reprezentant al longevitatii
            </p>
           
            <a href="https://www.lebronjames.com/" class="btn btn-primary">Viziteaza</a>
    
           
          </div>
        </div>
        <!-- <div class="best-p1">
            <img
              src="https://i.postimg.cc/Dfj5VBcz/sunglasses1.jpg"
              alt="img"
            />
            <div class="best-p1-txt">
              <div class="name-of-p">
                <p>PS England Sunglass</p>
              </div>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
              <div class="price">
                &dollar;06.24
                <div class="colors">
                  <i class="bx bxs-circle grey"></i>
                  <i class="bx bxs-circle blank"></i>
                  <i class="bx bxs-circle blank"></i>
                </div>
              </div>
              <div class="buy-now">
                <button>
                  <a href="https://codepen.io/sanketbodke/full/mdprZOq"
                    >Buy Now</a
                  >
                </button>
              </div>
            </div>
          </div> -->
        <div class="card" style="width: 18rem">
          <img
            src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTtfUikMVxopdlEYtGvpW0T0HseTSjQHk7w&s"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Cristina Neagu</h5>
            <p class="card-text">
              Cristina Neagu este cea mai valoroasă handbalistă română, de patru ori desemnată cea mai bună jucătoare a lumii, record absolut în handbal.
            </p>
            
            <a href="https://cristina-neagu.ro//" class="btn btn-primary">Viziteaza</a>
         
          </div>
        </div>
        <!-- <div class="best-p1">
            <img src="https://i.postimg.cc/FszW12Kc/na4.png" alt="img" />
            <div class="best-p1-txt">
              <div class="name-of-p">
                <p>PS England Shoes</p>
              </div>
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
              <div class="price">
                &dollar;43.67
                <div class="colors">
                  <i class="bx bxs-circle grey"></i>
                  <i class="bx bxs-circle red"></i>
                  <i class="bx bxs-circle blue"></i>
                </div>
              </div>
              <div class="buy-now">
                <button>
                  <a href="https://codepen.io/sanketbodke/full/mdprZOq"
                    >Buy Now</a
                  >
                </button>
              </div>
            </div>
          </div> -->
      </div>
    </div>
  </section>

  <footer>
    <div class="footer-container container">
      <div class="content_1">
        <p>
          Se acceepta plata cu orice tip de card.<br />LIVRARE GRATUITA LA
          DOMICILIU<br />
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
      <div class="content_2">
        <h4>SHOPPING</h4>
        <a href="#sellers">Clothing Store</a>
        <a href="#sellers">Trending Shoes</a>
        <a href="#sellers">Accessories</a>
        <a href="#sellers">Sale</a>
      </div>
      <!-- <div class="content_3">
          <h4>SHOPPING</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="https://payment-method-sb.netlify.app/" target="_blank"
            >Payment Method</a
          >
          <a href="https://delivery-status-sb.netlify.app/" target="_blank"
            >Delivery</a
          >
          <a href="https://codepen.io/sandeshbodake/full/Jexxrv" target="_blank"
            >Return and Exchange</a
          >
        </div> -->
      <div class="content_4">
        <h4>NEWLETTER</h4>
        <p>
          Be the first to know about new<br />arrivals, look books, sales &
          promos!
        </p>

        <hr />
      </div>
    </div>
    <div class="f-design">
      <div class="f-design-txt container">
        <p>Design and Code by Paul Nicola</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomePreview",
  data() {
    return {
      data: "",
      pret: 0,
    };
  },
  components: {},
  mounted() {
    this.take_data();
    console.log("Hop");
  },
  computed: {
    ...mapState(["cart"]), // Acum, `cart` va fi disponibil în componentă
  },
  methods: {
    set() {
      this.$store.dispatch("cartzero");
      this.$store.dispatch("itemszero");
      alert("Cosul tau a fost resetat!");
    },
    async take_data() {
      fetch("http://localhost:3000/data")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const rez = response.json();
          console.log("here we are");

          return rez;
        })
        .then((data) => {
          this.data = data;
          data.forEach((item) => {
            item.quantity = 0; // Adăugăm cheia 'quantity' cu valoarea 0
          });
          console.log(this.data);

          //console.log(this.data[0].Descriere)
          this.pret = this.data[0].Pret;
          //this.data = JSON.parse(JSON.stringify(this.data));
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
