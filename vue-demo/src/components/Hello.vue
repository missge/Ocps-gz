<template>
  <button @click="open2">点击打开</button>
</template>

<script>

export default {
   methods: {
      open2() {
        // this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   alert('sure');
        // }).catch(() => {
        //   alert('cancel');         
        // });

        var text = 'Hello RSA!';
        var encrypted = this.$rsakey.encrypt(text, 'base64');
        console.log('encrypted: ', encrypted);
        // var decrypted = this.$rsakey.decryptPublic(encrypted, 'utf8');
        // console.log('decrypted: ', decrypted);
        // var keyData = '-----BEGIN RSA PRIVATE KEY-----\n'+
        //               'MIIBOQIBAAJAVY6quuzCwyOWzymJ7C4zXjeV/232wt2ZgJZ1kHzjI73wnhQ3WQcL\n'+
        //               'DFCSoi2lPUW8/zspk0qWvPdtp6Jg5Lu7hwIDAQABAkBEws9mQahZ6r1mq2zEm3D/\n'+
        //               'VM9BpV//xtd6p/G+eRCYBT2qshGx42ucdgZCYJptFoW+HEx/jtzWe74yK6jGIkWJ\n'+
        //               'AiEAoNAMsPqwWwTyjDZCo9iKvfIQvd3MWnmtFmjiHoPtjx0CIQCIMypAEEkZuQUi\n'+
        //               'pMoreJrOlLJWdc0bfhzNAJjxsTv/8wIgQG0ZqI3GubBxu9rBOAM5EoA4VNjXVigJ\n'+
        //               'QEEk1jTkp8ECIQCHhsoq90mWM/p9L5cQzLDWkTYoPI49Ji+Iemi2T5MRqwIgQl07\n'+
        //               'Es+KCn25OKXR/FJ5fu6A6A+MptABL3r8SEjlpLc=\n'+
        //               '-----END RSA PRIVATE KEY-----';
        // this.$rsakey.importKey(keyData, 'pkcs8');
        // var publicDer = this.$rsakey.exportKey('pkcs8-public-der');
        // var privateDer = this.$rsakey.exportKey('pkcs1-der');

        // this.$rsakey.exportKey()

      }
    }
  }
</script> 

<style scoped>
</style>