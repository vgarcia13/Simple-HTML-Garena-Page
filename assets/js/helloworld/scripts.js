function initialPageData() {
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=2",
        success: function(data) {
          console.log(data.data);
        }
      });
}