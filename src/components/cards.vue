<template >
  <div class="container">
    <div v-for="(row,i) in produse" :key="i" class="row my-row">
      <div v-for="(product, j) in row" :key="j" class="col-sm my-col">
        <div class="card mb-3" style="width: 18rem">
          <img :src="product.imagine" class="card-img-top size"  alt="..." />
          <div class="card-body">
            <h3 class="card-title">{{product.titlu}}</h3>
            <p class="card-text">{{product.pret}}</p>
            <h5 class="card-text">{{product.rating}}</h5>
            <a @click="ProductClicked(product)" class="btn btn-primary text-white">Spre Produs</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      produse: [
        [
          { id:"1",
            titlu: "Iphone SE2",
            pret: "399$",
            rating: "4.5/5",
            imagine:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-spgray-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795417557"
          },
          { id:"2",
            titlu: "Iphone 11 Pro Max",
            pret: "1199$",
            rating: "3.8/5",
            imagine:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-space-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953858806"
          },
          { id:"3",
            titlu: "Iphone 11 Pro",
            pret: "999$",
            rating: "4.7/5",
            imagine:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953859350"
          },
          { id:"4",
            titlu: "Iphone 11",
            pret: "699$",
            rating: "4/5",
            imagine:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704"
          },
          { id:"5",
            titlu: "Iphone XS ",
            pret: "699$",
            rating: "4.2/5",
            imagine:
              "https://s12emagst.akamaized.net/products/17060/17059870/images/res_ea9aa6c1cda56c978ec5fa7964a84eba_full.jpg"
          },
          { id:"6",
            titlu: "Iphone XR",
            pret: "599$",
            rating: "4.8/5",
            imagine:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-white-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036668"
          }
        ],
        [
          { id:"7",
            titlu: "Iphone X",
            pret: "599$",
            rating: "4/5",
            imagine:
              "https://fstudio.vteximg.com.br/arquivos/ids/639135-2000-2000/untitled-1_6_5.jpg?v=636724629213300000"
          },
          { id:"8",
            titlu: "Iphone 8",
            pret: "449$",
            rating: "4.1/5",
            imagine:
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-spgray-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795417557"
          },
          { id:"9",
            titlu: "Iphone 8 Plus",
            pret: "499$",
            rating: "3.5/5",
            imagine:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone8-plus-silver-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795419237"
          },
          { id:"10",
            titlu: "Iphone 7",
            pret: "349$",
            rating: "4.4/5",
            imagine:
              "https://s12emagst.akamaized.net/products/9113/9112300/images/res_8524ea667725200f19b7b51d0819599a_full.jpg"
          },
          { id:"11",
            titlu: "Iphone 7 Plus",
            pret: "399$",
            rating: "4/5",
            imagine:
              "https://s12emagst.akamaized.net/products/7946/7945662/images/res_6a8d4d049fddadd4514dad3c62b091c5_full.jpg"
          },
          { id:"12",
            titlu: "Iphone 6S",
            pret: "299$",
            rating: "3.8/5",
            imagine:
              "https://s12emagst.akamaized.net/products/2043/2042039/images/res_e93b547a99be92798ade765f1d7c5d02_full.jpg"
          }
        ]
      ]
    };
  },
  methods:{
    ProductClicked(product){
        this.$router.push({name:'Product', params: {id:product.id}})
    }
  }
};
</script>
<style scoped>
.size{
    height:50vh;
    width:40vh;
}
</style>