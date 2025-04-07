<template>
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

  <div class="row" style="padding-top: 50px">
    <h1
      style="
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      "
    >
      Detalii produs
    </h1>
    <div style="padding-top: 30px"></div>

    <div class="main-content col-md-2 col-sm-2"></div>
    <div class="main-content col-md-4 col-sm-4"></div>
  </div>
  <div class="row">
    <div class="main-content col-md-1 col-sm-1"></div>
    <div class="main-content col-md-2 col-sm-2">
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="240"
        height="240"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
        />
      </svg>
    </div>
    <div class="main-content col-md-4 col-sm-4">
      <img v-bind:src="selectata.imagine" class="card-img-top" alt="..." />
    </div>
    <div class="main-content col-md-4 col-sm-4">
      <div style="padding-top: 50px"></div>

      <div class="card" style="text-align: left; align-items: normal">
        <div class="card-body">
          <h2>{{ selectata.titlu }}</h2>
          <p>{{ selectata.Descriere }}</p>
          <span>Pret : {{ selectata.Pret }} Ron</span>
          <div style="padding-top: 10px"></div>
          <b>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              />
            </svg>

            Transport gratuit la comenzi de peste 300 lei</b
          >
          <b>
            <p></p>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
              />
            </svg>

            Schimb si retur gratuit la toate comenzile</b
          >
          <b>
            <p></p>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="square"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            Suport tehnic dedicat</b
          >
          <b>
            <p></p>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z"
              />
              <path
                d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z"
              />
            </svg>

            Livrare Acasa sau la EasyBox</b
          >
        </div>
        <a @click="increase" href="#" class="btn btn-primary">Adauga in cos</a>
      </div>
    </div>
    <div style="padding-top: 50px"></div>
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
  </div>
</template>
<script>
import { mapState } from "vuex";
import store from "@/store";
export default {
  name: "DetaliiProdus",
  data() {
    return {
      data: "",
      selectata: store.state.item,
    };
  },
  mounted() {
    this.take_data();

    console.log("Hop");
  },
  methods:{
    set(){
      for(var i =0 ; i< this.data.length;i++){
        this.data[i]['quantity'] = 0
      }
      this.$store.dispatch("cartzero");
      this.$store.dispatch("itemszero");
      alert("Cosul tau a fost resetat!")

    },
    increase() {
      //   var cos = document.getElementById("cos").innerHTML
      this.$store.dispatch("increaseCart", 1);
      //   cos = parseInt(cos,10)
      //   cos = cos +1
      //   cos = String(cos)
      //   document.getElementById("cos").innerHTML = cos
      
      var a = -1
      for(var i =0 ; i < store.state.items.length; i++){
        if(store.state.items[i]["titlu"] == this.selectata['titlu']){
          console.log("INSIDEE!")
          a = i
        }

        
        

      }
      this.$store.dispatch("increase", [store.state.item,a]);
    },
    async take_data() {
      fetch("https://comert-electronic.onrender.com/data")
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
  computed: {
    ...mapState(["cart"]), // Acum, `cart` va fi disponibil în componentă
  },
};
</script>

