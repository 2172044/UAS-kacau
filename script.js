$(document).ready(function() {
    $.getJSON('https://api.opendota.com/api/heroStats', function(result) {
        let all = result;
        let semua = ''
        $.each(all, function(i, data) {
            // console.log(data.img)
            //     $('#container1').append(`<div class="card" id="card1">
            //            <a href="http://" target="_blank" rel="noopener noreferrer"> <img src="https://api.opendota.com` + data.img + `" class="card-img" alt="" srcset="">
            //         <h5 class="card-title">` + data.localized_name + `</h5>

            //    </a>
            //     </div>
            //   `);

            semua += `<div class="card" id="card1">
           
            <img src="https://api.opendota.com` + data.img + `" alt="" srcset="">
            <h5 class="card-title">` + data.localized_name + `</h5>
            
             </div>`

        });
        $('#container1').html(semua);


    });
    $('.navig').on('click', function() {
        $('.navig').removeClass('active');
        $(this).addClass('active');

        let atak = $(this).html();
        // $('h1').html(atak)

        $.getJSON('https://api.opendota.com/api/heroStats', function(result) {
            let all = result;
            let sebagian = ''
            $.each(all, function(i, data) {
                if (data.attack_type == atak) {
                    sebagian += `<div class="card" id="card1">
           
                    <img src="https://api.opendota.com` + data.img + `" alt="" srcset="">
                    <h5 class="card-title">` + data.localized_name + `</h5>
        
                    
                     </div>`

                }

            });
            $('#container1').html(sebagian);

        });


    });
    $('#all1').on('click', function() {
        $.getJSON('https://api.opendota.com/api/heroStats', function(result) {
            let all = result;
            let semua = ''
            $.each(all, function(i, data) {
                // console.log(data.img)
                //     $('#container1').append(`<div class="card" id="card1">
                //            <a href="http://" target="_blank" rel="noopener noreferrer"> <img src="https://api.opendota.com` + data.img + `" class="card-img" alt="" srcset="">
                //         <h5 class="card-title">` + data.localized_name + `</h5>

                //    </a>
                //     </div>
                //   `);

                semua += `<div class="card" id="card1">
           
                <img src="https://api.opendota.com` + data.img + `" alt="" srcset="">
                <h5 class="card-title">` + data.localized_name + `</h5>
    
                
                 </div>`

            });
            $('#container1').html(semua);
        })
    })


})
