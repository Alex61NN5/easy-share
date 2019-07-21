<template>
    <div class="share-card">
        <div class="share-card__link-container">
            <img class="share-card__logo" :src="logo" :alt="alt">
            <input :class="type" class="share-card__input" type="text" placeholder="// link" />
        </div>
        <div v-if="type === 'tw' || type === 'em'" class="share-card__extra-text">
            <textarea :class="type" placeholder="// message"></textarea>
        </div>
        <div class="share-card__link-container">
            <input disabled :class="type" class="code-block" placeholder="// result" />
            <button :class="type" class="share-card__test-btn">TEST</button>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>
.share-card{
    margin-top: 60px;
    &__link-container{
        display: flex;
        align-items: center;
        &:nth-child(2) {
            margin-top: 20px;
        }
    }
    &__logo {
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }
    &__input {
        height: 50px;
        border-radius: 4px;
        font-size: 1.3em;
        padding: 0 15px;
        width: 100%;
        &.fb{
            border: 4px solid var(--fb-o);
            &:focus{
                border: 4px solid var(--fb);
                outline: none;
            }
        }
        &.tw{
            border: 4px solid var(--tw-o);
            &:focus{
                border: 4px solid var(--tw);
                outline: none;
            } 
        }
        &.li{
            border: 4px solid var(--li-o);
            &:focus{
                border: 4px solid var(--li);
                outline: none;
            } 
        }
        &.em{
            border: 4px solid var(--em-o);
            &:focus{
                border: 4px solid var(--em);
                outline: none;
            } 
        }
    }
    &__extra-text{
        & textarea{
            height: 100px;
            border-radius: 4px;
            resize: none;
            width: 100%;
            margin: 20px 0;
            font-size: 1.3em;
            padding: 10px 15px;
            font-family: 'Ubuntu Mono', monospace;
            &.tw{
                border: 4px solid var(--tw-o);
                &:focus{
                    border: 4px solid var(--tw);
                    outline: none;
                } 
            }
            &.em{
                border: 4px solid var(--em-o);
                &:focus{
                    border: 4px solid var(--em);
                    outline: none;
                } 
            }
        }
    }
    &__test-btn{
        height: 50px;
        border-radius: 4px;
        color: #fff;
        margin-left: 20px;
        font-size: 1.3em;
        font-family: 'Ubuntu Mono', monospace;
        padding: 0 20px;
        border: none;
        &.fb{
            background: var(--fb);
        }
        &.tw{
            background: var(--tw);
        }
        &.li{
            background: var(--li);
        }
        &.em{
            background: var(--em);
        }
    }
}

.code-block {
    align-items: center;
    background: #282c35;
    border-radius: 4px;
    color: white;
    display: flex;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 1.3em;
    height: 50px;
    padding: 0 15px;
    width: 100%;
    &:focus{
        outline: none;
    }
    &.fb {
        border: 4px solid var(--fb);
    }
    &.tw {
        border: 4px solid var(--tw);
    }
    &.li {
        border: 4px solid var(--li);
    }
}
</style>

