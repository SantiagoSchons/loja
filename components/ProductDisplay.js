app.component('product-display', {

  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          
          >
          {{variant.id}} 
          {{lotes}}
        </div>
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          
          Add to Cart
        </button>

      </div>
    </div>
  </div>`,
  data() {
    return {
        lotes: "lotes", 
        product: 'Lotes no Céu',
        selectedVariant: 0,
        details: ['Diversos lotes com diversos tamanhos'],
        variants: [
          { id: 11, image: './assets/images/terrenos.png', quantity: 1, color: '#ff9999' },
          { id: 10, image: './assets/images/terrenos11.png', quantity: 1, color: '#99ccff' },
          { id: 9, image: './assets/images/terrenos10.png', quantity: 1, color: '#ccffcc' },
          { id: 8, image: './assets/images/terrenos9.png', quantity: 1, color: '#ffff99' },
          { id: 7, image: './assets/images/terrenos8.png', quantity: 1, color: '#d9b3ff' }
        ]
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
          this.selectedVariant = index
      }
  },
  computed: {
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      shipping() {

        return "5 almas"
      }
  }
})