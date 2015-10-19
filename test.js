/**
 * Created by wbye on 2015/10/14.
 */

//i18n.setDefaultNamespace('i18n');
var language = window.localStorage.getItem("language") || 'en';

i18n.init({
    lng: language,
    ns: 'i18n',
    fallbackOnEmpty:true,
    fallbackLng: 'dev',
    debug: true
}).done(function () {
    $(".nav").i18n();
    console.log(i18n.t('nav.page404'));
    console.log(i18n.t('nav.page502'));
    i18n.addResource('en', 'i18n', 'nav.page502', 'page502');
    console.log(i18n.t('nav.page502'));
});
