//네비게이션 , TOP

$(document).ready(function() {
    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
      
    $(".menu_ham").click(function(e) { //메뉴버튼 클릭시
        e.preventDefault();
        
        var documentHeight =  $(document).height();
        $("#gnb").css('height',documentHeight); // 전체 body의 높이를 네비에 높이로 반환
 
        if(op==false){ //네비가 닫혀있는 상태에서 클릭했냐??
          $("#gnb").animate({right:0,opacity:1}, 'fast');
          $('#headerArea').addClass('mn_open');
          op=true;
          $('.modal_box').fadeIn('slow');
        }else{ //네비가 열려있는 상태에서 클릭했냐??
          $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
          $('#headerArea').removeClass('mn_open');
          op=false;
          $('.modal_box').fadeOut('fast');
        }
    });
    
    
    //2depth 메뉴 교대로 열기 처리 
      var onoff=[false,false,false,false]; //각각의 메뉴가 닫혀있으면(false) / 열려있으면(true)
      var arrcount=onoff.length;  //메뉴의개수 4
     
    //console.log(arrcount);
     
        $('#gnb .depth1 h3 a').click(function(){  //1depth 메뉴를 각각 클릭하면
          var ind=$(this).parents('.depth1').index();  // 0~5
         
        //console.log(ind);
         
        if(onoff[ind]==false){
          //$('#gnb .depth1 ul').hide();
          $(this).parents('.depth1').find('ul').slideDown('slow');//클릭한 해당 메뉴의 2depth를 열여라
          $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //나머지 메뉴의 서브를 겁니 다 닫아라
          for(var i=0; i<arrcount; i++) {
            onoff[i]=false; //모든 메뉴의 상태를 false로...
          }
          onoff[ind]=true;  //자신의 상태만 true..
            
          $('.depth1 i').attr('class','fas fa-chevron-down');   
          $(this).find('i').attr('class','fas fa-chevron-up');     
             
          }else{  //클릭한 해당메뉴가 열려있느냐??
            $(this).parents('.depth1').find('ul').slideUp('fast'); // 자신의 서브메뉴만 닫아라
            onoff[ind]=false;   
            
            $(this).find('i').attr('class','fas fa-chevron-down');      
          }
      });
 
     
     //topmove
     $('.topMove').hide();
     $(window).on('scroll',function(){
         let scroll = $(window).scrollTop();
         if(scroll>500) {
             $('.topMove').show();
         }else{
             $('.topMove').hide();
         }
     });
     $('.topMove').click(function(e){
         e.preventDefault();
         $("html,body").stop().animate({"scrollTop":0},800);
     });
     

    //family site
          $('.family .arrow').toggle(function(){   
            $('.family .aList').fadeIn('slow');
            $('.family i').removeClass('.fas fa-chevron-up');
            $('.family i').addClass('.fas fa-chevron-down');
      },function(){
        $('.family .aList').fadeOut('fast');	
            $('.family i').removeClass('.fas fa-chevron-down');
            $('.family i').addClass('.fas fa-chevron-up');	
      });
   });
 
 
 