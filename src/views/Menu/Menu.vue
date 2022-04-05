<template>
  <div>
    <global-title title="美味餐點" overlay="#C96759" :image="require(`@/assets/img/banner/menu-hero.jpg`)" />

    <b-nav align="center">
      <template v-for="item in categories">
        <b-nav-item class="px-2 px-md-3 px-lg-4 py-3" link-classes="fz-content-middle text-secondary-dark p-1" :to="`/menu/${item.slug}`" :key="item.slug">
          <img class="nav-icon" :src="require(`@/assets/img/icon/${item.icon}.svg`)" alt="" />
          {{ item.name }}
        </b-nav-item>
      </template>
    </b-nav>
    <b-container class="section pt-0">
      <div class="menu-title my-5">
        <b-icon icon="grid-fill" rotate="45" class="mx-3 mx-md-4b"></b-icon>
        <h3 class="m-0">{{ currentCategoryName }}</h3>
        <b-icon icon="grid-fill" rotate="45" class="mx-3 mx-md-4b"></b-icon>
      </div>
      <div v-for="(item, key) in mealsList" :key="key">
        <h4 v-if="key != ''" class="text-center text-other mb-4b">
          <b-icon icon="square-fill" rotate="45" class="small" font-scale="0.5" shift-v="6"></b-icon>
          {{ key }}
          <b-icon icon="square-fill" rotate="45" class="" font-scale="0.5" shift-v="6"></b-icon>
        </h4>
        <b-row cols="2" cols-md="3" cols-lg="4" class="mb-6">
          <b-col v-for="value in item" :key="value.index" class="px-3">
            <b-card
              :title="value.mealName"
              title-tag="h5"
              footer-bg-variant="transparent"
              footer-border-variant="0"
              :img-src="value.mealImage"
              :img-alt="value.mealName"
              img-top
              class="fz-sub-title mb-5 shadow"
              v-b-modal.mealModal
              @click="ChangeCurrentMeal(value)"
            >
              <template #footer>
                <div class="fz-content text-right">NT$ {{ value.mealPrice }}</div>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <!-- 餐點內容(跳出Modal顯示) -->
      <b-modal centered id="mealModal" size="xl" hide-header hide-footer content-class="border-0 overflow-hidden shadow" body-class="d-flex flex-wrap p-0">
        <b-col cols="12" lg="6" xl="5" class="p-0">
          <b-img :src="currentMeal.mealImage" fluid-grow :alt="currentMeal.mealName" />
        </b-col>
        <b-col cols="12" lg="6" xl="7" class="p-4 p-xl-5">
          <h5 class="fz-title-middle mb-4">{{ currentMeal.mealName }}</h5>
          <p class="fz-content-small mb-4">{{ currentMeal.mealDescription }}</p>
          <div class="fz-content-small mb-5">
            <h6 class="text-primary-light">
              <b-icon icon="square-fill" rotate="45" class="small mr-1" font-scale="0.5" shift-v="3"></b-icon>
              內容物
            </h6>
            <p>{{ currentMeal.mealIngredient }}</p>
            <p>【註】 {{ currentMeal.mealNote }}</p>
          </div>
          <div class="fz-sub-title p-4 price">NT$ {{ currentMeal.mealPrice }}</div>
        </b-col>
      </b-modal>
    </b-container>
  </div>
</template>

<script src="./Menu.js"></script>

<style lang="scss" scoped>
@import "~bootstrap/scss/mixins/breakpoints";

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
.nav-icon {
  width: 1.75em;
  height: 1.75em;
}
#mealModal {
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .price {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
::v-deep #mealModal .modal-dialog {
  @include media-breakpoint-down(md) {
    max-width: 400px;
  }
  @include media-breakpoint-down(sm) {
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
