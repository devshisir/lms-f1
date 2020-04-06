$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');
    var iframe = $('#vimeo-player')[0];
    var player = $f(iframe);
    $('select').niceSelect();


    $('.SearchToggle').on('click',function(){
        $('.galleryFilterSearch input').toggleClass('show');
    })
    $('.Likevissiable').on('click',function(){
        $(this).toggleClass('active');
    })

    // gallery slider 
    $('.galleryPopupSlider').owlCarousel({
        loop:true,
        margin:100,
        responsiveClass:true,
        nav: true,
        navText: ["<img src='asset/img/icon/prev.png'>","<img src='asset/img/icon/next.png'>"],
        smartSpeed: 700,
        autoplay:false,
        mouseDrag: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    })  
    $('.galleryMainItemImage').on('click',function(){
        $('#galleryPopup').addClass('show');
    })
    $('.galleryPopUpClose').on('click',function(){
        $('#galleryPopup').removeClass('show');
    })

    // viemo video btn function and popup
    $('.open_viemo').on('click',function(){
        player.api('play');
        $('.project_video_popup').addClass('show');
        $(this).addClass('btn_hide');
        $('.pause_viemo').addClass('btn_show');
        $('.project_info_popup').removeClass('show');
    })
    $('.pause_viemo').on('click',function(){
        player.api('pause');
        $('.project_video_popup').removeClass('show');
        $('.open_viemo').removeClass('btn_hide');
        $(this).removeClass('btn_show');
        $('.project_info_popup').removeClass('show');
    })

    $('.info_show').on('click',function(){
        player.api('pause');
        $('.project_info_popup').addClass('show');
        $(this).addClass('info_btn_hide');
        $('.info_hide').addClass('info_btn_close_show')
    })
    $('.info_hide').on('click',function(){
        $('.project_info_popup').removeClass('show');
        $(this).removeClass('info_btn_close_show');
        $('.info_show').removeClass('info_btn_hide');
    })
    
    
    // gallery slider 
    $('.profileCertificateSlider').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        nav: true,
        navText: ["<img src='asset/img/icon/prev.png'>","<img src='asset/img/icon/next.png'>"],
        smartSpeed: 700,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            }
        }
    })  

    $('#chatBox img').on('click',function(){
        $('.chatBoxMain').toggleClass('show');
    })


    // task1PopupMainSliderActive 
    $('.task1PopupMainSliderActive').owlCarousel({
        loop:false,
        margin:20,
        responsiveClass:true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        smartSpeed: 700,
        autoplay:false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        mouseDrag: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    })
    // task2PopupMainSliderActive 
    $('.task2PopupMainSliderActive').owlCarousel({
        loop:false,
        margin:20,
        responsiveClass:true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        smartSpeed: 700,
        autoplay:false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        mouseDrag: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    })
    // video instruction autoplay false
    $('#VideoInstruction').trigger('pause');
    // task 3 left video triger option
    $('#task3LeftvideoPreview a').on('click',function(){
        $('.task3LeftvideoInfo').fadeOut();
        $('.task3LeftvideoPostar').fadeOut();
        $('#task3MainVideo').trigger('play');
        return false;
    })















    document.getElementById('hintsVideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        $('.videoPostar').fadeIn();
    }
    // check if prev video is finish
    document.getElementById('task3MainVideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        $('.task3LeftvideoInfo').fadeIn();
        $('.task3LeftvideoPostar').fadeIn();
    }









    // hints popup function
    $('#hintsLinkBox').on('click',function(){
        $('.hintBoxPopup').addClass('hintBoxShow');
    })
    $('.hintBoxPopupClose').on('click',function(){
        $('.hintBoxPopup').removeClass('hintBoxShow');
        $('#hintsVideo').trigger('pause');
        $('.videoPostar').fadeIn();
    })
    // hints popup function
    $('#hintsLinkBox2').on('click',function(){
        $('.hintBoxPopup').addClass('hintBoxShow');
    })
    // hints vido function
    $('.hintsvideoPlay').on('click',function(){
        // alert('1');
        $('#hintsVideo').trigger('play');
        $('.videoPostar').fadeOut();
    })


    // task 3 hint box function
    $('#task3LeftHintsBtn').on('click',function(){
        $('.hintBoxPopup3').addClass('hintBoxShow');
        return false;
    })
    $('.hintsvideoPlay3').on('click',function(){
        $('#hintsVideoTask3').trigger('play');
        $('.videoPostar').fadeOut();
    })
    $('.hintBoxPopupClose3').on('click',function(){
        $('.hintBoxPopup3').removeClass('hintBoxShow');
        $('#hintsVideoTask3').trigger('pause');
        $('.videoPostar').fadeIn();
    })

    // quiz popup start btn
    $('#QuizStartBtn').on('click',function(){
        $('.task2PopupMainQuizMainContainer').addClass('show');
        $('#quizItem1').addClass('show');
        $('.task2PopupMainQuizNextBtn').addClass('show');
        return false;
    })

    // quiz next btn
    $('#quizNextBtn').on('click',function(){
        $('#quizItem1').removeClass('show');
        $('#quizItem2').addClass('show');
        return false;
    })
    // quiz select option
    $('.task2PopupMainQuizItemQuestionAnswer2 ul li').on('click',function(){
        $('.task2PopupMainQuizItemQuestionAnswer2 ul li').removeClass('active');
        $(this).toggleClass('active');
    })
    // task 3 typing box popup
    $('#typingMainBtn').on('click',function(){
        $('#typingBoxTask3').addClass('show');
    })
    $('#typingBoxInputForm').on('submit',function(){
        $('#typingBoxTask3').removeClass('show');
        alert('text is submited');
        return false;
    })
    // learning popup main slider 
    $('.learningPopUpMainSlider').owlCarousel({
        loop:false,
        margin:20,
        responsiveClass:true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        smartSpeed: 700,
        autoplay:false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        mouseDrag: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    })

    // task 3 file upload action
    $('#task3FileUploadMainBtn').on('click',function(){
       $('#task3FileUpload').addClass('show');
    })
    $('#task3FileUploadClose').on('click',function(){
        $('#task3FileUpload').removeClass('show');
     })
    
    // task 3 file upload action
    $('#task1FileUploadMainBtn').on('click',function(){
        $('#task1FileUpload').addClass('show');
    })
    $('#task1FileUploadMainBtn2').on('click',function(){
        $('#task1FileUpload').addClass('show');
        return false;
    })
    $('#task1FileUploadClose').on('click',function(){
        $('#task1FileUpload').removeClass('show');
    })

    // recod video submit function
    $('#VideoSubmit').on('click',function(){
        $('#recordVideoSubmit').addClass('submitVideoShow');
    })
    $('#VideoSubmitClose').on('click',function(){
        $('#recordVideoSubmit').removeClass('submitVideoShow');
    })
    $('#CameraStart2').on('click',function(){
        $('#recordVideoSubmit').removeClass('submitVideoShow');
        $('#recorded').removeClass('PreviewVideo');
        $('.previewVideoPlay ').removeClass('showPrevbtn');
        $('#recordVideobtnACtion ').removeClass('show');
        $('.videoCapterMainButton').show();
        $('.videoSubmitbtn').removeClass('vsubmitShow');
        
        return false;
    })

    $('.CameraOpen,#task1FileUploadMainBtn').on('click',function(){
        $('.task1PopupMainVideoArea').addClass('zindex');
    })
    $('.StopCamere,#task1FileUploadClose').on('click',function(){
        $('.task1PopupMainVideoArea').removeClass('zindex');
    })
    $('#chatBoxMobileClose').on('click',function(){
        $('.chatBoxMain').removeClass('show');
    })
    // task popup open function
    // for task 1
    $('#Task1PopUpBtnMain, #Task1PopUpBtnMain2').on('click',function(){
        $('#task1Popup').addClass('taskShow1');
        return false;
    })
    $('.task1popupClose').on('click',function(){
        $('#task1Popup').removeClass('taskShow1');
    })
    // for task 2
    $('#task2PopupMainBtn,#task2PopupMainBtn2').on('click',function(){
        $('#task2QuizPopup').addClass('taskShow2');
        return false;
    })
    $('.task2popupClose').on('click',function(){
        $('#task2QuizPopup').removeClass('taskShow2');
    })
    // for task 3
    $('#task3PopUpMainBtn,#task3PopUpMainBtn3').on('click',function(){
        $('#task3Popup').addClass('taskShow3');
        return false;
    })
    $('.task3popupClose').on('click',function(){
        $('#task3Popup').removeClass('taskShow3');
    })
    // for task 4 learning 
    $('#learningPopUpMainBtn,#learningPopUpMainBtn2').on('click',function(){
        $('#learningPopUp').addClass('taskShow4');
        return false;
    })
    $('.learningPopUpClose').on('click',function(){
        $('#learningPopUp').removeClass('taskShow4');
    })
    // for task 5 video Instruction 
    $('#videoInstructionPopUpMainBtn, #videoInstructionPopUpMainBtn2').on('click',function(){
        $('#videoInstructionPopUp').addClass('taskShow5');
        $('#VideoInstruction').trigger('play');
        return false;
    })
    $('.videoInstructionPopUpClose').on('click',function(){
        $('#videoInstructionPopUp').removeClass('taskShow5');
        $('#VideoInstruction').trigger('pause');
    })












});