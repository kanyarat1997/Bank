$(document).ready(function(){

    //map1
    tippy('#map1point1', {
      content: "วัดถ้ำเขาคีรีบรรพตเหมืองทองแดงโบราณ" ,
      theme: 'tomato'
    })
    tippy('#map1point2', {
      content: "วัดท่าสองคอน" ,
      theme: 'tomato'
    })
    tippy('#map1point3', {
      content: "จุดชมวิวทะเลหมอกภูห้วยอีสัน" ,
      theme: 'tomato'
    })
    tippy('#map1point4', {
      content: "ทะเลหมอกภูผาดัก" ,
      theme: 'tomato'
    })
    tippy('#map1point5', {
      content: "ภูโล้น" ,
      theme: 'tomato'
    })
    tippy('#map1point6', {
      content: "ทะเลหมอกภูหนอง" ,
      theme: 'tomato'
    })
    tippy('#map1point7', {
      content: "พันโขดแสนไคร้(แกรนด์แคนยอนหนองคาย)" ,
      theme: 'tomato'
    })
    tippy('#map1point8', {
      content: "หนองปลาบึก" ,
      theme: 'tomato'
    })
    tippy('#map1point9', {
      content: "น้ำตกธารทิพย์" ,
      theme: 'tomato'
    })
    tippy('#map1point10', {
      content: "วัดถ้ำผาตากเสื้อ" ,
      theme: 'tomato'
    })




    //map2
    tippy('#map2point1', {
      content: "วัดยอดแก้ว" ,
      theme: 'tomato'
    })
    tippy('#map2point2', {
      content: "วัดศรีมงคล" ,
      theme: 'tomato'
    })
    tippy('#map2point3', {
      content: "วัดกุศลนารี" ,
      theme: 'tomato'
    })
    tippy('#map2point4', {
      content: "วัดสาวสุวรรณาราม",
      theme: 'tomato'
    })
    tippy('#map2point5', {
      content: "วัดสมประศักดิ์" ,
      theme: 'tomato'
    })
    tippy('#map2point6', {
      content: "" ,
      theme: 'tomato'
    })
    tippy('#map2point7', {
      content: "" ,
      theme: 'tomato'
    })
    tippy('#map2point8', {
      content: "" ,
      theme: 'tomato'
    })
    tippy('#map2point9', {
      content: "" ,
      theme: 'tomato'
    })
    tippy('#map2point10', {
      content: "" ,
      theme: 'tomato'
    })
    tippy('#map2point11', {
      content: "" ,
      theme: 'tomato'
    })
    tippy('#map2point12', {
      content: "" ,
      theme: 'tomato'
    })


    // map3
    tippy('#map3point1', {
        content: "บ้านดอนข่า หมู่ 7 ตำบลชนบท อำเภอชนบท จังหวัดขอนแก่น “Health and Herbs”" ,
        theme: 'tomato'
      })

    tippy('#map3point2', {
    content: "บ้านหนองหญ้าปล้อง หมู่ 9 ตำบลโพนเพ็ก อำเภอมัญจาคีรี จังหวัดขอนแก่น “อีรี่ อีหลี” " ,
    theme: 'tomato'
    })

    tippy('#map3point3', {
    content: "บ้านหวายหลืม หมู่ 10 ตำบลนาข่า อำเภอมัญจาคีรี  จังหวัดขอนแก่น “ท้องทุ่ง เสน่ห์แห่งสีสันบ้านเฮา” " ,
    theme: 'tomato'
    })


    // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});