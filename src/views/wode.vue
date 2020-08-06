<template>
  <div>
    <div>
      <div class="top">
        <div class="is2"><img src="../../public/images/2.png" alt="" /></div>
        <div class="is">
          <router-link to="deng"><img class="img1" src="../../public/images/1.png" /></router-link>
        </div>
      </div>
      

      <div class="yi">
        <van-grid>
        <van-grid-item icon="comment-o" text="消息与通知" />
        <van-grid-item icon="clock-o" text="历史阅读" />
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="shop-o" text="面点商城" />
      </van-grid>
      </div>

      <div class="er">
        <van-grid>
        <van-grid-item icon="eye-o" text="夜间模式" />
        <van-grid-item icon="edit" text="字号调节" />
        <van-grid-item icon="user-circle-o" text="账号设置" />
        <van-grid-item icon="setting-o" text="系统设置" />
      </van-grid>
      </div>

      <div class="san">
          <van-cell title="爆料" is-link />
          <van-cell title="界面消费者报告" is-link />
          <van-cell title="反馈与举报" is-link />
          <van-cell title="推荐好友" is-link />
          <van-cell title="关于界面" is-link />
          <van-cell title="联系我们" is-link />
          <van-cell title="申请加入界面号" is-link />
      </div>

    </div>
  </div>
</template>
<script>

import { Grid, GridItem } from "vant";
import { Cell, CellGroup } from 'vant';
export default {
  components: {
    
    [Grid.name]: Grid,
    [GridItem.name]:GridItem,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup

  },
  data() {
    return {
      active: 0,
      active2: 0,
    };
  },
};
</script>
<style scoped>
.top {
  border: 0.1rem black solid;
  height: 10rem;
  background-image: url("../../public/images/bei.png");
}
.is img {
  width: 40%;
  margin: -4rem 1.9rem 0rem 1.9rem;
  float: left;
}
.bei {
  width: 100%;
  height: 15rem;
}
.is2 {
  width: 100%;
  height: 7rem;
  text-align: right;
  padding: 0.5rem -1rem;
}
.is2 img {
  width: 8%;
}
.yi{
    margin-top: 10px;
}
.er{
    margin-top: 10px;
}
.san{
    margin-top: 10px;
}
</style>

