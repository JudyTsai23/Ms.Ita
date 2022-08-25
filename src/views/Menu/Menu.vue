<template>
  <div>
    <global-title title="美味餐點" overlay="#C96759" :image="require(`@/assets/img/banner/menu-hero.jpg`)" />
    <b-nav align="center">
      <template v-for="category in categories">
        <b-nav-item class="px-2 px-md-3 px-lg-4 py-3" link-classes="fz-content-middle text-secondary-dark p-1" :to="`/menu/${category.name}`" :key="category.name">
          <img class="nav-icon" :src="require(`@/assets/img/icon/${category.icon}`)" alt="" />
          {{ category.zhName }}
        </b-nav-item>
      </template>
    </b-nav>
    <b-container class="section pt-0">
      <div class="menu-title my-5">
        <b-icon icon="grid-fill" rotate="45" class="mx-3 mx-md-4b"></b-icon>
        <h3 class="m-0">{{ currentCategory.zhName }}</h3>
        <b-icon icon="grid-fill" rotate="45" class="mx-3 mx-md-4b"></b-icon>
      </div>
      <!-- 單一子類別 -->
      <div v-for="(subCategoryList, idx) in mealsList" :key="idx">
        <h4 v-if="subCategoryList.subCateName" class="wow fadeIn text-center text-other mb-4b">
          <b-icon icon="square-fill" rotate="45" class="small" font-scale="0.5" shift-v="6"></b-icon>
          {{ subCategoryList.subCateName }}
          <b-icon icon="square-fill" rotate="45" class="" font-scale="0.5" shift-v="6"></b-icon>
        </h4>
        <b-row cols="2" cols-md="3" cols-lg="4" class="mb-6">
          <!-- 單一子類別中所有餐點 -->
          <b-col v-for="(item, idx) in subCategoryList.meals" :key="idx" class="wow fadeIn px-3" data-wow-duration="1.2s" data-wow-offset="50">
            <!-- item是單個餐點(object) -->
            <b-card
              :title="item.name"
              title-tag="h5"
              header-class="position-relative border-0 p-0"
              footer-bg-variant="transparent"
              footer-border-variant="0"
              :img-src="item.image"
              :img-alt="item.name"
              img-top
              body-bg-variant="white"
              body-class="z-index-1"
              class="fz-sub-title mb-5 shadow overflow-hidden"
              v-b-modal.mealModal
              @click="ChangeCurrentMeal(item)"
            >
              <template #header v-if="item.limitDate != 0">
                <span class="wow pulse badge badge-danger fz-content-small limited-tag" data-wow-delay="0.8s">期間限定</span>
              </template>
              <template #footer>
                <div class="fz-content text-right">NT$ {{ item.price }}</div>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <!-- 餐點內容(跳出Modal顯示) -->
      <b-modal centered id="mealModal" size="xl" hide-header hide-footer content-class="border-0 overflow-hidden shadow" body-class="d-flex flex-wrap p-0">
        <b-col cols="12" lg="6" xl="5" class="p-0">
          <b-img :src="currentMeal.image" fluid-grow :alt="currentMeal.name" />
        </b-col>
        <b-col cols="12" lg="6" xl="7" class="p-4 p-xl-5">
          <h5 class="fz-title-middle mb-4">{{ currentMeal.name }}</h5>
          <p class="fz-content-small mb-4">{{ currentMeal.description }}</p>
          <div class="fz-content-small mb-5">
            <h6 class="text-primary-light">
              <b-icon icon="square-fill" rotate="45" class="small mr-1" font-scale="0.5" shift-v="3"></b-icon>
              內容物
            </h6>
            <p>{{ currentMeal.ingredient }}</p>
            <p>【註】 {{ currentMeal.note }}</p>
          </div>
          <div class="fz-sub-title p-4 price">NT$ {{ currentMeal.price }}</div>
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
// 餐點card
.card img {
  transition: transform 0.5s;
}
.card:hover img {
  transform: scale(1.1);
}
.limited-tag {
  position: absolute;
  right: 10px;
  bottom: 10px;
  box-shadow: 0 0 8px 2px #fff;
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
