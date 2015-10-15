/**
 * Created by wbye on 2015/10/14.
 */

i18n.init({ detectLngQS: 'lang',cookieName:'lang',preload:['test1','test2'],lngWhitelist:['en','cn'] },function () {
    $(".nav").i18n();
});
// with both
// laguage set and callback
//i18n.init({lng: "en"}, function (err, t) {
//    var x = t("app.name");
//
//    console.log(x);
//});
//
//i18n.setLng('cn', function (err, t) {
//    var x = t("app.name");
//
//    console.log(x);
//
//});
//// fix Lng
//setTimeout(function () {
//
//    i18n.setLng('en', {fixLng: true}, function (err, t) {
//        var x = t("app.name");
//
//        console.log(x);
//
//    });
//},2000);
