// p5 calls setup() exactly once when the canvas loads
function setup() {
    createCanvas(windowWidth, windowHeight);
    loadTable('groceries.tsv', 'tsv', 'header', showData);

    textSize(20);
    textAlign(CENTER);
    // noLoop();
}

function showData(data) {
    var count = data.getRowCount();
    console.log(count);
    
    for (var i=0; i<count; i++) {
        var amount = data.getString(i, 0);
        var unit = data.getString(i, 1);
        var item = data.getString(i, 2);
        var source = data.getString(i, 3);
        
        if (source == 'store')
            fill(255, 120, 0);
        else {
            // non-store items
            fill('darkgray');
        }
        
        text(amount + ' | ' + unit + ' | ' + item + ' | ' + source, 0, 30 * (i + 1), width, height);
    }
    
}