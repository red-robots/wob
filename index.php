<!DOCTYPE html>
<html lang = "en">

   <head>
      <meta charset = "UTF-8">
      <title>React App</title>
       <?php wp_head(); ?>
   </head>

   <body>
      <div id = "app"></div>
      <script type="text/javascript">
        var wobbegong = {
            api_root: "/bellaworks/wob/wp-json/wp/v2/",
            root: "/bellaworks/wob/",
            theme_root: "/bellaworks/wob/wp-content/themes/wob/reactApp/"
        };
      </script>
      <script src = "/bellaworks/wob/wp-content/themes/wob/build/index.js"></script>
      <?php wp_footer(); ?>
   </body>

</html>
