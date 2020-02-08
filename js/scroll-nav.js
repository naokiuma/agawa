
new Vue({
    el:'#scroll-nav',
    data:{
        // タイトルの座標を保持
            targetRect: 0,
            //fixStyle: {},
            isActive:false

        },
        mounted() {
          window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
          window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
          handleScroll() {
            // タイトルを取得
            const title = document.querySelector(`.js-scroll`);
            // タイトルの座標を取得
            
            const rect = title.getBoundingClientRect().top;
            //console.log(rect);
            // data()のtargetRectを更新
            this.targetRect = rect;
            // タイトルの座標がTOPから15px以上になったら隠す
            if (this.targetRect < -15) {
                //console.log("隠す！");
                this.isActive = true;
               // this.$set(this.fixStyle, 'position', 'fixed');

            } else {
              this.isActive = false;
            }
          },
          clear(){
            this.isActive = false;
          }
        }
    })
