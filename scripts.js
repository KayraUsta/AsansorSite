function counter() {
    var oTop = $('.counterUp').offset().top - window.innerHeight;

    if ($(window).scrollTop() > oTop) {
        $('.counterUp').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 2000, // animasyon süresi
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        });
        // Sayma animasyonunu sadece bir kez çalıştırmak için bu olaydan çıkarıyoruz
        $(window).off('scroll', counter);
    }
}

// Sayfa kaydırıldığında sayma animasyonunu tetikler
$(window).on('scroll', counter);
