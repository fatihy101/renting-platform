<template>
   <v-footer
      light
      padless >
      <v-card
      light
        color="secondary"
        flat
        tile
        class="text-center flex"
      >

      <v-card-text id="footer-text">
        {{ footer_text }}
      </v-card-text>

      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <p class="mute-text-footer">Copyright © {{ new Date().getFullYear() }} Enstrurent - All Rights Reserved.</p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    footer_text: 'Eğer enstrümanlarınızı kiralatmak isteyen bir firmaysanız bize ulaşın!',
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>

<style lang="scss" scoped>
  .mute-text-footer{
    color: #3B3740;
    display: inline;
    font-size: 14px;
  }
  #footer-text{
    font-family: sans-serif;
    font-size: 18px;
  }
</style>
