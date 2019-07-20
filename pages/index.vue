<template>
  <div>
    <GithubCorner />
    <div class="container">
      <h1 class="title">Easy Share 🚀</h1>
      <p class="intro-text">
        Made by 
        <a target="_blank" class="twitter-link" href="https://twitter.com/alexginns">
          Alex Ginns
        </a> 
        ~ with 
        <a target="_blank" class="npm-link" href="https://www.npmjs.com/package/easy-social-share-links">
          easy-social-sharelinks
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import GithubCorner from '~/components/GithubCorner.vue';

export default {
  components: {
    GithubCorner
  }
}
</script>

<style lang="scss" scoped>
.intro-text{
  text-align: center;
  margin-top: 10px;
}
.twitter-link {
  color: #1DA1F2;
}
.npm-link {
  color: #fb3e44;
}
</style>
