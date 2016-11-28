/*
*   tinymce extension
*   author: ronglin
*   create date: 2011.5.24
*/

(function ($, tinymce) {

    if (!$ || !tinymce) { return; }
    var tm_fonts = "Andale Mono=andale mono,times;" +
                    "Arial=arial,helvetica,sans-serif;" +
                    "Arial Black=arial black,avant garde;" +
                    "Book Antiqua=book_antiquaregular,palatino;" +
                    "Corda Light=CordaLight,sans-serif;" +
                    "Courier New=courier_newregular,courier;" +
                    "Flexo Caps=FlexoCapsDEMORegular;" +
                    "Lucida Console=lucida_consoleregular,courier;" +
                    "Georgia=georgia,palatino;" +
                    "Helvetica=helvetica;" +
                    "Impact=impactregular,chicago;" +
                    "Museo Slab=MuseoSlab500Regular,sans-serif;" +
                    "Museo Sans=MuseoSans500Regular,sans-serif;" +
                    "Oblik Bold=OblikBoldRegular;" +
                    "Sofia Pro Light=SofiaProLightRegular;" +
                    "Symbol=webfontregular;" +
                    "Tahoma=tahoma,arial,helvetica,sans-serif;" +
                    "Terminal=terminal,monaco;" +
                    "Tikal Sans Medium=TikalSansMediumMedium;" +
                    "Times New Roman=times new roman,times;" +
                    "Trebuchet MS=trebuchet ms,geneva;" +
                    "Verdana=verdana,geneva;" +
                    "Webdings=webdings;" +
                    "Wingdings=wingdings,zapf dingbats" +
                    "Aclonica=Aclonica, sans-serif;" +
                    "Michroma=Michroma;" +
                    "Paytone One=Paytone One, sans-serif;" +
                    "Andalus=andalusregular, sans-serif;" +
                    "Arabic Style=b_arabic_styleregular, sans-serif;" +
                    "Andalus=andalusregular, sans-serif;" +
                    "KACST_1=kacstoneregular, sans-serif;" +
                    "Mothanna=mothannaregular, sans-serif;" +
                    "Nastaliq=irannastaliqregular, sans-serif;" +
                    "Samman=sammanregular;" +
                    "Pt san=PT Sans";
    // get global config
    tinymce.getKoobooConfig = function (params) {
        params = params || {};
        return {
            mode: "exact",
            theme: "modern",
            menubar: false,
            toolbar_items_size: 'small',
            resize: false,
            plugins: [
                "advlist autolink lists link image charmap print preview hr anchor", 
                "searchreplace wordcount visualblocks visualchars code fullscreen",
                "media table contextmenu paste insertPage textcolor directionality emoticons", "KoobooMediaLibrary"
            ],

            //toolbar: "save searchreplace undo redo | bold italic forecolor formatselect | indent outdent | alignleft aligncenter alignright alignjustify | bullist numlist | image link unlink insertPage | code fullscreen",
            toolbar1: "save,newdocument, searchreplace, |,undo,redo,|,cut,copy,paste,pastetext,pasteword, selectall,|,link,unlink,anchor,cleanup,help,code ,fullscreen,|,insertdate,inserttime,preview,|,tablecontrols,table, inserttable|,hr,removeformat,visualaid,|,sub,sup,|,charmap,iespell,media,image ,advhr,|,print,|,ltr,rtl,| ,insertlayer,moveforward,movebackward,absolute,|,styleprops,spellchecker,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,pagebreak,|,insertfile,insertimage,|,KoobooMediaLibrary",
            toolbar2: "styleselect,formatselect,fontselect,fontsizeselect,|,bold,italic ,underline,strikethrough,|,forecolor,backcolor,emoticons,|,  alignleft, aligncenter, alignright, alignjustify,justifyleft,justifycenter,justifyright,justifyfullindent,|, outdent, blockquote, |,bullist,numlist,|",
            // Full featured 
            //plugins: [
            //    "advlist autolink lists link image charmap print preview hr anchor pagebreak",
            //    "searchreplace wordcount visualblocks visualchars code fullscreen",
            //    "insertdatetime media nonbreaking save table contextmenu directionality",
            //    "emoticons template paste textcolor moxiemanager"
            //],
            //toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            //toolbar2: "print preview media | forecolor backcolor emoticons",
            menu: {
                file: {title: 'File', items: 'newdocument'}, 
                edit: {title: 'Edit', items: 'undo redo | cut copy paste | selectall'}, 
                insert: {title: 'Insert', items: '|'}, 
                view: {title: 'View', items: 'visualaid'}, 
                format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'}, 
                table: {title: 'Table'}, 
                tools: {title: 'Tools'} 
            },
            image_advtab: true,
			/*Edit by xuannh 13032014*/

            //paste_auto_cleanup_on_paste: true,
            //paste_preprocess: function (pl, o) {
            //    // Content string containing the HTML from the clipboard
            //    alert(o.content);
            //    o.content = "-: CLEANED :-\n" + o.content;
            //},
            //paste_postprocess: function (pl, o) {
            //    // Content DOM node containing the DOM structure of the clipboard
            //    alert(o.node.innerHTML);
            //    o.node.innerHTML = o.node.innerHTML + "\n-: CLEANED :-";
            //},
			//paste_word_valid_elements: "b,strong,i,em,h1,h2",
			/*End Edit by xuannh 13032014*/
            autosave_interval: "20s",
            autosave_restore_when_empty: false,
            autosave_retention: "30m",
            paste_data_images: true,
            paste_as_text: false,
            relative_urls: false,
            convert_urls: false,
            extended_valid_elements: "style[type],script[type|src],iframe[src|style|width|height|scrolling|marginwidth|marginheight|frameborder]",
            verify_html: false,
            media_strict: false,
            keep_styles: true,
            extended_valid_elements: "*[*]",
            valid_elements: '*[*]',
            //valid_children: "+body[style|link]" //http://tinymce.moxiecode.com/wiki.php/Configuration:valid_children
            valid_children: "+body[style]", //http://tinymce.moxiecode.com/wiki.php/Configuration:valid_children
            content_css: "http://fonts.googleapis.com/css?family=PT+Sans:400,700",
            theme_advanced_fonts: tm_fonts,
            language: 'vi_VN',
        };
    };

    // apply top zIndex
    tinymce.ztopKoobooDialog = function (id) {
        var topJQ = top._jQuery || top.jQuery;
        var yardi = window.yardi || top.yardi;
        var contentCon = topJQ('#' + id);
        if (contentCon.length > 0) {
            var dialogCon = contentCon.parent('.ui-dialog').first();
            var maskCon = dialogCon.next('.ui-widget-overlay').first();
            if (yardi) {
                yardi.zTop(maskCon);
                yardi.zTop(dialogCon);
            } else {
                // get max zIndex
                var max = function () {
                    var zmax, cur;
                    topJQ('*').each(function () {
                        cur = parseInt($(this).css('z-index'));
                        zmax = cur > (zmax || 0) ? cur : zmax;
                    });
                    return zmax;
                }() || 0;
                // apply
                maskCon.css('z-index', (parseInt(maskCon.css('z-index')) || 0) + max);
                dialogCon.css('z-index', (parseInt(dialogCon.css('z-index')) || 0) + max);
            }
        }
    };

    // tinymce comment out the javascript and style content by default
    // it need to be restored to original format, and available for cms.
    var uncommentHtml = function (val) {
        var rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        val = val.replace(rscript, function (matched) {
            return matched.replace('>// <![CDATA[', '>').replace('// ]]></', '</');
        });
        var rstyle = /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi;
        val = val.replace(rstyle, function (matched) {
            return matched.replace('><!--', '>').replace('--></', '</');
        });
        return val;
    };

    // to fix the problem when custom html all css style are reseted
    // we decide to add a class name(unreset) to all elements at top layer.
    // attention: can not use jQuery to analyze, jQuery will ignore script tag.
    var unresetHtml = function (val) {
        var wrap = document.createElement('div');
        wrap.style.position = 'absolute';
        wrap.style.left = '-10000px';
        wrap.style.top = '-10000px';
        document.body.appendChild(wrap);
        // fix bug: set html to element innerHTML, while style or script tag at the first position of html.
        // ie6 ie7 ie8 will remove the first style or script tag, so add a temporary span at front of the html.
        if ($.browser.msie && $.browser.version < 9) {
            wrap.innerHTML = '<span>temp</span>' + val;
            wrap.removeChild(wrap.firstChild);
        } else {
            wrap.innerHTML = val;
        }
        var ignoreTags = '|STYLE|SCRIPT|NOSCRIPT|'.toUpperCase();
        for (var i = 0; i < wrap.childNodes.length; i++) {
            var child = wrap.childNodes[i];
            if (child.nodeType === 1) { // element type
                if (ignoreTags.indexOf('|' + child.tagName + '|') === -1) {
                    $(child).addClass('unreset');
                }
            }
        }
        val = wrap.innerHTML;
        document.body.removeChild(wrap);
        return val;
    };

    // hack: getContent
    var getContent = tinymce.Editor.prototype.getContent;
    tinymce.Editor.prototype.getContent = function () {
        var content = getContent.apply(this, arguments);
        // for html source (tinymce plugin)
        if (arguments[0] && arguments[0].source_view === true) {
            return uncommentHtml(content);
        } else {
            return content;
        }
    };

    // hack: triggerSave
    var triggerSave = tinymce.triggerSave;
    tinymce.triggerSave = function () {
        triggerSave.apply(this, arguments);
        // core
        var len = tinymce.editors.length;
        for (var i = 0; i < len; i++) {
            var id = tinymce.editors[i].id;
            var textarea = $('#' + id);
            if (!textarea.length) { textarea = $('[name="' + id + '"]'); }
            textarea.each(function () {
                var val = $(this).val();
                //val = unresetHtml(val);
                val = uncommentHtml(val);
                $(this).val(val);
            });
        }
    };

}(jQuery, window.tinymce || window.tinyMCE));
