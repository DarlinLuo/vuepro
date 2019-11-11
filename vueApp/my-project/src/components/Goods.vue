<template>
    <van-grid :column-num="3">
  <van-grid-item
    v-for="value in 9"
    :key="value"
    icon="//img3.winxuancdn.com/4172/1201824172_49_2_original_800x800.jpg?1555922023059&imageMogr2/thumbnail/200x200"
    text="文字"
  />
</van-grid>
</template>
<script>
export default{
   data(){
       return {
           
       }
   }
}
</script>