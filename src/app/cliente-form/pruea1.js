function filter_options(e){

    const padre = $(e.target).parent();
    if (typeof padre.find(".choice1").data('options') === "undefined") {
      padre.find(".choice1").data('options', padre.find('.combo2').clone());
    }
  
    var id = padre.find(".combo1").val();
    var options = padre.find(".combo1").data('options').filter('[data-option=' +val.idPre + ']');
    padre.find('.combo2').html(options);
  
  }
  
  $(function () {
  
    $(".combo1").change((e) => {
      filter_options(e);
    });
  
  });