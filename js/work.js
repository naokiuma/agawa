var workComp = {
    template:`
    <div class="c-work__box">
        <div class="c-work__start">
            <button v-on:click="choice1">建築</button>
            <button v-on:click="choice2">内装</button>
        </div>

        <div class="c-work__example__wrapper" v-if="work == '1'">
            <div class="c-work__image">
                <div class="c-work__group c-work__target">
                    <img v-on:click="showDetail(images.big,about.apartTitle,about.apartDesc)" :src="images.big" alt="大きな家">
                    <span>マンション/アパート</span>
                </div>
                <div class="c-work__group c-work__target">
                    <img v-on:click="showDetail(images.small,about.smallTitle,about.smallDesc)" :src="images.small" alt="小さな家">
                    <span>一軒家</span>
                </div>
                <div class="c-work__group c-work__target">
                    <img v-on:click="showDetail(images.wet,about.wetTitle,about.wetDesc)"　:src="images.wet" alt="雨の家">
                    <span>一軒家-2</span>
                </div>
            </div>
        </div>
        <div class="c-work__example__wrapper" v-if="work == '2'">
            <div class="c-work__image">
                <div class="c-work__group c-work__target">
                    <img v-on:click="showDetail(images.book,about.bookTitle,about.bookDesc)" :src="images.book" alt="書斎">
                    <span>インテリア/書斎etc</span>
                </div>
                <div class="c-work__group c-work__target">
                    <img v-on:click="showDetail(images.kitchen,about.kitchenTitle,about.kitchenDesc)" :src="images.kitchen" alt="キッチン">
                    <span>キッチン</span>
                </div>
                <div class="c-work__group c-work__target">
                    <img v-on:click="showDetail(images.living,about.livingTitle,about.livingDesc)":src="images.living" alt="リビング">
                    <span>リビングルーム</span>
                </div>
            </div>
        </div>



        <!--ポップアップコンテンツ-->
        <transition name="fade">
        <div class="c-work__popup" v-show="popup" >
        <h3>{{popupTitle}}</h3>
        <p>{{popupDesc}}</p>
        <img :src="popupImg">
        </div>
        </transition>

        <div v-bind:class="{u_overlay:popup}" v-on:click="clear">
        </div>
    </div>
    `,
    data:function(){
        return{
            work:1,
            popup:false,
            popupTitle:"",
            popupDesc:"",
            popupImg:"",
            images:{
                big:'./image/out/bighome.jpg',
                small:'./image/out/smallhome.jpg',
                wet:'./image/out/wethome.jpg',
                book:'./image/in/bookroom.jpg',
                kitchen:'./image/in/kitchen.jpg',
                living:'./image/in/living.jpg'
            },
            about:{
                apartTitle:'マンション/アパート',
                apartDesc:'集合住宅の建築。通常のマンション、アパートに加え、シェアハウスの実績もございます。',
                smallTitle:'一軒家',
                smallDesc:'デザイナーと２人三脚であなたの求める物件を提案。',
                wetTitle:'一軒家-２',
                wetDesc:'耐震強度は国の基準値の倍。安心して住める家を提供します。',
                bookTitle:'インテリア/書斎etc',
                bookDesc:'最大限部屋の空間を生かした収納を作り出します。',
                kitchenTitle:'キッチン',
                kitchenDesc:'食事をとにかく作りやすく！',
                livingTitle:'リビングルーム',
                livingDesc:'くつろぐための空間は生活を華やかにするために必須です。'
            }
        };
    },
    methods:{
        choice1:function(){
            this.work = 1
        },
        choice2:function(){
            this.work = 2
        },
        showDetail:function(val1,val2,val3){
            this.popupImg = val1;
            this.popupTitle = val2;
            this.popupDesc = val3;
            this.popup = true;
            console.log(this.popupImg);

        },
        clear:function(){
            this.popupImg = "";
            this.popupTitle = "";
            this.popupDesc = "";
            this.popup = false;
        }

    }
}

new Vue({
    el:'#vue-work',
    components:{
        'works-comp':workComp
    }
});








/*元々の。
new Vue({
    el:'#vue-work',
    data:{
        work:1
    },
    methods:{
        choice1:function(){
            this.work = 1
        },
        choice2:function(){
            this.work = 2
        }
    }

}) 
*/