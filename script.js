$('body')
.append(
    $('<h1>').text('Todo List') .addClass('heading')
)
.append(
    $('<div>')
    .addClass('inputdetails')
    .append(
    $('<input>')
    .attr('placeholder','Enter New Task')
    .attr('type','text')
     .addClass('newtask')
)
.append(
    $('<button>')
    .text('Add Task')
    .addClass('btn')
    .click(ev=>{
        if($('.newtask').val().trim()!=''){
        $('.tasklist')
        .append(
            $('<li>')
            .addClass('task')
            .text(
                $('.newtask').val()
            )
            .append(
            $('<div>')
            .addClass('btngrp')
            .append(
                $('<button>').text('⬆').addClass('upbtn')
            )
            .append(
                $('<button>').text('⬇').addClass('downbtn')
            )
            .append(
                $('<button>').text('❌').addClass('deletebtn')
            )
        )
        
        )
       $('.newtask').val('')
       
    }
    })
)
)

.append(
    $('<ul>')
    .addClass('tasklist')
    .click(ev=>{
        if($(ev.target) .hasClass('upbtn')){
            $(ev.target).parent().parent()
          .insertBefore($(ev.target).parent().parent().prev())
        }else if($(ev.target) .hasClass('downbtn')){
            $(ev.target).parent().parent()
            .insertAfter($(ev.target).parent().parent().next())
        }else if($(ev.target) .hasClass('deletebtn')){
           $(ev.target).parent().parent().remove()

        }
       })
)