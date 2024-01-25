
const elements = ["segment1", "segment2", "segment3", "segment4", "segment5", "segment6"];
var sequence = [];
var sequence_index = 0;

function blink(element){
    console.log("blink" + element);
    doAnimation(element, "blink");
}

function show_mistake(element) {
    doAnimation(element, "blink-mistake");
}

function doAnimation(element, className) {
    element.classList.add(className);
    setTimeout(endAnimation, timeout=750, element, className);
}

function endAnimation(element, className) {
    element.classList.remove(className);
}

function show_sequence() {
    for (i in sequence) {
        setTimeout(blink, 800 * (i), sequence[i]);
    }
}

function extend_sequence() {
    sequence_index = 0;
    sequence.push(get_random_element());
}

function reset_sequence() {
    sequence_index = 0;
    sequence = [];
}

function get_random_element() {
    var elementId = elements[~~(Math.random() * elements.length)];
    return document.getElementById(elementId);
}

function check_sequence(elem) {
    if (sequence.length == 0) {
        sequence.push(elem);
        return true;
    } else if (elem.id == sequence[sequence_index].id) {
        return true;
    } else {
        return false;
    }
}

function simon_says(elem) {
    console.log(sequence, sequence_index);
    if (!check_sequence(elem)) {
        show_mistake(elem);
        reset_sequence();
    } else if (sequence_index == sequence.length - 1) {
        blink(elem);
        extend_sequence();
        setTimeout(show_sequence, 1200);
    } else {
        blink(elem);
        sequence_index++;
    }
}
