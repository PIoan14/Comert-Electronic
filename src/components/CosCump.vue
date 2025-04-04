<template>
  <div>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" >Hai la sport!</a>
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
                      >Accesorii</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
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
  <div class="container-fluid">
    <div class="row">
      <div class="sidebar col-md-2 col-sm-2"></div>
      <div class="main-content col-md-8 col-sm-8">
        <div
          class="row justify-content-center"
          style="padding-bottom: 15px; padding-top: 50px"
        >
          <div v-if="gol">
            <h1 class="BigTitle text-center" style="padding-top: 30px">
              Cosul tau este gol!
            </h1>
            <svg
              class="w-6 h-6 text-gray-800 white:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="500"
              height="500"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
          </div>
          <h1
            v-if="status"
            class="BigTitle text-center"
            style="padding-top: 30px"
          >
            Cosul tau
          </h1>
          <div style="padding-top: 25px">
            <div class="card" style="padding-bottom: 25px" v-if="status">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Produs</th>
                    <th scope="col">Cantitate</th>
                    <th scope="col">Pret/Bucata</th>
                    <th scope="col">Total produs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in cos" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.titlu }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.Pret }} RON</td>
                    <td>{{ item.Pret * item.quantity }} RON</td>
                  </tr>
                  <tr>
                    <th scope="col">Total de plata</th>
                    <th scope="col">-</th>
                    <th scope="col">-</th>
                    <th scope="col">-</th>
                    <th scope="col">{{ sum }} RON</th>
                  </tr>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">
                      <button @click="achita" class="btn btn-primary">
                        Achita
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

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
    <div class="f-design" style="padding-top: 100">
      <div class="f-design-txt container">
        <p>Design and Code by Paul Nicola</p>
      </div>
    </div>
  </footer>
</template>

<script>
//import { axios } from "axios";
import { mapState } from "vuex";
import store from "@/store";
export default {
  name: "CosCump",

  computed: {
    ...mapState(["cart"]), // Acum, `cart` va fi disponibil în componentă
  },
  mounted() {
    this.verifcaCos();
    console.log("In cos avem :");

    console.log(store.state.items);
  },
  data() {
    return {
      gol: true,
      sum: 0,
      status: true,
      cos: store.state.items,
      data: "",
    };
  },
  methods: {
    async achita() {
      try {
        const response = await fetch(
          "http://localhost:3000/payment",
          {
            method: "POST", // Metoda HTTP (POST)
            headers: {
              "Content-Type": "application/json", // Setează tipul de conținut ca JSON
            },
            body: JSON.stringify({
              cart: this.cos,
              //total: this.sum,
            }), // Corpul cererii cu datele în format JSON
          }
        );

        if (!response.ok) {
          console.log(response)
          throw new Error("A apărut o eroare la procesarea cererii.");
        }

        const data = await response.json(); // Răspunsul serverului în format JSON
        window.location.href = data.url; // Redirecționează utilizatorul către URL-ul Stripe Checkout
      } catch (error) {
        console.error("Eroare la checkout:", error);
      }
    },
    // async achita(){
    //   console.log(axios);
    //   try {
    //     const response = await axios.post("http://localhost:3000/create-checkout-session", {
    //       cart: this.cos,
    //       total: this.sum,
    //     });

    //     window.location.href = response.data.url; // Redirecționează utilizatorul către Stripe Checkout
    //   } catch (error) {
    //     console.error("Eroare la checkout:", error);
    //   }

    // },
    set() {
      for (var i = 0; i < this.data.length; i++) {
        this.data[i]["quantity"] = 0;
      }
      this.$store.dispatch("cartzero");
      this.$store.dispatch("itemszero");
      alert("Cosul tau a fost resetat!");
      window.location.reload();
    },
    verifcaCos() {
      if (this.cos.length == 0) {
        this.status = false;
        this.gol = true;
      } else {
        this.gol = false;
        this.status = true;
        for (var i = 0; i < this.cos.length; i++) {
          this.sum += this.cos[i]["quantity"] * this.cos[i]["Pret"];
        }
        this.sum = this.sum.toFixed(2)
      }
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
