<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page 2</title>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="page2.css">
</head>

<body>
    <!-- header -->
     <header>
        <img src="image/dota-2.png" alt="" srcset="">
        
        
        <?php

            echo('<h2 style="font-family: sans-serif;">' . 'Welcome ' . ' ' . $_GET['Username'] . '</h2>');


        ?>
  <div class="grup" id="grup1">

        <div class="tambah">
            <a href="page3.php"><button>Detail Hero</button>

        </div>

    </div>

    </header>
  
    
    <!-- navigation -->
    <div class="nav">

        <a class="navig all active" id="all1" href="#">ALL</a>
        <a class="navig carry" href="#">Melee</a>
        <a class="navig escape" href="#">Ranged</a>
        

    </div>
    <!-- box content -->
    <div class="container" id="container1">
        <div class="card" id="card1">
           <img src="" class="card-img" alt="" srcset="">
                <h5 class="card-title"></h5>

          

  
        </div>

    </div>
        <div id="bawah">
        <a href="#all1" id="ref2"><div id="back">Back to top</div></a>
  
</body>

</html>
