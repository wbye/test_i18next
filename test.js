/**
 * Created by wbye on 2015/10/14.
 */

<<<<<<< HEAD
//resGetPath: 'locales/__lng__/__ns__.json
i18n.init({ detectLngQS: 'lang',cookieName:'lang',preload:['test1','test2'],lngWhitelist:['en','cn'] },function () {
=======
//i18n.setDefaultNamespace('i18n');
var language = window.localStorage.getItem("language") || 'en';

i18n.init({
    lng: language,
    ns: 'i18n',
    fallbackOnEmpty:true,
    fallbackLng: 'dev',
    debug: true
}).done(function () {
>>>>>>> 6b33dec7ecfe2fc22d2749fba233b27de50c4128
    $(".nav").i18n();
    console.log(i18n.t('nav.page404'));
    console.log(i18n.t('nav.page502'));
    i18n.addResource('en', 'i18n', 'nav.page502', 'page502');
    console.log(i18n.t('nav.page502'));
});
