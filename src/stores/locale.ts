import { defineStore } from "pinia";
import { Locale } from "vue-i18n";
import { nextTick, toRaw } from "vue";
import { Cookies, Quasar } from "quasar";
import { getCurrentInstance } from "vue";
//import otaClient from "@crowdin/ota-client";
import { i18n } from "@/boot/i18n";

//const crowdinHash: string = process.env.CROWDIN_HASH as string;
//const crowdinFile: string = process.env.CROWDIN_FILE as string;

//const client = new otaClient(crowdinHash);
const i18nGlob = i18n.global;
//const modules = import.meta.glob("@/i18nDev/*.json");

const supportLocales: string[] = ["en", "ru"];

//console.log(i18nGlob);

function someLongRequest () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(0)
    }, 500)
  })
}

export default defineStore("locale", {
  actions: {
    async setLanng(lang?: string) {
      // @ts-ignore
      const isDev: boolean = this.isDev;

      if (!lang) {
        lang = Cookies.get("lang");

        if (!lang) {
          const lacalePair = Quasar.lang.getLocale()?.split("-");

          if (lacalePair && lacalePair.length >= 1) {
            lang = lacalePair[0];
          }
        }
      }

      if (!lang) {
        lang = "en";
      }

      if (i18nGlob.locale.value === lang) {
        return;
      }

      const globalProperties = getCurrentInstance()?.appContext.config.globalProperties;
      const loadedLocales = Object.keys(toRaw(i18nGlob.messages.value) as Locale[]);

      if (loadedLocales.indexOf(lang) === -1) {
        //let translations = {};

        await someLongRequest()


        // if (lang === "ru" && isDev) {
        //   translations = await modules["../i18nDev/app.ru.json"]();
        // } else {
        //   translations = await client.getFileTranslations("/" + crowdinFile, lang);
        // }

        //i18nGlob.setLocaleMessage(lang, translations);
      }

      i18nGlob.locale.value = lang;

      Cookies.set("lang", lang, {
        domain: isDev ? undefined : globalProperties?.$domain,
        secure: true,
        sameSite: "None",
        expires: 365,
      });

      document.querySelector("html")?.setAttribute("lang", lang);

      await nextTick();

      // TODO: Необходимо реализовать сохранение языка на бэке

      // if (!state.auth?.session) {
      //   return;
      // }

      // try {
      //   await api.post("/user/current-user", {
      //     locale: lang,
      //   });
      // } catch (e) {
      //   /**/
      // }
    },
  },
  getters: {
    nextLang(): string {
      const localeCodesList = supportLocales.filter((code) => code !== i18nGlob.locale.value);
      if (!localeCodesList.length) {
        return supportLocales[0];
      }

      return localeCodesList[0];
    },
  },
});
