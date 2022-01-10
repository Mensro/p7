<template>
 
   <form id="app" @submit="checkForm" action="" method="post" novalidate="true" class="vh-50 gradient-custom ">
   
  <div class="container py-5 h-100 ">
    <div class="row d-flex justify-content-center align-items-center h-100 ">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card   shadow" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5 ">

          
              <h2 class="fw-bold mb-2 text-uppercase">SignUp</h2>
              <p class="text-50 mb-5">Please enter your login, pseudo and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="email" class="color form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="text" id="userName" class="color form-control form-control-lg" />
                <label class="form-label" for="userName">pseudo</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="password" class="color form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>


              <button class="btn btn-outline-secondary btn-lg px-5" value="submit" type="submit">Send.</button>

              

            </div>

            

          </div>
        </div>
      </div>
    </div>
  </div>
</form>
</template>

<script>




 /*  export default {
        data() {
            return {
              title: 'login Form',
              text: '',
              email: '',
              password: ''
            }
        },
        methods: {
          userSubmit() {
            console.log(this.text, this.email, this.password);
            var form = document.getElementById("form");
            form.addEventListener("submit", onSubmit);

            async function onSubmit(e){

              e.preventDefaut();
              var userName = document.getElementById("userName").value;
              var password = document.getElementById("password").value;
              var email = document.getElementById("email").value;
              

               await fetch("http://localhost:8080/signup" , {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-type" : "application/json",
                },
                body: JSON.stringify({
                  User: {
                    userName : userName,
                    password : password,
                    email : email,

                  }
                })
              }) 
            }
          }

        }
    }
*/

</script>


<style scoped>
.color{
   background:  rgba(207, 212, 215, 0.521);
}
</style>