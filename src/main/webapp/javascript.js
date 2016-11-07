/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global out */

$(document).ready(function () {
   
    $("ul.droptrue").sortable({
        connectWith: "ul",
        dropOnEmpty: true,
        cursor: 'move',
        placeholder: "ui-state-highlight",
        
    });

    $("ul.dropfalse1").sortable({
        connectWith: "ul",
        dropOnEmpty: true,
        cursor: 'move',
        placeholder: "ui-state-highlight",
        receive: function (event, ui) {
            if($(this).children().length < 2) {
                 ui.item.appendTo('#sortable2');
            }
            else{
                 ui.item.appendTo('#sortable1');
            }
        }
    });

    $("ul.dropfalse2").sortable({
        connectWith: "ul",
        dropOnEmpty: true,
        cursor: 'move',
        placeholder: "ui-state-highlight",
        receive: function (event, ui) {
            if($(this).children().length < 2) {
               ui.item.appendTo('#sortable3');
            }
            else{
                 ui.item.appendTo('#sortable1');
            }    
        }
    });
});