<template>
  <div class="text-left mr-4 cursor-pointer">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="bottom right"
    >
      <template v-slot:activator="{ props }">
        <!-- SHOW AVATAR IF RAIL -->
        <v-avatar
          v-bind="props"
          v-if="!layout.rail"
          color="primary"
          size="40"
          class="mr-2"
          image="@/assets/images/user/user-male-avatar.jpg"
        >
        </v-avatar>
        <v-list v-bind="props" v-else>
          <v-list-item
            prepend-avatar="@/assets/images/user/user-male-avatar.jpg"
            subtitle="Admin"
            title="Mrutyunjaya Giri"
            class=""
          >
          </v-list-item>
        </v-list>
      </template>

      <v-card min-width="300">
        <v-list lines="three">
          <v-list-item
            prepend-avatar="@/assets/images/user/user-male-avatar.jpg"
            subtitle="Admin"
            title="Mrutyunjaya Giri"
          >
            <template v-slot:append>
              <v-btn
                :class="fav ? 'text-red' : ''"
                icon="mdi-heart"
                variant="text"
                @click="fav = !fav"
              ></v-btn>
            </template>
            <template v-slot:subtitle>
              <div>
                <p>Admin</p>
                <div class="my-1">
                  <v-icon size="small">mdi-email</v-icon> mrutyunjaya@foxena.com
                </div>
              </div>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-switch
              v-model="isDarkTheme"
              color="purple"
              :label="isDarkTheme ? 'Dark Theme' : 'Light Theme'"
              hide-details
              @change="toggleTheme"
            ></v-switch>
          </v-list-item>

          <!-- USER MENU ITEMS -->
          <v-list-item
            v-for="item in myMenuItems"
            :key="item.title"
            :subtitle="item.subtitle"
            :title="item.title"
            class="my-3"
            :to="item.to"
            tag="router-link"
          >
            <template v-slot:prepend>
              <v-avatar :color="item.color" variant="tonal">
                <v-icon :color="item.color" density="compact" size="small">{{
                  item.icon
                }}</v-icon>
              </v-avatar>
            </template>

            <!-- <template v-slot:append>
              <v-btn
                :color="item.color"
                icon="mdi-information"
                variant="text"
              ></v-btn>
            </template> -->
          </v-list-item>
        </v-list>

        <v-card-actions class="my-3">
          <v-btn
            block
            color="primary"
            variant="flat"
            rounded="md"
            @click="menu = false"
          >
            LOGOUT
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
<script setup lang="ts">
interface IUserMenuProps {
  title?: string;
  subtitle?: string;
  icon?: string;
  to?: string;
  color?: string;
}

import { useConfig, useGlobal } from "@/stores";
import { ref } from "vue";
const fav = ref(true);
const menu = ref(false);
const message = ref(false);
const { layout } = useGlobal();
const { toggleTheme, isDarkTheme } = useConfig();

const myMenuItems: IUserMenuProps[] = [
  {
    title: "My Profile",
    subtitle: "Account settings",
    icon: "mdi-card-account-details-outline",
    to: "/user/myprofile",
    color: "primary",
  },

  {
    title: "My Notes",
    subtitle: "My Notes and reminders",
    icon: "mdi-message-bulleted",
    to: "/user/mynotes",
    color: "blue",
  },

  //   {
  //     title: "Logout",
  //     subtitle: "Logout from the system",
  //     icon: "mdi-logout",
  //     to: "/user/logout",
  //     color: "amber",
  //   },
];
</script>
