$(document).ready(function() {
    $('.carddetail').hide();

    $.getJSON('https://api.opendota.com/api/heroStats', function(result) {

        let oke = result;

        $('#mybutton').on('click', function() {
            let nama = $('#save').val();
            $.each(oke, function(i, data) {

                $('.carddetail').show();
                let a = data.roles;

                if (data.localized_name == nama) {

                    $('.img').html(`
                        <img src="https://api.opendota.com` + data.img + `" class="card-img" alt="" srcset="">
             `)

                    $('h3').text(data.localized_name)
                    $('#satu').text('Attack type: ' + data.attack_type)
                    $('#dua').text('Attack range : ' + data.attack_range)
                    $('#tiga').text('Primary attribute : ' + data.primary_attr)
                    $('#for').text('Move speed : ' + data.move_speed)
                    $('#lima').text('Base health : ' + data.base_health)
                    $('#enam').text('Projectile Speed : ' + data.projectile_speed)


                    let text = "<ul> Role:";
                    for (let i = 0; i < a.length; i++) {
                        text += "<li> &nbsp; " + a[i] + "</li>";
                    }
                    text += " </ul>";
                    document.getElementById("status").innerHTML = text;

                }
                $('#save').val("");
            });


        });


    });




});