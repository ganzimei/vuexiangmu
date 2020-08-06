<template>
  <div class="home">
    <div class="shang">
      <van-icon name="wap-nav" size="2rem" />
      <img class="img4" src="../../public/images/4.png" />
      <van-search v-model="value" placeholder="贝鲁特港口大爆炸" />
      <img class="img5" src="../../public/images/5.png" />
    </div>
    <div class="gao"></div>
    <div class="top">
      <van-tabs>
        <van-tab v-for="(item, index) in p" :title="item" :key="index">
          <div v-show="index == 0">
            <div class="lun">
              <van-swipe
                class="my-swipe"
                :autoplay="3000"
                indicator-color="white"
              >
                <van-swipe-item
                  ><img src="../../public/images/lun.png" width="100%"
                /></van-swipe-item>
                <van-swipe-item
                  ><img src="../../public/images/lun1.png" width="100%"
                /></van-swipe-item>
                <van-swipe-item
                  ><img src="../../public/images/lun2.png" width="100%"
                /></van-swipe-item>
                <van-swipe-item
                  ><img src="../../public/images/lun3.png" width="100%"
                /></van-swipe-item>
                <van-swipe-item
                  ><img src="../../public/images/lun4.png" width="100%"
                /></van-swipe-item>
                <van-swipe-item
                  ><img src="../../public/images/lun5.png" width="100%"
                /></van-swipe-item>
              </van-swipe>
            </div>
            <div class="jiu">
              <p>九毛九切入火锅赛道，推出怂重庆<br />火锅厂</p>
              <span>消费热新闻</span>
              <img class="img6" src="../../public/images/6.png" />
            </div>
            <div class="tu">
              <img class="img7" src="../../public/images/7.png" />
              <p>
                【独家】中信集团今年要节流降本100亿元，中信<br />银行未回应降薪20%
              </p>
              <span>金融live</span>
            </div>
            <div class="hua">
              <img class="img8" src="../../public/images/8.png" />
            </div>
            <div class="guang">
              <p>广岛纪念原子弹爆炸75周年，安<br />倍：希望实现一个无核武世界</p>
              <span>界面Views</span>
              <img class="img9" src="../../public/images/9.png" />
            </div>
          </div>
          <div v-show="index == 2">
           <shangye></shangye>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
import { Search } from "vant";
import { Tab, Tabs } from "vant";
import { Swipe, SwipeItem } from "vant";
import shangye from "@/components/shangye.vue"

export default {
  components: {
    [Icon.name]: Icon,
    [Search.name]: Search,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    shangye
  },
  data() {
    return {
      value: "",
      p: [
        "首页",
        "我的",
        "商业",
        "财经",
        "新闻",
        "科技",
        "汽车",
        "地产",
        "金融",
        "消费",
        "证券",
      ],
    };
  },
};
</script>
<style scoped>
.home {
  text-align: left;
}
.shang {
  height: 52px;
  background-color: #d43b26;
  text-align: left;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top:0px;
  z-index: 10;
  width: 100%;
}
.gao{
  height: 52px;
}
.van-icon {
  color: white;
  margin: -2px 15px;
  line-height: 50px;
}
.img4 {
  width: 40px;
  height: 35px;
  margin: 7px 5px;
}
.van-search {
  width: 70%;
  background-color: #d43b26;
  line-height: 50px;
}
.img5 {
  width: 40px;
  height: 35px;
  margin: 7px 5px;
}
.lun {
  width: 99%;
  height: 200px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 200px;
  text-align: center;
  background-color: #39a9ed;
  height: 200px;
  width: 100%;
  display: flex;
}
.jiu {
  height: 120px;
  background-color: white;
  margin-top: 10px;
}
.jiu p {
  font-size: 18px;
  padding: 10px 20px;
}
.jiu span {
  font-size: 14px;
  color: gainsboro;
  padding: 10px 20px;
}
.img6 {
  display: flex;
  width: 100px;
  height: 100px;
  float: right;
  margin: -75px 10px;
}
.tu {
  height: 380px;
  background-color: white;
  /* margin-top: 10px; */
}
.img7 {
  display: flex;
  width: 100%;
  height: 260px;
}
.tu p {
  font-size: 18px;
  margin-left: 3%;
}
.tu span {
  font-size: 14px;
  color: gainsboro;
  padding: 5px 20px;
}
.hua {
  height: 200px;
}
.img8{
  width: 100%;
  height: 200px;
}
.guang {
  height: 120px;
  background-color: white;
  margin-top: -15px;
}
.guang p {
  font-size: 18px;
  padding: 10px 20px;
}
.guang span {
  font-size: 14px;
  color: gainsboro;
  padding: 10px 20px;
}
.img9 {
  display: flex;
  width: 100px;
  height: 100px;
  float: right;
  margin: -75px 10px;
}
</style>
