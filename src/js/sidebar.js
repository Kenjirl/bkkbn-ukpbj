$(document).ready(function() {
    $(".toggle-nav-btn").click(function() {
        $(".sidebar").toggleClass('active');
    });

    $('.dropdown-btn').click(function() {
        $(".dropdown-btn").removeClass('active');
        $(".dropdown-content").removeClass('active');
        $(this).toggleClass('active');
        $(this).closest('.dropdown-btn-wrapper').next('.dropdown-content').toggleClass('active');
    });

    $(".click-to-copy").on("click", function (e) {
        e.preventDefault();

        const textToCopy = $(this).data("copy");

        navigator.clipboard.writeText(textToCopy).then(() => {
            Toastify({
                text: "Disalin: " + textToCopy,
                duration: 3000,
                close: true,
                gravity: "bottom",
                style: {
                    background: "#4CAF50",
                    fontSize: "12px",
                    maxWidth: "unset",
                    borderRadius: "4px",
                    padding: "10px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                    textAlign: "right",
                }
            }).showToast();
        }).catch((err) => {
            console.error("Gagal menyalin:", err);
        });
    });
});