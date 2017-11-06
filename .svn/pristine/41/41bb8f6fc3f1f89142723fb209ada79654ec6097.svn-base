<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">pageA</div>
    </div>
    
    <div>
    <router-link to="/pageB">
      pageB
    </router-link>
    <div v-for="itemss in datalist">
         <div v-for="items in itemss">
           <div v-for="item in items">
            <ul>
              <li v-for="data in item">
                <span>{{ data.name }}</span>
                <img v-bind:src="data.img">
              </li>
            </ul>
        </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'pageA',
  computed: {
    datalist () {
      console.log(this.$store.state.test01.result)
      return this.$store.state.test01.result
    }
  },
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>

