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
            <div  style="padding-left: 10px">
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
          style="max-height: 600px;"
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
                  COLECTIE PENTRU FEMEI
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

      <!-- <div class="home_txt">
        <p class="collectio">COLECTIE pentru barbati</p>

        <div class="container-fluid" style="width: 100%">
          <h2>ATICOLE PENTRU SPORT<br />COLECTIE 2025</h2>
          <div class="home_label">
            <p class="collectio">
              „În sport, omul își reia drepturile. Recucerește disciplina,
              singura libertate dulce.” <br />
              – Pierre Drieux La Rochelle.
            </p>
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
      </div> -->
    </div>

    <div class="seller container">
      <h2 style="font-family:  Ink Free, cursive;">Lista Produselor pentru femei</h2>
    
      <div class="best-seller">
        <div class="row">
          <div v-for="(item, index) in data" :key="index" style="width: 18rem">
            <div class="card" style="width: 18rem">
              <img v-bind:src="item.imagine" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ item.titlu }}</h5>
                <p class="card-text">
                  {{ item.Descriere }}
                </p>
                <p class="card-text">{{ item.Pret }} RON</p>
                <router-link to="/produs">
                <a @click="setItem(index)" href="#" class="btn btn-primary">Vezi detalii</a>
                </router-link>
                <div class="quantity-selector" style="padding-top: 5px">
                  <button
                    id="1"
                    class="btn btn-outline-primary"
                    @click="increase(index)"
                  >
                    + <i></i>
                  </button>
                  <span id="quantity"> | {{ item.quantity }} | </span>
                  <!-- <button
                    id="2"
                    class="btn btn-outline-primary"
                    @click="decrease(index)"
                  >
                    - <i></i>
                  </button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
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
import store from "@/store";
export default {
  name: "AccesoriiFemei",
  data() {
    return {
      data: "",
      selectate: [],
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
    setItem(nr){
      this.$store.dispatch("itemset", this.data[nr]);
      


    },
    set(){
      for(var i =0 ; i< this.data.length;i++){
        this.data[i]['quantity'] = 0
      }
      this.$store.dispatch("cartzero");
      this.$store.dispatch("itemszero");
      alert("Cosul tau a fost resetat!")

    },
    checkProd() {
      try {
        const filteredData = this.data.filter((item) => item.quantity !== 0);
        console.log(filteredData);
        return filteredData;
      } catch {
        var n = [];
        return n;
      }
    },

    increase(index) {
      //   var cos = document.getElementById("cos").innerHTML
      this.$store.dispatch("increaseCart", 1);
      //   cos = parseInt(cos,10)
      //   cos = cos +1
      //   cos = String(cos)
      //   document.getElementById("cos").innerHTML = cos
      
      console.log("chek quant")
      console.log(this.data[index])
      var a = -1

      for(var i =0 ; i < store.state.items.length; i++){
        if(store.state.items[i]["titlu"] == this.data[index]['titlu']){
          console.log("INSIDEE!")
          a = i
        }

        
        

      }
      
     
      
      this.$store.dispatch("increase", [this.data[index] ,a]);

      
      
      
      
    },
    decrease(index) {
      if (this.data[index]["quantity"] == 0) {
        return;
      }
      this.$store.dispatch("increaseCart", -1);
      this.$store.dispatch("increase", this.checkProd());

      // var cos = document.getElementById("cos").innerHTML

      // cos = parseInt(cos,10)
      // cos = cos -1
      // cos = String(cos)
      // document.getElementById("cos").innerHTML = cos

      this.data[index]["quantity"] -= 1;
    },
    async take_data() {
      fetch("https://comert-electronic.onrender.com/dataFemei")
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
          this.data = JSON.parse(JSON.stringify(this.data));
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
