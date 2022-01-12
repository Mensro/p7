<template>
    <form class="container py-5 h-100">
  <div class="row d-flex justify-content-center align-items-center h-100 ">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="your@currentmail.com">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="******">
    </div>
  </div>
  
  
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputUserName">pseudo</label>
      <input type="text" class="form-control" id="inputUserName" placeholder="current_username">
    </div>
    
  
  </div>
  <div class="form-group d-flex">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="d-flex justify-content-between">
  <button type="submit" class="btn btn-primary">confirm modif ?</button>
  <button type="submit" class="btn btn-danger">delete this account</button>
  </div>
</form>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>