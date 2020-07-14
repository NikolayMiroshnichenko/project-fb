$(document).ready(function($) {



    var modal = new tingle.modal({
       footer: !1,
       stickyFooter: !1,
       cssClass: ["custom-class-1", "custom-class-2"],
       beforeOpen: function() {
        $("form").submit(function(event) {
                       var th = $(this);
                       
                       $.ajax({
                           type: "POST",
                           url: "https://webinar.protargeting.team/success/send.php",
                           data: th.serialize(),
                           success: function() {
   
                           var url = "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJwdWJsaWNfa2V5IjoiaTI5NzYyMjMwOTMzIiwiYW1vdW50IjoiNSIsImN1cnJlbmN5IjoiVVNEIiwiZGVzY3JpcHRpb24iOiLQntC%2F0LvQsNGC0LAg0LLQuNC00LXQviDQt9Cw0L%2FQuNGB0YwgLSDQoNCw0LHQvtGC0LAg0JDQu9Cz0L7RgNC40YLQvNCwIEZhY2Vib29rIiwidHlwZSI6ImJ1eSIsImxhbmd1YWdlIjoicnUifQ%3D%3D&signature=%2Fh00LNBPy%2BxTPVDPnVS3Ojg%2B5mU%3D";
                           $(location).attr('href',url);
   
                           setTimeout(function() {
                               th.trigger("reset");
                           }, 1000);
                        
                           
   
                       }
                   });
                       event.preventDefault();
                   });