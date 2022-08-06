import { defineNuxtPlugin } from "#app";
import { ElButton } from "element-plus";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ElButton)
})