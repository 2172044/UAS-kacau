<!DOCTYPE html>
<html lang="en">

<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>log in</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    
    <!-- // <div class="judul"> Fill in this form </div> -->
    <div class="container">
        <div class="login">
           <form action="page2.php" method="get" name="FormStart" onsubmit="return cekData()">
           
               <div class="title">
                   <img src="image/dota-2.png" alt="" srcset="">
                   <h3>DOTA 2</h3>
               </div>       
               <br>
               <div><label for="">Username</label><br>
                   <input type="text" placeholder="Username" name="Username" id="username" minlength="4">
               </div>
               <br>
               <div><label for="">Password</label><br>
                   <input type="password" name="Password" id="password" placeholder="Password" minlength="8">
               </div>
               <br>
               <div><label for="password2">Confirm password</label><br>
                   <input type="password" name="Password2" id="password2" placeholder="Comfirm">
               </div>
               <br>
               <div class="sign"><button type="submit" name="btnSubmit">Start</button></div><br>
            </form>
        </div>
    </div>
    <script>
        function cekData() {
            if (document.forms["FormStart"]["Username"].value == "") {
                alert("Username tidak boleh kosong!");
                alert("Silahkan isi username!");
                document.forms["FormStart"]["Username"].focus();
                return false;
            }
            if (document.forms["FormStart"]["Password"].value == "") {
                alert("Password tidak boleh kosong!");
                alert("Silahkan isi password anda!");
                document.forms["FormStart"]["Password"].focus();
                return false;
            }
            if (document.forms["FormStart"]["Password2"].value == "" ) {
                alert("Mohon konfirmasi password terlebih dahulu!");
                document.forms["FormStart"]["Password2"].focus();
                return false;
            }
            if (document.forms["FormStart"]["Password2"].value != document.forms["FormStart"]["Password"].value) {
                alert("Konfirmasi gagal, password yang anda masukkan belum benar!");
                document.forms["FormStart"]["Password2"].focus();
                return false;
            };
  
        };
    </script>
</body>
</html>
