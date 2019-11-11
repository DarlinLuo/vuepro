<template>
  <div>
    <Search />
    <Divider />
    <Row />
    <Divider2 />
    <Row2 />
    <Divider3 />
    <Row3 />
    <Divider4 />
    <Row4 />
    <Divider />
    <Row />
    <Divider2 />
    <Row2 />
    <Divider3 />
    <Row3 />
    <Divider4 />
    <Row4 />
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import Divider from "../components/Divider.vue";
import Row from "../components/Row.vue";
import Divider2 from "../components/Divider2.vue";
import Row2 from "../components/Row2.vue";
import Divider3 from "../components/Divider3.vue";
import Row3 from "../components/Row3.vue";
import Divider4 from "../components/Divider4.vue";
import Row4 from "../components/Row4.vue";
export default {
  components: {
    Search,
    Divider,
    Row,
    Divider2,
    Row2,
    Divider3,
    Row3,
    Divider4,
    Row4
  }
};
</script>

<style>
body{
    background: rgb(241, 240, 240);
    padding-top: 2.8rem;
}
</style>