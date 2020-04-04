$(document).ready(function() {
   $("#orderedlist").addClass("red");
 });
 $(document).ready(function() {
   $("#orderedlist > li").addClass("blue");
   $("#orderedlist").find("li").append( "li element was found");
 });

