function initialPageData() {
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=2",
        success: function(data) {
          for(i=0;i<data.data.length;i++) {
            $('#character'+i).text(data.data[i].first_name + " " + data.data[i].last_name);
          }
        }
      });
}