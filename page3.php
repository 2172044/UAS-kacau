<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="script3.js"></script>
    <link rel="stylesheet" href="page3.css">
</head>
<body>
    <!-- NAVIG BAR -->
    <div class="containersearch">
        <ins></ins>
        <div class="search"> <input type="heroName" name="" placeholder="Type hero name here.." id="save">
            <div class="inputbutton">
                <button type="button" id="mybutton" class="mybutton">Search</button>
            </div>
        </div>
        <div class="logout">
            <a href="login.php"><button id="keluar" onclick="return logOut()">Log Out</button></a>
        </div>
    </div>
    <!-- CARD -->
    <div class="carddetail">
        <div class="img">
            <img src="image/oops.jpg" alt="hero">
        </div>
        <div class="info">
            <h3>No hero is found!</h3>
        </div>
        <div class="stats" id="over">
            <ul>
                <li>
                    <div id="status"></div>
                </li>
            </ul>
            <ul>
                <li class="detailnya">
                    <div id="satu"></div>
                    <br>
                    <div id="dua"></div>
                    <br>
                    <div id="tiga"></div>
                    <br>
                    <div id="for"></div>
                    <br>
                    <div id="lima"></div>
                    <br>
                    <div id="enam"></div>
                </li>
            </ul>
        </div>
    
    <script>
        function logOut() {
            if (document.getElementById('keluar').onclick) {
                let out = confirm('Apakah anda ingin Log Out?');
                return out;
            }
        }
    </script>
</body>
