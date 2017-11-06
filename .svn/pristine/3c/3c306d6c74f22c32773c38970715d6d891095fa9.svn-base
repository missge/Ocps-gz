<template>
  <button @click="open2">点击打开</button>
</template>

<script>

export default {
   methods: {
      open2() {
        var text = 'Hello RSA!';
        var encrypted = this.$rsakey.encrypt(text, 'base64');
        console.log('encrypted: ', encrypted);

        var decrypted = this.$rsakey1.decrypt(encrypted, 'utf8');
        console.log('decrypted: ', decrypted);
      }
    }
  }
</script> 

<style scoped>
</style>