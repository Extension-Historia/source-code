$(document).ready(function () {

    function noaccent(myString) {
        temp = myString.replace(/[àâä]/g, "a");
        temp = temp.replace(/[éèêë]/g, "e");
        temp = temp.replace(/[îï]/g, "i");
        temp = temp.replace(/[ôöō]/g, "o");
        temp = temp.replace(/[ùûüū]/g, "u");
        temp = myString.replace(/[ÀÂÄ]/g, "A");
        temp = temp.replace(/[ÀÂÄ]/g, "a");
        temp = temp.replace(/[ÉÈÊË]/g, "E");
        temp = temp.replace(/[ÉÈÊË]/g, "e");
        temp = temp.replace(/[ÎÏ]/g, "I");
        temp = temp.replace(/[ÎÏ]/g, "i");
        temp = temp.replace(/[ÔÖŌ]/g, "O");
        temp = temp.replace(/[ÔÖŌ]/g, "o");
        temp = temp.replace(/[ÙÛÜŪ]/g, "U");
        temp = temp.replace(/[ÙÛÜŪ]/g, "u");

        return temp;
    }

    $("#filter").keyup(function () {

        var text = $.trim(noaccent($(this).val())),
            filter = '^(?=.*\\b' + text.split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
            reg = RegExp(filter, 'i'),
            count = 0;

        $(".filter li.item").each(function () {

            if (!reg.test(noaccent($(this).text()))) {
                $(this).addClass("cacheItemFilter");
            } else if (!($(this).hasClass("cacheItem"))) {
                $(this).removeClass("cacheItemFilter");
                count++;
            }
        });
    });

});
