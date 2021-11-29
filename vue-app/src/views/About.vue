<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
  </div>
</template>
<script>
export default {
  data:() => ({

    items: [{message: "toto"},{message: "tata"}]
  })
}
</script>
