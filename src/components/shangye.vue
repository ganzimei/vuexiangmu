<template>
    <div class="sy">
        <div class="lun">
              <van-swipe
                class="my-swipe"
                :autoplay="3000"
                indicator-color="white"
              >
                <van-swipe-item
                  ><img src="../../public/images/10.png" width="100%"
                /></van-swipe-item>
                <van-swipe-item
                  ><img src="../../public/images/10-1.png" width="100%"
                /></van-swipe-item>
                <van-swipe-item
                  ><img src="../../public/images/10-2.png" width="100%"
                /></van-swipe-item>
              </van-swipe>
            </div>
            <div class="yi">
              <p>国外41元一支的药国内要70万？真<br />相并不是这样</p>
              <span>医药要闻</span>
              <img class="img11" src="../../public/images/11.png" />
              <van-divider />
            </div>
            <div class="er">
              <p>魅族前高级副总裁李楠创立怒喵<br />科技，要花十年做潮流好物</p>
              <span>科技圈日常</span>
              <img class="img12" src="../../public/images/12.png" />
              <van-divider />
            </div>
            <div class="san">
              <p>国网上半年净利缩水八成多，同<br />比少挣了约248亿</p>
              <span>源动力</span>
              <img class="img11" src="../../public/images/11.png" />
              <van-divider />
            </div>
            <div class="si">
                <img class="img13" src="../../public/images/13.png" />
                <p>半年融资3轮，阿里下注，这家公司在社区团购的<br />“死亡游戏”中求生</p>
                <span>科技圈日常</span>
                <van-divider />
            </div>
            <div class="wu">
              <p>南京大学、武汉病毒所等临床试验证实<br />：金银花可抑制新冠病毒复制</p>
              <span>医药要闻</span>
              <img class="img14" src="../../public/images/14.png" />
              <van-divider />
            </div>
            <div class="liu">
              <p>裸眼3D、多屏幕、平视显示器，有关全新<br />一代奔驰S级更多信息都在这里了 | 新车</p>
              <span>科技圈日常</span>
              <img class="img15" src="../../public/images/15.png" />
              <van-divider />
            </div>
            <div class="qi">
              <p>国网上半年净利缩水八成多，同<br />比少挣了约248亿</p>
              <span>源动力</span>
              <img class="img11" src="../../public/images/11.png" />
              <van-divider />
            </div>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
import { Divider } from 'vant';
export default {
    components:{
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Divider.name]:Divider
    }
    
}
</script>
<style scoped>
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
.yi {
  height: 120px;
  background-color: white;
  margin-top: -10px;
}
.yi p {
  font-size: 18px;
  padding: 10px 20px;
}
.yi span {
  font-size: 14px;
  color: gainsboro;
  padding: 10px 20px;
}
.img11 {
  display: flex;
  width: 100px;
  height: 100px;
  float: right;
  margin: -75px 10px;
}
.van-divider{
    width: 99%;
    text-align: center;
    color: gainsboro;
}
.er {
  height: 120px;
  background-color: white;
  margin-top: -15px;
}
.er p {
  font-size: 18px;
  padding: 10px 20px;
}
.er span {
  font-size: 14px;
  color: gainsboro;
  padding: 10px 20px;
}
.img12 {
  display: flex;
  width: 100px;
  height: 100px;
  float: right;
  margin: -75px 10px;
}
.san {
  height: 120px;
  background-color: white;
  margin-top: -15px;
}
.san p {
  font-size: 18px;
  padding: 10px 20px;
}
.san span {
  font-size: 14px;
  color: gainsboro;
  padding: 10px 20px;
}
.img11 {
  display: flex;
  width: 100px;
  height: 100px;
  float: right;
  margin: -75px 10px;
}
.si {
  height: 260px;
  background-color: white;
  margin-top: 0px;
}
.img13{
    width: 100%;
    height: 150px;
}
.si p {
  font-size: 18px;
  padding: 0px 20px;
}
.si span {
  font-size: 14px;
  color: gainsboro;
  padding: 0px 20px;
}
.wu {
  height: 120px;
  background-color: white;
  margin-top: -10px;
}
.wu p {
  font-size: 18px;
  padding: 10px 20px;
}
.wu span {
  font-size: 14px;
  color: gainsboro;
  padding: 10px 20px;
}
.img14 {
  display: flex;
  width: 100px;
  height: 100px;
  float: right;
  margin: -75px 10px;
}
.van-divider{
    width: 99%;
    text-align: center;
    color: gainsboro;
}
.liu {
  height: 120px;
  background-color: white;
  margin-top: -15px;
}
.liu p {
  font-size: 18px;
  padding: 10px 20px;
}
.liu span {
  font-size: 14px;
  color: gainsboro;
  padding: 10px 20px;
}
.img15 {
  display: flex;
  width: 100px;
  height: 100px;
  float: right;
  margin: -75px 10px;
}
.qi {
  height: 120px;
  background-color: white;
  margin-top: -15px;
}
.qi p {
  font-size: 18px;
  padding: 10px 20px;
}
.qi span {
  font-size: 14px;
  color: gainsboro;
  padding: 10px 20px;
}
.img11 {
  display: flex;
  width: 100px;
  height: 100px;
  float: right;
  margin: -75px 10px;
}
</style>