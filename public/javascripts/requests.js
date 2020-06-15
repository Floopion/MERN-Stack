/*##############################
#       GET Requests           #
###############################*/

function findCountry() {

    $.get("/countries/" + $('#cFind').val())
    .done(function(response){
        $('#placeholder').text(response);
    })
    .fail(function(xhr, status, error){
        if (error == "NOT FOUND") {
            $('#placeholder').text(error + " Please enter a valid country ID!");
        }else {
            $('#placeholder').text(error + " Please try again later.");
        }
    });
};

/*##############################
#       POST Requests          #
###############################*/
function getFormData() {

    let country = {};
    let name = false;

    if ($('#cName').val().length != 0  ) {
        country["cName"] = $('#cName').val();
        name = true;
    } else {
        alert("Please Enter a Country name");
    }

    if ($('#cPop').val().length != 0) {
        country["cName"] = $('#cName').val();
        console.log(country);
        pop = true;
    } else {
        alert("Please Enter a valid population number");
    }
    country["cName"] = $('#cName').val();
    country["cPop"] = $('#cPop').val();
    console.log(country);

    if (name) {

        $.post(("/countries"), country, function (data) {
            console.log(data);
        });

        $(':input', '#cForm')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .prop('checked', false)
            .prop('selected', false);
    }
};


/*##############################
#       DELETE Requests        #
###############################*/
function deleteCountry() {
    let toDelete = $('#cDel').val().toString();
    let country = {};
    country['name'] = toDelete;

     $.ajax({
          type: 'DELETE',
          url: "/countries",
          data: country,
        });
};