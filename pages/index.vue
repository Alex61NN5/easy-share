<template>
  <div>
    <GithubCorner />
    <div class="container">
      <h1 class="title">Easy Share 🚀</h1>
      <h2 class="subtitle">Generate Social Share Links</h2>
      <p class="intro-text">
        Made by
        <a
          target="_blank"
          class="twitter-link"
          href="https://twitter.com/alexginns"
        >Alex Ginns</a>
        ~ with
        <a
          target="_blank"
          class="npm-link"
          href="https://www.npmjs.com/package/easy-social-share-links"
        >easy-social-share-links</a>
      </p>
      <div class="share-cards">
        <ShareCard
          :logo="require('~/assets/logos/facebook.svg')"
          :alt="'Facebook Logo'"
          :type="'fb'"
        />
        <ShareCard
          :logo="require('~/assets/logos/twitter.svg')"
          :alt="'Twitter Logo'"
          :type="'tw'"
        />
        <ShareCard
          :logo="require('~/assets/logos/linkedin.svg')"
          :alt="'LinkedIn Logo'"
          :type="'li'"
        />
        <ShareCard :logo="require('~/assets/logos/email.svg')" :alt="'Email Logo'" :type="'em'" />
      </div>
    </div>
  </div>
</template>

<script>
import GithubCorner from "~/components/GithubCorner.vue";
import ShareCard from "~/components/ShareCard.vue";

export default {
  components: {
    GithubCorner,
    ShareCard
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0 20px;
  margin: 30px auto 30px auto;
  max-width: 650px;
}

.title {
  text-align: center;
  font-size: 3em;
}

.subtitle {
  text-align: center;
}

.intro-text {
  text-align: center;
  margin-top: 10px;
}
.twitter-link {
  color: var(--tw);
}
.npm-link {
  color: #fb3e44;
}
</style>
