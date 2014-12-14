function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 500);
    $element.append('<span class="percent-text">' + percent + "%</span>");
}

progress(20, $('#progressBar'));