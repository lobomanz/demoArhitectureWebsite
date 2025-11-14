<template>
  <img src="/images/zgrada.jpg" alt="zgrada">
  <div class="wrapper">

    <div class="contact-page">
      <div class="contact-info">
        <div class="info-content">
          <h1>Kontakt</h1>
          <h2>Nazovite nas:</h2>
          <div class="phone-numbers">
            <a :href="'tel:+385994554118'">Deni Pavić +385 99 4554 118</a>
            <a :href="'tel:+385992136280'">Vedran Vuletić +385 99 2136 280</a>
          </div>
          <h2>Naš e-mail:</h2>
          <div class="emails">
            <a :href="'mailto:demo@demo.com'">demo@demo.com</a>
            <a :href="'mailto:demo@demo.com'">demo@demo.com</a>
          </div>
          <h2>Adresa:</h2>
          <a :href="'https://maps.app.goo.gl/FLbBYHk4qaqHwy1w5'" target="_blank">
            Srebernjak 126, 10 000, Zagreb
          </a>
          <h2>Adresa ureda:</h2>
          <a :href="'https://www.google.com/maps/search/?api=1&query=Ul.+Milana+Pavelica+1b,+10000,+Zagreb'"
            target="_blank">
            Milana Pavelića 1B, 10 000, Zagreb
          </a>
        </div>
      </div>
      <div class="contact-form">
        <label for="name">Ime i prezime*</label>
        <input type="text" id="name" v-model="formData.name" />

        <label for="email">Vaš email*</label>
        <input type="email" id="email" v-model="formData.email" />

        <label for="phone">Mobitel</label>
        <input type="tel" id="phone" v-model="formData.phone" />

        <label for="message">Vaša poruka</label>
        <textarea id="message" v-model="formData.message"></textarea>

        <button @click="sendEmail">Pošalji</button>
      </div>
    </div>
    <div class="google-map">
      <iframe width="100%" height="400" frameborder="0" style="border:0" :src="mapSrc" allowfullscreen></iframe>
    </div>
  </div>

  <div class="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.9648223157096!2d16.0188304!3d45.8119629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7cc68b52cd5%3A0xdc8de2b8ee42f88!2sUl.%20Milana%20Paveli%C4%87a%201b%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1733090219416!5m2!1shr!2shr"
      width="100%" height="450" style="border:0; margin-top: 20px;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Ul.+Milana+Pavelica+1b,+10000,+Zagreb`;

const sendEmail = () => {
  if (typeof window !== 'undefined') {
    const mailtoLink = `mailto:demo@demo.com?subject=Contact from ${formData.value.name}&body=Email: ${formData.value.email}%0APhone: ${formData.value.phone}%0AMessage: ${formData.value.message}`;
    window.location.href = mailtoLink;
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;

  @include mobile {
    display: none;
  }
}

.wrapper {
  text-transform: uppercase;
  max-width: 1200px;
  margin-inline: auto;
  padding-top: 50px;

  .contact-page {
    @include desktop {
      display: flex;
      justify-content: space-evenly;
    }

    .contact-info,
    .contact-form {
      width: 100%;
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 20px;

      h1 {
        font-size: 40px;
      }

      h2 {
        font-size: 20px;
        margin-block: 15px 10px;
        padding: 0;
      }
    }

    .info-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      a {
        text-decoration: none;
        color: black;
        transition: 0.3s;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .phone-numbers,
    .emails {

      a {
        display: block;

      }
    }

    .contact-form {

      label {
        margin-top: 10px;
        max-width: 400px;
        width: 100%;
      }

      input,
      textarea {
        max-width: 400px;
        width: 100%;
        margin-top: 5px;
        padding: 15px;
      }

      textarea {
        height: 100px;
      }

      button {
        max-width: 400px;
        width: 100%;
        margin-top: 20px;
        border: none;
        background-color: black;
        color: white;
        padding-block: 20px;
        transition: 0.3s;

        &:hover {
          background-color: lightgray;
          color: black;
        }

      }
    }

  }

  .google-map {
    display: none;
    margin-top: 40px;
  }
}
</style>