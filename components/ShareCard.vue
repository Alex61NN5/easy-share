<template>
  <div class="share-card" :class="type">
    <div class="share-card__link-container">
      <img class="share-card__logo" :src="logo" :alt="alt" />
      <input
        @input="getLink"
        v-model="link"
        class="share-card__input"
        type="text"
        placeholder="// link"
      />
    </div>
    <div v-if="type === 'tw' || type === 'em'" class="share-card__extra-text">
      <input
        v-model="text"
        @input="getLink"
        v-if="type === 'em'"
        class="share-card__input subject"
        type="text"
        placeholder="// subject"
      />
      <textarea v-if="type === 'em'" v-model="emailBody" @input="getLink" :placeholder="'// body'"></textarea>
      <textarea v-if="type === 'tw'" v-model="text" @input="getLink" :placeholder="'// message'"></textarea>
    </div>
    <div class="share-card__link-container">
      <input
        id="result"
        class="code-block"
        placeholder="// result"
        :value="link ? result : ''"
        @click="copyLink()"
      />
      <button :disabled="!result" :class="{disabled: !result}" class="share-card__test-btn">
        <a :href="result" target="_blank">TEST</a>
      </button>
    </div>
  </div>
</template>

<script>
import shareLink from "easy-social-share-links";

export default {
  props: {
    logo: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      emailBody: null,
      hasCopied: false,
      link: null,
      result: null,
      text: null
    };
  },
  methods: {
    getLink() {
      this.hasCopied = false;
      this.result = this.link
        ? shareLink(this.type, this.link, this.text, this.emailBody)
        : null;
    },
    copyLink() {
      if (process.client) {
        const res = document.querySelector("#result");
        if (!this.hasCopied && res.value) {
          const value = res.value;
          res.select();
          document.execCommand("copy");
          res.value = "Copied! 🙌";
          setTimeout(() => {
            res.value = value;
          }, 1000);
          res.blur();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin cardType($color, $colorO) {
  .share-card {
    &__input {
      border: 4px solid $colorO;
      &:focus {
        border: 4px solid $color;
        outline: none;
      }
    }
    &__extra-text {
      & textarea {
        border: 4px solid $colorO;
        &:focus {
          border: 4px solid $color;
          outline: none;
        }
      }
    }
    &__test-btn {
      background: $color;
    }
  }
  .code-block {
    border: 4px solid $color;
  }
}
.share-card {
  margin-top: 60px;
  &.fb {
    @include cardType(var(--fb), var(--fb-o));
  }
  &.tw {
    @include cardType(var(--tw), var(--tw-o));
  }
  &.li {
    @include cardType(var(--li), var(--li-o));
  }
  &.em {
    @include cardType(var(--em), var(--em-o));
  }
  &__link-container {
    align-items: center;
    display: flex;
    &:nth-child(2) {
      margin-top: 20px;
    }
  }
  &__logo {
    height: 50px;
    margin-right: 20px;
    width: 50px;
  }
  &__input {
    border-radius: 4px;
    font-size: 1.3em;
    height: 50px;
    padding: 0 15px;
    width: 100%;
    &.subject {
      margin-top: 20px;
    }
  }
  &__extra-text {
    & textarea {
      border-radius: 4px;
      font-family: "Ubuntu Mono", monospace;
      font-size: 1.3em;
      height: 100px;
      margin: 20px 0;
      padding: 10px 15px;
      resize: none;
      width: 100%;
    }
  }
  &__test-btn {
    border-radius: 4px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-family: "Ubuntu Mono", monospace;
    font-size: 1.3em;
    height: 50px;
    margin-left: 20px;
    &.disabled {
      cursor: auto;
      opacity: 0.6;
    }
    & a {
      color: white;
      height: 50px;
      padding: 0 20px;
      text-decoration: none;
    }
  }
}

.code-block {
  align-items: center;
  background: #282c35;
  border-radius: 4px;
  color: white;
  display: flex;
  font-family: "Ubuntu Mono", monospace;
  font-size: 1.3em;
  height: 50px;
  padding: 0 15px;
  width: 100%;
  &:focus {
    outline: none;
  }
}
</style>

