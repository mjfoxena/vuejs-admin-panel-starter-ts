<template>
  <v-navigation-drawer
    v-model="layout.drawer"
    :expand-on-hover="true"
    permanent
    :rail="layout.rail"
    :location="$vuetify.display.mobile ? 'left' : undefined"
  >
    <!-- LOGO -->
    <div class="px-3 py-4 d-flex justify-center align-center w-full">
      <!-- <v-avatar size="30" color="transparent"> -->
      <img
        src="@/assets/images/logo/black.svg"
        alt="logo"
        width="60"
        height="60"
      />
      <!-- </v-avatar> -->
      <!-- <Logo /> -->
      <h1 v-if="!layout.rail" class="ml-2 text-h4 font-weight-bold">
        GI<span class="font-weight-bold text-blue-darken-2">XEL</span>
      </h1>
      <v-spacer></v-spacer>
      <!-- <v-radio value="value" v-if="!layout.miniVariant"></v-radio> -->
    </div>
    <v-list nav>
      <template v-for="(item, index) in items" :key="item.title">
        <p
          class="text-grey-darken-1 text-caption font-weight-medium py-4"
          v-if="!layout.rail && item.header"
        >
          {{ item.header }}
        </p>

        <!-- <v-divider v-else-if="item.title === '-'" /> -->
        <template v-else-if="item.title !== '-'">
          <!-- Menu Item -->
          <v-list-item
            v-if="!item.children"
            :disabled="!item.to"
            :prepend-icon="item.icon"
            :title="item.title"
            :to="item.to"
            link
            :active="router.currentRoute.value.path === item.to"
            active-color="primary"
          />
          <!-- Sub menu -->
          <v-list-group v-else-if="item.children" v-model="item.active">
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                :prepend-icon="item.icon"
                :title="item.title"
              />
            </template>
            <!-- Sub menu item -->
            <template v-for="subItem in item.children" :key="subItem.title">
              <v-divider v-if="subItem.title === '-'" />
              <v-list-item
                v-else
                :disabled="!subItem.to"
                :prepend-icon="subItem.icon"
                :title="subItem.title"
                :to="subItem.to"
                :active="router.currentRoute.value.path === subItem.to"
                active-color="primary"
                link
              />
            </template>
          </v-list-group>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { IDrawerMenuItem } from "@/interfaces/global.interface";
import { RouterPath } from "@/router/router.path";
import { useGlobal } from "@/stores";

const { layout } = useGlobal();

const router = useRouter();

/** Drawer menu items */
/** Drawer menu items */
const items: IDrawerMenuItem[] = [
  {
    header: "MENU",
  },
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard",
    to: RouterPath.dashboard,
  },
  {
    title: "-", // Divider
  },
  {
    header: "PRODUCTS",
  },
  {
    title: "Products",
    icon: "mdi-cube-outline",
    to: RouterPath.products,
    children: [
      {
        title: "All Products",
        icon: "mdi-cube-outline",
        to: RouterPath.allProducts,
      },
      {
        title: "Add Product",
        icon: "mdi-plus-box-outline",
        to: RouterPath.addProduct,
      },
      {
        title: "Categories",
        icon: "mdi-tag-multiple",
        to: RouterPath.productCategories,
      },
    ],
  },
  {
    title: "Orders",
    icon: "mdi-cart-outline",
    to: RouterPath.orders,
    children: [
      {
        title: "All Orders",
        icon: "mdi-cart",
        to: RouterPath.allOrders,
      },
      {
        title: "Pending Orders",
        icon: "mdi-cart-clock",
        to: RouterPath.pendingOrders,
      },
      {
        title: "Completed Orders",
        icon: "mdi-cart-check",
        to: RouterPath.completedOrders,
      },
    ],
  },
  {
    title: "-", // Divider
  },
  {
    header: "VENDORS & INVENTORY",
  },
  {
    title: "Vendors",
    icon: "mdi-store",
    to: RouterPath.vendors,
    children: [
      {
        title: "All Vendors",
        icon: "mdi-storefront-outline",
        to: RouterPath.allVendors,
      },
      {
        title: "Add Vendor",
        icon: "mdi-store-plus",
        to: RouterPath.addVendor,
      },
    ],
  },
  {
    title: "Inventory",
    icon: "mdi-warehouse",
    to: RouterPath.inventory,
    children: [
      {
        title: "Stock Overview",
        icon: "mdi-cube-scan",
        to: RouterPath.stockOverview,
      },
      {
        title: "Low Stock",
        icon: "mdi-cube-outline",
        to: RouterPath.lowStock,
      },
    ],
  },
  {
    title: "-", // Divider
  },
  {
    header: "REPORTS & INVOICES",
  },
  {
    title: "Reports",
    icon: "mdi-chart-bar",
    to: RouterPath.reports,
    children: [
      {
        title: "Sales Report",
        icon: "mdi-cash-register",
        to: RouterPath.salesReport,
      },
      {
        title: "Product Performance",
        icon: "mdi-chart-line",
        to: RouterPath.productPerformance,
      },
    ],
  },
  {
    header: "USERS",
  },
  {
    title: "Customers",
    icon: "mdi-account-group-outline",
    to: RouterPath.customers,
    children: [
      {
        title: "All Customers",
        icon: "mdi-account-multiple",
        to: RouterPath.allCustomers,
      },
      {
        title: "Active Customers",
        icon: "mdi-account-check-outline",
        to: RouterPath.activeCustomers,
      },
    ],
  },
  {
    title: "-", // Divider
  },
  {
    header: "ADMINISTRATIVE",
  },
  {
    title: "Settings",
    icon: "mdi-cog-outline",
    to: RouterPath.settings,
    children: [
      {
        title: "General Settings",
        icon: "mdi-cogs",
        to: RouterPath.generalSettings,
      },
      {
        title: "User Settings",
        icon: "mdi-account-cog-outline",
        to: RouterPath.userSettings,
      },
    ],
  },
  {
    title: "-", // Divider
  },
  {
    title: "Logout",
    icon: "mdi-logout",
    to: RouterPath.logout,
  },
];
</script>
