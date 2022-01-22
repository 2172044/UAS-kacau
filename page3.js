$(document).ready(function() {
    $('#mybutton').on('click', function() {
        let nama = $('#save').val();





        $.getJSON('https://api.opendota.com/api/heroStats', function(result) {

            let oke = result;
            let kartu = '';

            $.each(oke, function(i, data) {
                let a = data.roles
                    //  let text = "<ul>"

                //  for (i = 0; i < a.length; i++) {
                //      console.log(a[i])
                //  }
                //  console.log(data)

                if (data.localized_name == nama) {
                    $('.img').html(`<div class="img">
                    <img src="https://api.opendota.com` + data.img + `" class="card-img" alt="" srcset="">
                </div>`)
                    $('h3').text(data.localized_name)
                    $('#satu').text('Attack type: ' + data.attack_type)
                    $('#dua').text('Attack range : ' + data.attack_range)
                    $('#tiga').text('Primary attribute : ' + data.primary_attr)
                    $('#for').text('Move speed : ' + data.move_speed)
                    $('#lima').text('Base health : ' + data.base_health)
                    $('#enam').text('Projectile Speed : ' + data.projectile_speed)


                    let text = "<ul> Role";
                    for (let i = 0; i < a.length; i++) {
                        text += "<li>" + a[i] + "</li>";
                    }
                    text += " </ul>";

                    document.getElementById("status").innerHTML = text;

                }

                //      + `</p>
                //     <p>Detail Heronya</p>
                // </div>`
            })


            //              kartu +=
            //                  `<div class="img">

            // <img src="https://api.opendota.com` + data.img + `" class="card-img" alt="" srcset="">
            // </div>
            // <div class="info">
            //     <h3>` + data.localized_name + `</h3>
            // </div>
            // <div class="stats">
            //     <p>` + data.attack_type + `</p>
            //     <p>` + 
            //     let text = "<ul>";
            //     for (let i = 0; i < fLen; i++) {
            //       text += "<li>" + fruits[i] + "</li>";
            //     }
            //     text += "</ul>";
            //      + `</p>
            //     <p>Detail Heronya</p>
            // </div>`
            //          }

            //      });
            //      $('.carddetail').html(kartu);
            // let sebagian = ''
            //      $.each(all, function(i, data) {
            //          if (data.attack_type == atak) {
            //              sebagian += `<div class="card" id="card1">
            //         <a href=""  rel="noopener noreferrer"class="href" target="blank"> <img src="https://api.opendota.com` + data.img + `" class="card-img" alt="" srcset="">
            //      <h5 class="card-title">` + data.localized_name + `</h5>

            // </a>



            //  </div>`

            //          }

            //      });
            //      $('#container1').html(sebagian); //



            //  })









            // if (name == nama) 
            // {$('#container2').text('ada')
            //  $('#container2').text('ada')

            //  if (data.localized_name == nama) {
            //  $('#container2').text('ada')
            //

            //  } else {
            //      $('#container2').text('tidak ada');

            //  } else {
            //      $('#container2').text('tidak ada')

            //      //  } else {
            //      //      $('#container2').text('tidak ada');

            //      //  }
            //  });



            //  $('#save').val("");


            //  } else {
            //      $('#container2').text('tidak ada');





            //     $('#container1').append(`<div class="card" id="card1">
            //            <a href="http://" target="_blank" rel="noopener noreferrer"> <img src="https://api.opendota.com` + data.img + `" class="card-img" alt="" srcset="">
            //         <h5 class="card-title">` + data.localized_name + `</h5>

            //    </a>
            //     </div>
            //   `);
        });





    });
    // BINATANG[kucing, anjung, ular]
    // for (i = 0; i<binatang.length;i++{
    //     console.log (binatang[i])

    // }













});