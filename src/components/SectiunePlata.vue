<template>
  <div class="container-fluid">
      <div class="row">
        <div class="sidebar col-md-2 col-sm-2">
          <div class="books_div">
            <span class="books">&#128393;</span>
          </div>
        </div>
        <div class="main-content col-md-8 col-sm-8">
          <h1 class="BigTitle text-center">Adauga student</h1>
          <div class="row justify-content-center" style="padding-bottom: 15px;  padding-top: 50px">
            <div class="card" style="padding-bottom: 25px; width: 35rem">
              <form>
                <div class="mb-3">
                  <label class="form-label" style="padding-top: 5px"
                    >Posesor Card</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Ex: Nicola Paul Ioan"
                    required
                    minlength="2"
                    autocomplete="off"
                    
                  />
                  
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Numar card</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="4242 4242 4242 4242"
                    required
                    minlength="2"
                    autocomplete="off"
                   
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Data de expirare</label
                  >
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="MM/YY"
                    required
                    minlength="2"
                    autocomplete="off"
                   
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >CVC </label
                  >
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="123"
                    required
                    minlength="2"
                    autocomplete="off"
                  
                  />
                </div>

                <!-- <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Varsta</label
                  >
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    required
                    placeholder="Varsta elevului"
                    minlength="2"
                    autocomplete="off"
                   
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Adresa de domiciliu</label
                  >
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Adresa completa"
                    required
                    minlength="2"
                    autocomplete="off"
                  
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >CNP</label
                  >
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="CNP"
                    required
                    minlength="2"
                    autocomplete="off"
                   
                  />
                </div> -->

                <button
                  @click="submitData"
                  type="submit"
                  class="btn btn-primary"
                >
                  Submit
                </button>
                <router-link to="/">
                <button
                  
                  type="submit"
                  class="btn btn-outline-primary"
                >
                  Acasa
                </button>
            </router-link>
            
              </form>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "SectiunePlata",
};
</script>
