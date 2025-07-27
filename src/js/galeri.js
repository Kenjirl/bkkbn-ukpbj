$(document).ready(function() {
    const show_detail = "... baca selengkapnya";
    const hide_detail = "... lihat lebih sedikit";

    $(".event-description-toggle-btn").click(function() {
        const $this = $(this);
        const $eventDescription = $this.closest('.event-info-container').find('.event-description');

        if ($eventDescription.hasClass('active')) {
            $eventDescription.removeClass('active');
            $this.text(show_detail);
        } else {
            $eventDescription.addClass('active');
            $this.text(hide_detail);
        }
    });
});
