
jQuery( document ).ready(function() {
  Ecwid.OnPageLoaded.add(function (Page) {
    switch (Page.type) {
      case 'PRODUCT':
        var input = '<form class="oneclickform" data-toggle="validator" role="form">' +
        '<span class="form-group"><input type="text" id="inputPhone" placeholder="Your phone number" style="width: 150px" required> </span>' +
        '<span class="form-group"> <button type="submit" class="btn btn-primary">Buy!</button> </div>' +
        '</form>';
         console.log('works2');
         jQuery('#oneclickbuy').on('click', function() {
           console.log('works3');
           jQuery('#oneclick_pop').webuiPopover({
              content: input,
              placement: 'bottom',
              width: 300,
              dismissible: false,
              cache: false,
              selector: true,
              onShow: validate(Page)
            }); 
          });

          jQuery('#oneclickbuy-info').webuiPopover({
            content: 'Введите свой телефон, мы с вами свяжемся',
            placement: 'right',
            trigger: 'hover'
          });
      break;
    }
  });
});




function add_oneclick_contatiner() {
        jQuery('#oneclick-container').remove();
        jQuery('#my-container').remove();

        var oneclick =
            '<div id="oneclick-container">' +
            '<div id="oneclick_pop">' +
            '<div class="btn btn-danger" id="oneclickbuy" data-animation="pop">' +
            '<span class="extraicons-cart"></span> Купить в один клик <span class="badge moyrazmer-oneclick-badge" id="oneclickbuy-info">?</span>' +
            '</div>' +
            '</div>' +
            '</div>';

        jQuery('.ecwid-productBrowser-details-rightPanel').append(oneclick);
        jQuery('#oneclickbuy').addClass('moyrazmer-oneclick');
        jQuery('#my-container').css("margin-top", "80px");
    }
