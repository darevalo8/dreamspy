
$( document ).ready(function () {
    var estado = 1;
    var estado_sueño = 1;
    var id_sueno = 0;
   $(".idioma").click(function () {
       var lenguaje = $(this).text()
       console.log(lenguaje);
       $.ajax({
           data: {'idioma': lenguaje},
           url: '/cambio-lenguaje/',
           type: 'get',
           success: function (data) {
                console.log(data);
                $('.title').text(data.sub_pregunta);
                $('#sad_image').text(data.sad_image);
                $('#happy_image').text(data.happy_image);
           }
       });
   });
   $('.desagradable').click(function () {
      estado_sueño = 0;
      console.log(estado_sueño);
   });
   $('.agradable').click(function () {
      estado_sueño = 1;
      console.log(estado_sueño);
   });
   $('.continue').click(function () {
       $.ajax({
           data: {'estado_sueño': estado_sueño},
           url: '/crear-sueño/',
           type: 'get',
           success: function (data) {
                id_sueno = data;
                localStorage.setItem("Id", id_sueno);
                localStorage.setItem("Estado", estado_sueño);
                if(estado_sueño){
                    window.location.href = "/agradable";

                }else {
                    window.location.href = "/desagradable";
                }


           }
       });

   });
   estado_sueño = localStorage.getItem("Estado");
   console.log(estado_sueño);
   $('.boton').click(function () {
       var id = localStorage.getItem("Id");
       console.log(estado_sueño)
       texto = $(".renglones").val();
       obj = {'id_sueno': id, 'texto': texto};


      $.ajax({
           data: obj,
           url: '/crear-descripcion/',
           type: 'get',
           success: function (data) {
               if(data){
                   if(estado_sueño == 1){
                       window.location.href = "/personaje-agradables";

                   }else {

                       window.location.href = "/personaje-desagradables";

                    }
               }
           }
       });
   });
   $('.personaje').click(function () {
       var id = localStorage.getItem("Id");
       estado_sueño = localStorage.getItem("Estado");

       console.log(estado_sueño);
       console.log(id);
       var personaje1 = $('#personaje1').val();
       var personaje2 = $('#personaje2').val();
       if(personaje1 && personaje2){
           console.log(personaje1);
           console.log(personaje2);
           obj = {
               'personaje1': personaje1,
               'personaje2': personaje2,
               'id_sueno': id
           };
           $.ajax({
           data: obj,
           url: '/crear-personajes/',
           type: 'get',
           success: function (data) {

               if(data){
                   window.location.href = "/introducciones";
               }
           }
       });
       }else {
           console.log("digita los personajes")
       }

   });


});