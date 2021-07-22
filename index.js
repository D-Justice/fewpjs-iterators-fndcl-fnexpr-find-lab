
superbowlWin = (record) => {
    let date = record.find(function(each) {return each.result === 'W'})
    if (date) {return date.year};
}
