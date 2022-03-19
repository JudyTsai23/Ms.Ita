<template>
  <div>
    <global-title title="美味餐點" overlay="#C96759" :image="require(`@/assets/img/banner/menu-hero.jpg`)" />

    <b-container class="section pt-0">
      <b-nav align="center">
        <!-- // TODO 可點擊範圍太大 -->
        <template v-for="(item, key) in categories">
          <b-nav-item class="px-2" :to="`/menu/${key}`" :key="key">
            <img :src="require(`@/assets/img/icon/${item.icon}.svg`)" alt="" />
            {{ item.name }}
          </b-nav-item>
        </template>
      </b-nav>
      <div class="menu-title my-5">
        <b-icon icon="grid-fill" rotate="45" class="mx-4b"></b-icon>
        <h3 class="m-0">{{ categories[$route.params.type]["name"] }}</h3>
        <b-icon icon="grid-fill" rotate="45" class="mx-4b"></b-icon>
      </div>
      <div v-for="(item, key) in meals" :key="key">
        <h4 class="text-center text-other mb-4b">
          <b-icon icon="square-fill" rotate="45" class="small" font-scale="0.5"></b-icon>
          {{ key }}
          <b-icon icon="square-fill" rotate="45" class="" font-scale="0.5"></b-icon>
        </h4>
        <b-row cols-md="3" cols-lg="4" class="mb-6">
          <b-col v-for="value in item" :key="value.index" class="px-3">
            <b-card
              :title="value.name"
              footer-bg-variant="transparent"
              footer-border-variant="0"
              :img-src="value.image"
              :img-alt="value.name"
              img-top
              class="fz-sub-title mb-5 shadow"
              v-b-modal.modal-lg
            >
              <template #footer>
                <div class="fz-content text-right">NT$ {{ value.price }}</div>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <!-- 餐點內容(跳出Modal顯示) -->
      <b-modal centered id="modal-lg" size="lg" title="Large Modal">Hello Large Modal!</b-modal>
      <!-- 分頁頁碼 -->
      <gobal-pagination :curr-page.sync="currentPage" :total-rows="rows" :per-page="perPage" curr-color="secondary-light" />
    </b-container>
  </div>
</template>

<script src="./Menu.js"></script>

<style lang="scss" scoped>
.menu-title {
  display: flex;
  align-items: center;
  color: $primary-darker;
  &::before,
  &::after {
    content: "";
    // height: 1px;
    // background-color: $other-purple;
    border-top: 2px dotted $other-purple;
    flex-grow: 1;
  }
}
</style>
