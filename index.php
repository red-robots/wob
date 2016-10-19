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
            api_root: "<?php echo esc_url(get_rest_url(null,"wp/v2/"));?>",
            root: "<?php echo trailingslashit(esc_url(get_bloginfo("url")));?>",
            install: "<?php echo preg_replace("/http:\/\/.+?\//i","",get_bloginfo("url"));?>",
        };
      </script>
      <script src = "<?php echo get_template_directory_uri()."/build/index.js"?>"></script>
      <?php wp_footer(); ?>
   </body>

</html>
